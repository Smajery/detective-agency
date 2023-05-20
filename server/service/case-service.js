const {seniorPool, chiefPool} = require('../db');
const ApiError = require('../error/ApiError');

class CaseService {
    async getAll(userId) {
        const selectEmployeeQuery = {
            text: 'SELECT * FROM employees WHERE "userId" = $1',
            values: [userId]
        };
        const employeeResult = await seniorPool.query(selectEmployeeQuery);
        if (employeeResult.rows.length === 0) {
            throw ApiError.BadRequest('Employee not found')
        }
        const seniorEmployee = employeeResult.rows[0];

        const selectCasesQuery = {
            text: `SELECT cases.*, treaties."clientInfo", treaties."service", treaties."place"
                   FROM cases
                   JOIN treaties ON cases."treatyId" = treaties.id
                   WHERE treaties."employeeId" = $1`,
            values: [seniorEmployee.id]
        }
        const casesResult = await seniorPool.query(selectCasesQuery)

        return casesResult.rows.map(row => {
            const treaty = {
                clientInfo: row.clientInfo,
                service: row.service,
                place: row.place,
            };
            delete row.clientInfo;
            delete row.service;
            delete row.place;
            return {
                ...row,
                treaty,
            };
        });
    }

}

module.exports = new CaseService();