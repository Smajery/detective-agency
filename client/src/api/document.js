import $api from '@/api/index';

export const Document = {
    async create(formData) {
        const {data} = await $api.post('document', formData);
        return data;
    },

};