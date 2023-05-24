const ApiError = require('../error/ApiError');
const caseService = require('../service/case-service')

class caseController {
    async getAll(req, res, next) {
        try {
            const userData = req.user
            const result = await caseService.getAll(userData.id, userData.role)
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }
    async update(req, res, next) {
        const {id} = req.params
        const {status, employeeIds, detectivesListId} = req.body;
        try {
            const result = await caseService.update(id, status, employeeIds, detectivesListId)
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new caseController()