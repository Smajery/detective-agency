const { chiefPool } = require('../db');
const ApiError = require('../error/ApiError');

class treatieController {
    async create(req, res, next) {
        const {service, clientInfo, place, price, clientId} = req.body;
        try {
            const insertQuery = {
                text: 'INSERT INTO treaties (service, client_info, place, price, "clientId", "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5, CURRENT_DATE, CURRENT_DATE) RETURNING *',
                values: [service, clientInfo, place, price, clientId]
            }
            const result = await chiefPool.query(insertQuery);
            return res.json(result.rows[0]);
        } catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try {
            const result = await chiefPool.query('SELECT * FROM treaties');
            return res.json(result.rows);
        } catch (e) {
            next(e);
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const selectQuery = {
                text: 'SELECT * FROM treaties WHERE id = $1',
                values: [id]
            }
            const result = await chiefPool.query(selectQuery);
            if (!result.rows[0]) {
                return next(ApiError.NotFound(`Treaty with id ${id} not found`));
            }
            return res.json(result.rows[0]);
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            const deleteQuery = {
                text: 'DELETE FROM treaties WHERE id = $1 RETURNING *',
                values: [id]
            }
            const result = await chiefPool.query(deleteQuery);
            if (!result.rows[0]) {
                return next(ApiError.NotFound(`Treaty with id ${id} not found`));
            }
            return res.json({ message: `Treaty with id ${id} was deleted.` });
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new treatieController();
