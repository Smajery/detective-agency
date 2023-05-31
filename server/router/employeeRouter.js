const Router = require('express')
const router = new Router()
const employeeController = require('../controllers/employeeController')
const checkRole = require('../middleware/checkRole-middleware')

router.get('/', checkRole(['CHIEF', 'SENIOR']),  employeeController.getAll)
router.patch('/list/:id', checkRole(['SENIOR']),  employeeController.updateDetectivesListId)

module.exports = router