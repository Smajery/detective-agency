const {JobTitle} = require('../models/models')
const ApiError = require('../error/ApiError')
class jobTitleController {
    async create(req, res, next) {
        const {title, salary} = req.body
        try {
            const jobTitle = await JobTitle.create({title, salary})
            return res.json(jobTitle)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const jobTitle = await JobTitle.findAll()
            return res.json(jobTitle)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const jobTitle = await JobTitle.findOne({ where: { id } });
            return res.json(jobTitle);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            const jobTitle = await JobTitle.findOne({ where: { id } });
            await jobTitle.destroy();
            return res.json({ message: `Job title with id ${id} was deleted.` });
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new jobTitleController()