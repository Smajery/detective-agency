const {authPool} = require('../db');
const ApiError = require('../error/ApiError');

class ClientService {

    async create(email, userId) {
        const selectQuery = {
            text: 'SELECT * FROM clients WHERE "userId" = $1',
            values: [userId]
        };
        const client = await authPool.query(selectQuery);
        if (client.rows.length > 0) {
            return;
        }

        const selectUserQuery = {
            text: 'SELECT * FROM users WHERE id = $1',
            values: [userId]
        };
        const user = await authPool.query(selectQuery);
        if (!user.rows) {
            throw ApiError.BadRequest('This user does not exist');
        }

        const insertQuery = {
            text: 'INSERT INTO clients (email, "createdAt", "updatedAt", "userId") VALUES ($1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, $2) RETURNING *',
            values: [email, userId]
        };
        const result = await authPool.query(insertQuery);

        return result.rows[0];
    }

}

module.exports = new ClientService();