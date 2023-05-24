const {detectivePool} = require('../db');
const ApiError = require('../error/ApiError');

class FileService {
    async create(fileName, extension, documentId) {
        const insertFileQuery = {
            text: 'INSERT INTO files ("name", "extension", "documentId") VALUES ($1, $2, $3) RETURNING *',
            values: [fileName, extension, documentId]
        };
        const fileResult = await detectivePool.query(insertFileQuery);

        return fileResult.rows[0];
    }
}

module.exports = new FileService();