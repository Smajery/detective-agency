const Router = require('express')
const router = new Router()
const documentController = require('../controllers/documentController')

router.post('/', documentController.create)
router.get('/', documentController.getAll)
router.get('/:id', documentController.getOne)
router.delete('/:id', documentController.delete)

module.exports = router