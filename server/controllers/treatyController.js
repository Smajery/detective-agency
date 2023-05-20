const { chiefPool } = require('../db');
const ApiError = require('../error/ApiError')
const treatyService = require('../service/treaty-service')

class treatyController {
    async create(req, res, next) {
        const {service, clientInfo, place} = req.body;
        try {
            const userData = req.user
            const result = await treatyService.create(service, clientInfo, place, userData.id)
            return res.json(result);
        } catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        const {sorting} = req.query;
        try {
            const userData = req.user
            const result = await treatyService.getAll(userData.id, userData.role, sorting)
            return res.json(result);
        } catch (e) {
            next(e);
        }
    }
    
    async updateIsPaid(req, res, next) {
        const {id} = req.params
        const {isPaid} = req.body;
        try {
            const result = await treatyService.updateIsPaid(isPaid, id)
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }

    async update(req, res, next) {
        const {id} = req.params
        const {status, price, employeeId} = req.body;
        try {
            const result = await treatyService.update(status, price, employeeId, id)
            return res.json(result)
        } catch (e) {
            next(e)
        }

    }

    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const userData = req.user
            const result = await treatyService.getOne(id, userData.id, userData.role)
            return res.json(result);
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            const result = await treatyService.delete(id)
            return res.status(200).json({ message: `Current treaty was deleted.` });
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new treatyController();
