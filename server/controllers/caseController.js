const ApiError = require('../error/ApiError');
const caseService = require('../service/case-service')

class caseController {
    async getAll(req, res, next) {
        try {
            const userData = req.user
            const result = await caseService.getAll(userData.id)
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new caseController()