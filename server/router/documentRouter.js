const Router = require('express')
const router = new Router()
const documentController = require('../controllers/documentController')
const checkRole = require('../middleware/checkRole-middleware')

router.post('/', checkRole(['DETECTIVE']), documentController.create)
// router.get('/', documentController.getAll)
// router.get('/:id', documentController.getOne)
// router.delete('/:id', documentController.delete)

module.exports = router