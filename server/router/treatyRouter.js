const Router = require('express')
const router = new Router()
const treatyController = require('../controllers/treatyController')
const checkRole = require('../middleware/checkRole-middleware')

router.post('/', checkRole(['CLIENT', 'CHIEF']), treatyController.create)
router.get('/', checkRole(['CLIENT', 'CHIEF']), treatyController.getAll)
router.get('/:id', checkRole(['CHIEF']), treatyController.getOne)
router.delete('/:id', checkRole(['CHIEF']), treatyController.delete)

module.exports = router