const ApiError = require('../error/ApiError');
const employeeService = require('../service/employee-service')

class employeeController {

    async getAll(req, res, next) {
        const userData = req.user
        try {
            const employees = await employeeService.getAll(userData.role)
            return res.json(employees)
        } catch (e) {
            next(e)
        }
    }

    async updateDetectivesListId(req, res, next) {
        const {id} = req.params
        const {detectivesListId} = req.body
        try {
            const employee = await employeeService.updateDetectivesListId(id, detectivesListId)
            return res.json(employee)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new employeeController()