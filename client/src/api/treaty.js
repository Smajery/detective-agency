import $api from '@/api/index';

export const Treaty = {
    async create(service, clientInfo, place, userId) {
        const {data} = await $api.post('treaty', {service, clientInfo, place, userId});
        return data;
    },

    async getAll(sorting) {
        const {data} = await $api.get('treaty', {
            params: {
                sorting: sorting
            }
        });
        return data;
    },

    async updateIsPaid(isPaid, id) {
        const {data} = await $api.patch(`treaty/pay/${id}`, {isPaid})
        return data
    },

    async update(status, price, employeeId, id) {
        const {data} = await $api.patch(`treaty/${id}`, {status, price, employeeId})
        return data
    },

    async delete(id) {
        const {data} = await $api.delete(`treaty/${id}`)
        return data
    }

};