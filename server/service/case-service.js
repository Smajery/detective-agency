const {seniorPool, chiefPool} = require('../db');
const ApiError = require('../error/ApiError');

class CaseService {
    async getAll(userId) {
        const selectEmployeeQuery = {
            text: 'SELECT * FROM employees WHERE "userId" = $1',
            values: [userId]
        };
        const employeeResult = await seniorPool.query(selectEmployeeQuery);
        if (employeeResult.rows.length === 0) {
            throw ApiError.BadRequest('Employee not found')
        }
        const seniorEmployee = employeeResult.rows[0];

        const selectCasesQuery = {
            text: `SELECT cases.*, treaties."clientInfo", treaties."service", treaties."place"
           FROM cases
           JOIN treaties ON cases."treatyId" = treaties.id
           WHERE treaties."employeeId" = $1`,
            values: [seniorEmployee.id]
        }
        const casesResult = await seniorPool.query(selectCasesQuery)

        const cases = casesResult.rows;
        const caseIds = cases.map(row => row.id);

        const selectDocumentsQuery = {
            text: `SELECT documents.*
             FROM documents
             WHERE documents."caseId" IN (${caseIds.map((_, index) => `$${index + 1}`).join(',')})`,
            values: caseIds
        };
        const documentsResult = await seniorPool.query(selectDocumentsQuery);
        const documents = documentsResult.rows;

        const documentIds = documents.map(doc => doc.id);

        const selectFilesQuery = {
            text: `SELECT * FROM files WHERE "documentId" = ANY($1)`,
            values: [documentIds]
        };

        const filesResult = await seniorPool.query(selectFilesQuery);
        const files = filesResult.rows;

        const filesByDocumentId = {};

        for (const file of files) {
            if (!filesByDocumentId[file.documentId]) {
                filesByDocumentId[file.documentId] = [];
            }
            filesByDocumentId[file.documentId].push(file);
        }

        const selectDetectivesQuery = {
            text: `SELECT employees.*
           FROM employees
           JOIN detectives_lists ON employees.id = ANY(detectives_lists."employeeIds")
           WHERE detectives_lists."caseId" = ANY($1)`,
            values: [caseIds],
        };

        const detectivesResult = await seniorPool.query(selectDetectivesQuery);
        const detectivesByCaseId = {};

        for (const detective of detectivesResult.rows) {
            const caseId = detective.detectivesListId;
            if (!detectivesByCaseId[caseId]) {
                detectivesByCaseId[caseId] = [];
            }
            detectivesByCaseId[caseId].push(detective);
        }

        return cases.map(caseRow => {
            const treaty = {
                clientInfo: caseRow.clientInfo,
                service: caseRow.service,
                place: caseRow.place
            };
            delete caseRow.clientInfo;
            delete caseRow.service;
            delete caseRow.place;

            const caseDetectives = detectivesByCaseId[caseRow.id] || [];

            const caseDocuments = documents.filter(doc => doc.caseId === caseRow.id);

            const documentsWithFiles = caseDocuments.map(doc => ({
                ...doc,
                files: filesByDocumentId[doc.id] || []
            }));

            return {
                ...caseRow,
                treaty,
                detectives: caseDetectives,
                documents: documentsWithFiles
            };
        });
    }

}

module.exports = new CaseService();