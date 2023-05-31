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
}

module.exports = new clientController()