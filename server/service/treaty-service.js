const {clientPool, authPool, chiefPool} = require('../db');
const ApiError = require('../error/ApiError');
const tokenService = require('./token-service');

class TreatyService {

    async create(service, clientInfo, place, userId) {
        const selectClientQuery = {
            text: 'SELECT * FROM clients WHERE "userId" = $1',
            values: [userId]
        };
        const client = await authPool.query(selectClientQuery);
        if (!client.rows) {
            throw ApiError.BadRequest('Something went wrong, please re-login');
        }
        const clientId = client.rows[0].id;
        const insertQuery = {
            text: 'INSERT INTO treaties (service, "clientInfo", place, "clientId") VALUES ($1, $2, $3, $4) RETURNING *',
            values: [service, clientInfo, place, clientId]
        };
        const result = await clientPool.query(insertQuery);

        return result.rows[0];
    }

    async getAll(userId, userRole, sorting) {
        if (userRole === 'CHIEF') {
            let treatiesResult
            if (sorting) {
                treatiesResult = await chiefPool.query(`SELECT * FROM sorted_treaties_by_${sorting}`);
            } else {
                treatiesResult = await chiefPool.query('SELECT * FROM treaties');
            }

            const treaties = treatiesResult.rows;

            for (const treaty of treaties) {
                const clientId = treaty.clientId;
                const selectClientQuery = {
                    text: 'SELECT * FROM clients WHERE id = $1',
                    values: [clientId]
                };
                const clientResult = await chiefPool.query(selectClientQuery);
                treaty.client = clientResult.rows[0];

                const employeeId = treaty.employeeId;
                const selectEmployeeQuery = {
                    text: 'SELECT * FROM employees WHERE id = $1',
                    values: [employeeId]
                };
                const employeeResult = await chiefPool.query(selectEmployeeQuery);
                if (!employeeResult) return;
                treaty.employee = employeeResult.rows[0];
            }

            return treaties;
        }

        const selectClientQuery = {
            text: 'SELECT * FROM clients WHERE "userId" = $1',
            values: [userId]
        };
        const client = await authPool.query(selectClientQuery);
        if (!client.rows) {
            throw ApiError.BadRequest('Something went wrong, please re-login');
        }
        const clientId = client.rows[0].id;
        let selectTreatieQuery
        if (sorting) {
            selectTreatieQuery = {
                text: `SELECT * FROM sorted_treaties_by_${sorting} WHERE "clientId" = $1`,
                values: [clientId]
            };
        } else {
            selectTreatieQuery = {
                text: 'SELECT * FROM treaties WHERE "clientId" = $1',
                values: [clientId]
            };
        }
        const result = await clientPool.query(selectTreatieQuery);

        return result.rows;
    }

    async updateIsPaid(isPaid, id) {
        const updateQuery = {
            text: 'UPDATE treaties SET "isPaid" = $1 WHERE id = $2 RETURNING *',
            values: [isPaid, id]
        };
        const result = await clientPool.query(updateQuery);
        if (result.rows.length === 0) {
            throw ApiError.BadRequest('No such treaty was found');
        }

        return result.rows[0];
    }

    async update(status, price, employeeId, id) {
        const updateQuery = {
            text: 'UPDATE treaties SET status = $1, price = $2, "employeeId" = $3 WHERE id = $4 RETURNING *',
            values: [status, price, employeeId, id]
        };
        const result = await chiefPool.query(updateQuery);
        if (result.rows.length === 0) {
            throw ApiError.BadRequest('No such treaty was found');
        }

        return result.rows[0];
    }

    async delete(id) {
        const deleteQuery = {
            text: 'DELETE FROM treaties WHERE id = $1 RETURNING *',
            values: [id]
        };
        const result = await clientPool.query(deleteQuery);
        if (result.rows.length === 0) {
            throw ApiError.BadRequest('No such treaty was found');
        }

        return result.rows[0];
    }

}

module.exports = new TreatyService();