import $api from '@/api/index';

export const Case = {
    async getAll() {
        const {data} = await $api.get('case');
        return data;
    },

};