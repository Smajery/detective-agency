const { chiefPool } = require('../db');
const ApiError = require('../error/ApiError')
const treatieService = require('../service/treatie-service')

class treatieController {
    async create(req, res, next) {
        const {service, clientInfo, place} = req.body;
        try {
            const userData = req.user
            const result = await treatieService.create(service, clientInfo, place, userData.id)
            return res.json(result);
        } catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try {
            const userData = req.user
            const result = await treatieService.getAll(userData.id)
            return res.json(result);
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
