const {Client, Treatie} = require('../models/models');
const ApiError = require('../error/ApiError');

class treatieController {
    async create(req, res, next) {
        const {service, clientInfo, place, price, clientId} = req.body
        try {
            const treatie = await Treatie.create({service, clientInfo, place, price, clientId})
            return res.json(treatie)
        } catch (e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            const treatie = await Treatie.findAll()
            return res.json(treatie)
        } catch (e) {
            next(e)
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const treatie = await Treatie.findOne({ where: { id } });
            return res.json(treatie);
        } catch (e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            const treatie = await Treatie.findOne({ where: { id } });
            await treatie.destroy();
            return res.json({ message: `Treatie with id ${id} was deleted.` });
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new treatieController()