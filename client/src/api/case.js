import $api from '@/api/index';

export const Case = {
    async getAll() {
        const {data} = await $api.get('case');
        return data;
    },

    async update(caseId, status, employeeIds, detectivesListId) {
        const {data} = await $api.patch(`case/${caseId}`, {
            status, employeeIds, detectivesListId
        });
        return data;
    },

};