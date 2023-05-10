const jwt = require('jsonwebtoken');
const {authPool} = require('../db');
const ApiError = require('../error/ApiError');
const {resetWatchers} = require('nodemon/lib/monitor/watch');

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});
        return {
            accessToken,
            refreshToken
        };
    }

    validateAccessToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        } catch (e) {
            return null;
        }
    }

    async saveToken(userId, refreshToken) {
        const selectQuery = {
            text: 'SELECT * FROM tokens WHERE "userId" = $1',
            values: [userId]
        };
        const token = await authPool.query(selectQuery);
        if (token.rows > 0) {
            const updateQuery = {
                text: 'UPDATE tokens SET "refreshToken" = $1 WHERE "userId" = $2 RETURNING *',
                values: [refreshToken, userId]
            };
            const updatedToken = await authPool.query(updateQuery);
            return updatedToken.rows[0];
        }
        const insertQuery = {
            text: 'INSERT INTO tokens ("userId", "refreshToken", "createdAt", "updatedAt") VALUES ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *',
            values: [userId, refreshToken]
        };
        const result = await authPool.query(insertQuery);
        const tokenData = result.rows[0]
        if(!tokenData) {
            throw ApiError.BadRequest('Token was not added')
        }
        return tokenData;
    }

    async removeToken(refreshToken) {
        const deleteQuery = {
            text: 'DELETE FROM tokens WHERE "refreshToken" = $1 RETURNING *',
            values: [refreshToken]
        };
        const result = await authPool.query(deleteQuery);
        const tokenData = result.rows[0]
        if(!tokenData) {
            throw ApiError.BadRequest('Token not found')
        }
        return tokenData;
    }

    async findToken(refreshToken) {
        const selectQuery = {
            text: 'SELECT * FROM tokens WHERE "refreshToken" = $1',
            values: [refreshToken]
        };
        const result = await authPool.query(selectQuery);
        console.log(result)
        const tokenData = result.rows[0]
        if(!tokenData) {
            throw ApiError.BadRequest('Token not found')
        }
        return tokenData;
    }
}

module.exports = new TokenService();