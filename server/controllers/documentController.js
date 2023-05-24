const uuid = require('uuid');
const path = require('path');
const fs = require('fs');
const documentService = require('../service/document-service');
const fileService = require('../service/file-service');
const ApiError = require('../error/ApiError');

class documentController {
    async create(req, res, next) {
        const {type, result, caseId} = req.body;
        const {files} = req.files;
        try {
            const doc = await documentService.create(type, result, caseId);

            let extension;

            if (files.length > 0) {
                files.forEach(f => {
                    extension = f.name.slice((f.name.lastIndexOf('.') - 1 >>> 0) + 2);
                    let fileName = uuid.v4() + '.' + extension;

                    f.mv(path.resolve(__dirname, '..', 'static', fileName));

                    fileService.create(fileName, extension, doc.id);
                });
            } else {
                extension = files.name.slice((files.name.lastIndexOf('.') - 1 >>> 0) + 2);
                let fileName = uuid.v4() + '.' + extension;

                await files.mv(path.resolve(__dirname, '..', 'static', fileName));

                await fileService.create(fileName, extension, doc.id);
            }

            return res.json(doc);

        } catch (e) {
            next(e);
        }

    }

    // async delete(req, res, next) {
    //     const {id} = req.params;
    //     try {
    //         const document = await Document.findOne({where: {id}});
    //
    //         const unlinkFile = async (file) => {
    //             const filePath = path.resolve(__dirname, '..', 'static', file.name);
    //             try {
    //                 await fs.promises.unlink(filePath);
    //                 console.log(`Deleted file: ${file.name}`);
    //             } catch (err) {
    //                 console.log(err);
    //             }
    //         };
    //
    //         const files = await File.findAll({ where: { documentId: id } });
    //         await Promise.all(files.map(file => unlinkFile(file)));
    //
    //         await Document.destroy({where: {id}});
    //         return res.json({message: `Document with id ${id} was deleted.`});
    //     } catch (e) {
    //         next(e)
    //     }
    // }
}

module.exports = new documentController();
