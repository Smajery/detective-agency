const Router = require('express')
const router = new Router()
const documentController = require('../controllers/documentController')
const checkRole = require('../middleware/checkRole-middleware')

router.post('/', checkRole(['DETECTIVE']), documentController.create)

module.exports = router