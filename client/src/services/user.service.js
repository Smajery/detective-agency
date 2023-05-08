import {$host} from '@/services/index';
import {API_USER} from '@/utils/api-routes';

export const UserService = {
    async registration(email, password) {
        const {data} = await $host.post(API_USER + 'registration', {
            email,
            password
        })
        return data;
    },

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