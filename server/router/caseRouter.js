const Router = require('express')
const router = new Router()
const caseController = require('../controllers/caseController')

router.post('/', caseController.create)
router.get('/', caseController.getAll)
router.get('/:id', caseController.getOne)
router.delete('/:id', caseController.delete)

module.exports = router