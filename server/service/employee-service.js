const {chiefPool} = require('../db');
const ApiError = require('../error/ApiError');
const tokenService = require('./token-service');

class EmployeeService {

    // async create(service, clientInfo, place, userId) {
    //     const selectClientQuery = {
    //         text: 'SELECT * FROM clients WHERE "userId" = $1',
    //         values: [userId]
    //     };
    //     const client = await authPool.query(selectClientQuery);
    //     if (!client.rows) {
    //         throw ApiError.BadRequest('Something went wrong, please re-login');
    //     }
    //     const clientId = client.rows[0].id;
    //     const insertQuery = {
    //         text: 'INSERT INTO treaties (service, "clientInfo", place, "clientId") VALUES ($1, $2, $3, $4) RETURNING *',
    //         values: [service, clientInfo, place, clientId]
    //     };
    //     const result = await clientPool.query(insertQuery);
    //
    //     return result.rows[0];
    // }

    async getAll() {
        const selectEmployeeQuery = {
            text: 'SELECT * FROM employees',
        };
        const employees = await chiefPool.query('SELECT * FROM employees');

        return employees.rows;
    }

    // async delete(id) {
    //     const deleteQuery = {
    //         text: 'DELETE FROM treaties WHERE id = $1 RETURNING *',
    //         values: [id]
    //     }
    //     const result = await clientPool.query(deleteQuery);
    //     if (result.rows.length === 0) {
    //         throw ApiError.BadRequest('No such treaty was found');
    //     }
    //
    //     return result.rows[0];
    // }

}

module.exports = new EmployeeService();