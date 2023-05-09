const {authPool} = require('../db');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenServise = require('./token-service');
const UserDto = require('../dtos/user-dto');
const {emailRegex} = require('../regex/regex')

class UserService {

    async registration(email, password) {
        if(!emailRegex.test(email)) {
            throw ApiError.BadRequest(`Incorrect email`);
        }
        const query = 'SELECT * FROM users WHERE email = $1';
        const candidate = await authPool.query(query, [email]);
        if (candidate.rows > 0) {
            throw ApiError.BadRequest(`User with e-mail: ${email} already exists`);
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();

        const insertQuery = {
            text: 'INSERT INTO users (email, password, "activationLink", "createdAt", "updatedAt") VALUES ($1, $2, $3, CURRENT_DATE, CURRENT_DATE) RETURNING *',
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
            throw new ApiError.BadRequest('Invalid link');
        }
        const updateUserQuery = {
            text: 'UPDATE users SET "isActivated" = true WHERE "activationLink" = $1',
            values: [activationLink]
        };
        await authPool.query(updateUserQuery);
    }

    async login(email, password) {
        if(!emailRegex.test(email)) {
            throw ApiError.BadRequest(`Incorrect email`);
        }
        const selectQuery = {
            text: 'SELECT * FROM users WHERE email = $1',
            values: [email]
        };
        const result = await authPool.query(selectQuery);
        const user = result.rows[0];
        if (!user) {
            throw ApiError.BadRequest(`User with email: ${email} not found`);
        }

        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest(`Incorrect password`);
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
        }
        const result = await authPool.query(selectQuery);
        const user = result.rows[0];
        console.log(user)

        if (!user) {
            throw ApiError.BadRequest(`User with id: ${userData.id} not found`);
        }

        const userDto = new UserDto(user);
        const tokens = tokenServise.generateTokens({...userDto});

        await tokenServise.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto};
    }

}

module.exports = new UserService();