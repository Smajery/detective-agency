const ApiError = require('../error/ApiError');
const employeeService = require('../service/employee-service')

class employeeController {
    // async create(req, res, next) {
    //     const {fullName, email, phoneNumber, address, birthedAt, employmentedAt, userId, detectivesListId, jobTitleId} = req.body
    //     try {
    //         const employee = await Employee.create({fullName, email, phoneNumber, address, birthedAt, employmentedAt, userId, detectivesListId, jobTitleId})
    //         return res.json(employee)
    //     } catch (e) {
    //         next(e)
    //     }
    // }

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

    // async getOne(req, res, next) {
    //     const { id } = req.params;
    //     try {
    //         const employee = await Employee.findOne({ where: { id } });
    //         return res.json(employee);
    //     } catch (e) {
    //         next(e)
    //     }
    // }
    //
    // async delete(req, res, next) {
    //     const { id } = req.params;
    //     try {
    //         const employee = await Employee.findOne({ where: { id } });
    //         await employee.destroy();
    //         return res.json({ message: `Employee with id ${id} was deleted.` });
    //     } catch (e) {
    //         next(e)
    //     }
    // }
}

module.exports = new employeeController()