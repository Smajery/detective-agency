const {Case, JobTitle} = require('../models/models');
const ApiError = require('../error/ApiError');

class caseController {
    async create(req, res, next) {
        const {treatieId} = req.body
        try {
            const delo = await Case.create({treatieId})
            return res.json(delo)
        } catch (e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            const delo = await Case.findAll()
            return res.json(delo)
        } catch (e) {
            next(e)
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const delo = await Case.findOne({ where: { id } });
            return res.json(delo);
        } catch (e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            const delo = await Case.findOne({ where: { id } });
            await delo.destroy();
            return res.json({ message: `Case with id ${id} was deleted.` });
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new caseController()