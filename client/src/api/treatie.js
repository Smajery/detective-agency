import $api from '@/api/index';

export const Treatie = {
    async create(service, clientInfo, place, userId) {
        const {data} = await $api.post('treatie', {service, clientInfo, place, userId});
        return data;
    },

    async getAll() {
        const {data} = await $api.get('treatie');
        return data;
    }

};