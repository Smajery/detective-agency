import {$host} from '@/services/index';

export const UserService = {
    async getAll() {
        const { data } = await $host.get('users')
        return data
    },

    async getById(id) {
        const { data } = await $host.get('users', {
            params: {
                id
            }
        })
        return data[0]
    }
}