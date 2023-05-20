const Router = require('express')
const router = new Router()
const caseController = require('../controllers/caseController')
const checkRole = require('../middleware/checkRole-middleware')

// router.post('/', caseController.create)
router.get('/', checkRole(['SENIOR']), caseController.getAll)
// router.get('/:id', caseController.getOne)
// router.delete('/:id', caseController.delete)

module.exports = router