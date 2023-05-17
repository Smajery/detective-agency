const Router = require('express')
const router = new Router()
const employeeController = require('../controllers/employeeController')
const checkRole = require('../middleware/checkRole-middleware')

// router.post('/', checkRole('CHIEF'),  employeeController.create)
router.get('/', checkRole('CHIEF'),  employeeController.getAll)
// router.get('/:id', checkRole('CHIEF'), employeeController.getOne)
// router.delete('/:id', checkRole('CHIEF'), employeeController.delete)

module.exports = router