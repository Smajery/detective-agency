const Router = require('express')
const router = new Router()
const jobTitleController = require('../controllers/jobTitleController')

router.post('/', jobTitleController.create)
router.get('/', jobTitleController.getAll)
router.get('/:id', jobTitleController.getOne)
router.delete('/:id', jobTitleController.delete)

module.exports = router