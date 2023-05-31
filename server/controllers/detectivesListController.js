const ApiError = require('../error/ApiError');

class detectivesListController {
    async create(req, res, next) {
        const {caseId} = req.body
        try {
            const detectivesList = await DetectivesList.create({caseId})
            return res.json(detectivesList)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new detectivesListController()