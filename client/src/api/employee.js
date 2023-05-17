import $api from '@/api/index';

export const Employee = {
    // async create(service, clientInfo, place, userId) {
    //     const {data} = await $api.post('treaty', {service, clientInfo, place, userId});
    //     return data;
    // },

    async getAll() {
        const {data} = await $api.get('employee');
        return data;
    },

    // async delete(id) {
    //     const {data} = await $api.delete(`treaty/${id}`)
    //     return data
    // }

};