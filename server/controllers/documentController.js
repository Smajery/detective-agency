const uuid = require('uuid');
const path = require('path');
const fs = require('fs');
const {Document, File} = require('../models/models');
const ApiError = require('../error/ApiError');

class documentController {
    async create(req, res, next) {
        try {
            let {type, result, caseId} = req.body;
            let document = await Document.create({type, result, caseId});

            if (req.files) {
                let {file} = req.files;
                let extension;

                if (!file.length) {
                    extension = file.name.slice((file.name.lastIndexOf('.') - 1 >>> 0) + 2);
                    let fileName = uuid.v4() + '.' + extension;

                    await file.mv(path.resolve(__dirname, '..', 'static', fileName));

                    await File.create({
                        name: fileName,
                        extension: extension,
                        documentId: document.id
                    });

                } else {
                    file.forEach(f => {
                        extension = f.name.slice((f.name.lastIndexOf('.') - 1 >>> 0) + 2);
                        let fileName = uuid.v4() + '.' + extension;

                        f.mv(path.resolve(__dirname, '..', 'static', fileName));

                        File.create({
                            name: fileName,
                            extension: extension,
                            documentId: document.id
                        });
                    });
                }
            }

            return res.json(document);

        } catch (e) {
            next(e)
        }

    }

    async getAll(req, res, next) {
        try {
            const documents = await Document.findAll({
                include: {
                    model: File,
                    as: 'files'
                }
            });
            return res.json(documents);
        } catch (e) {
            next(e)
        }
    }

    async getOne(req, res, next) {
        const {id} = req.params;
        try {
            const document = await Document.findOne({
                where: {id},
                include: {
                    model: File,
                    as: 'files'
                }
            });
            return res.json(document);
        } catch (e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        const {id} = req.params;
        try {
            const document = await Document.findOne({where: {id}});

            const unlinkFile = async (file) => {
                const filePath = path.resolve(__dirname, '..', 'static', file.name);
                try {
                    await fs.promises.unlink(filePath);
                    console.log(`Deleted file: ${file.name}`);
                } catch (err) {
                    console.log(err);
                }
            };

            const files = await File.findAll({ where: { documentId: id } });
            await Promise.all(files.map(file => unlinkFile(file)));

            await Document.destroy({where: {id}});
            return res.json({message: `Document with id ${id} was deleted.`});
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new documentController();
