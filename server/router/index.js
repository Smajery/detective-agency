const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const clientRouter = require('./clientRouter')
const employeeRouter = require('./employeeRouter')
const detectivesListRouter = require('./detectivesListRouter')
const treatyRouter = require('./treatyRouter')
const caseRouter = require('./caseRouter')
const documentRouter = require('./documentRouter')

router.use('/user', userRouter)
router.use('/client', clientRouter)
router.use('/employee', employeeRouter)
router.use('/detectives-list', detectivesListRouter)
router.use('/treaty', treatyRouter)
router.use('/case', caseRouter)
router.use('/document', documentRouter)

module.exports = router