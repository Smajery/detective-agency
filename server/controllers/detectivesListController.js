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

    async getAll(req, res, next) {
        try {
            const detectivesList = await DetectivesList.findAll({
                include: {
                    model: Employee,
                    as: 'detectives'
                }
            })
            return res.json(detectivesList)
        } catch (e) {
            next(e)
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const detectivesList = await DetectivesList.findOne({
                where: { id },
                include: {
                    model: Employee,
                    as: 'detectives'
                }
            });
            return res.json(detectivesList);
        } catch (e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            const detectivesList = await DetectivesList.findOne({ where: { id } });
            await detectivesList.destroy();
            return res.json({ message: `Detectives list with id ${id} was deleted.` });
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new detectivesListController()