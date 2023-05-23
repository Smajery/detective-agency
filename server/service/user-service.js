const {authPool} = require('../db');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenServise = require('./token-service');
const UserDto = require('../dtos/user-dto');
const {emailRegex} = require('../regex/regex');

class UserService {
    constructor() {
        setInterval(this.removeInactiveUsers.bind(this), 60 * 60 * 1000);
    }

    async registration(email, password) {
        if (!emailRegex.test(email)) {
            throw ApiError.BadRequest('Invalid email');
        }
        const selectQuery = 'SELECT * FROM users WHERE email = $1';
        const candidate = await authPool.query(selectQuery, [email]);
        if (candidate.rows.length > 0) {
            throw ApiError.BadRequest('This user already exists');
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();

        const insertQuery = {
            text: 'INSERT INTO users (email, password, "activationLink") VALUES ($1, $2, $3) RETURNING *',
            values: [email, hashPassword, activationLink]
        };
        const result = await authPool.query(insertQuery);
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`);

        const userDto = new UserDto(result.rows[0]);
        const tokens = tokenServise.generateTokens({...userDto});
        await tokenServise.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto};
    }

    async activate(activationLink) {
        const selectQuery = {
            text: 'SELECT * FROM users WHERE "activationLink" = $1',
            values: [activationLink]
        };
        const userData = await authPool.query(selectQuery);
        if (!userData.rows) {
            throw ApiError.BadRequest('Invalid link');
        }
        const updateUserQuery = {
            text: 'UPDATE users SET "isActivated" = true WHERE "activationLink" = $1',
            values: [activationLink]
        };
        await authPool.query(updateUserQuery);
    }

    async login(email, password) {
        if (!emailRegex.test(email)) {
            throw ApiError.BadRequest('Invalid email');
        }
        const selectQuery = {
            text: 'SELECT * FROM users WHERE email = $1',
            values: [email]
        };
        const result = await authPool.query(selectQuery);
        const user = result.rows[0];
        if (!user) {
            throw ApiError.BadRequest('No such user exists');
        }

        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest('Invalid password');
        }
        if (!user.isActivated) {
            throw ApiError.BadRequest('Link is not activated');
        }

        const userDto = new UserDto(user);
        const tokens = tokenServise.generateTokens({...userDto});

        await tokenServise.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto};
    }


    async logout(refreshToken) {
        return await tokenServise.removeToken(refreshToken);
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.Unauthorized('Unauthorized');
        }
        const userData = tokenServise.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenServise.findToken(refreshToken);

        if (!userData || !tokenFromDb) {
            throw ApiError.Unauthorized('Unauthorized');
        }

        const selectQuery = {
            text: 'SELECT * FROM users WHERE id = $1',
            values: [userData.id]
        };
        const result = await authPool.query(selectQuery);
        const user = result.rows[0];

        if (!user) {
            throw ApiError.BadRequest('This user already exists');
        }

        const userDto = new UserDto(user);
        const tokens = tokenServise.generateTokens({...userDto});

        await tokenServise.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto};
    }

    async removeInactiveUsers() {
        try {
            const deleteQuery = `DELETE FROM users WHERE "isActivated" = false AND CURRENT_TIMESTAMP(0) - "updatedAt" > interval '1 hour'`;
            const result = await authPool.query(deleteQuery);
            if (result.rowCount > 0) {
                console.log(`Removed ${result.rowCount} inactive users`);
            }
            await authPool.query('DELETE FROM tokens WHERE "userId" IS NULL');
        } catch (e) {
            console.error(`Error removing inactive users: ${e.message}`);
        }
    }

    async resetPassword(email) {
        const selectQuery = {
            text: 'SELECT * FROM users WHERE email = $1',
            values: [email]
        };
        const userResult = await authPool.query(selectQuery);
        if (userResult.rows.length === 0) {
            throw ApiError.BadRequest('This user does not exist');
        }

    }
}

module.exports = new UserService();