const {clientPool, authPool} = require('../db');
const ApiError = require('../error/ApiError');
const tokenService = require('./token-service');

class TreatyService {

    async create(service, clientInfo, place, userId) {
        const selectClientQuery = {
            text: 'SELECT * FROM clients WHERE "userId" = $1',
            values: [userId]
        }
        const client = await authPool.query(selectClientQuery)
        if(!client.rows) {
            throw ApiError.BadRequest('Something went wrong, please re-login')
        }
        const clientId = client.rows[0].id
        const insertQuery = {
            text: 'INSERT INTO treaties (service, "clientInfo", place, "clientId", "updatedAt") VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP(0)) RETURNING *',
            values: [service, clientInfo, place, clientId]
        };
        const result = await clientPool.query(insertQuery);

        return result.rows[0];
    }

    async getAll(userId) {
        const selectClientQuery = {
            text: 'SELECT * FROM clients WHERE "userId" = $1',
            values: [userId]
        }
        const client = await authPool.query(selectClientQuery)
        if(!client.rows) {
            throw ApiError.BadRequest('Something went wrong, please re-login')
        }
        const clientId = client.rows[0].id
        const selectTreatieQuery = {
            text: 'SELECT * FROM treaties WHERE "clientId" = $1',
            values: [clientId]
        }
        const result = await clientPool.query(selectTreatieQuery)

        return result.rows;
    }

}

module.exports = new TreatyService();