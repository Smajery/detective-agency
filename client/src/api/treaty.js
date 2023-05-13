import $api from '@/api/index';

export const Treaty = {
    async create(service, clientInfo, place, userId) {
        const {data} = await $api.post('treaty', {service, clientInfo, place, userId});
        return data;
    },

    async getAll() {
        const {data} = await $api.get('treaty');
        return data;
    }

};