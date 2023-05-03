const Router = require('express')
const router = new Router()
const detectivesListController = require('../controllers/detectivesListController')

router.post('/', detectivesListController.create)
router.get('/', detectivesListController.getAll)
router.get('/:id', detectivesListController.getOne)
router.delete('/:id', detectivesListController.delete)

module.exports = router