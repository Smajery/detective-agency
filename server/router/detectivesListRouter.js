const Router = require('express')
const router = new Router()
const detectivesListController = require('../controllers/detectivesListController')

router.post('/', detectivesListController.create)

module.exports = router