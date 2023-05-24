const {detectivePool} = require('../db');
const ApiError = require('../error/ApiError');

class DocumentService {
    async create(type, result, caseId) {
        const insertDocumentQuery = {
            text: 'INSERT INTO documents ("type", "result", "caseId") VALUES ($1, $2, $3) RETURNING *',
            values: [type, result, caseId]
        };
        const documentResult = await detectivePool.query(insertDocumentQuery);

        return documentResult.rows[0];
    }
}

module.exports = new DocumentService();