const Router = require('express')
const router = new Router()
const caseController = require('../controllers/caseController')
const checkRole = require('../middleware/checkRole-middleware')

router.get('/', checkRole(['SENIOR', 'DETECTIVE']), caseController.getAll)
router.patch('/:id', checkRole(['SENIOR']), caseController.update)

module.exports = router