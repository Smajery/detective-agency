const ApiError = require('../error/ApiError');
const clientService = require('../service/client-service')

class clientController {
    async create(req, res, next) {
        const {email} = req.body
        try {
            const userData = req.user
            const client = await clientService.create(email, userData.id)
            return res.json(client)
        } catch (e) {
            next(e)
        }
    }

    // async getAll(req, res, next) {
    //     try {
    //         const client = await Client.findAll()
    //         return res.json(client)
    //     } catch (e) {
    //         next(e)
    //     }
    // }
    //
    // async getOne(req, res, next) {
    //     const { id } = req.params;
    //     try {
    //         const client = await Client.findOne({ where: { id } });
    //         return res.json(client);
    //     } catch (e) {
    //         next(e)
    //     }
    // }
    //
    // async delete(req, res, next) {
    //     const { id } = req.params;
    //     try {
    //         const client = await Client.findOne({ where: { id } });
    //         await client.destroy();
    //         return res.json({ message: `Client with id ${id} was deleted.` });
    //     } catch (e) {
    //         next(e)
    //     }
    // }
}

module.exports = new clientController()