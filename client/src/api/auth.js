import $api from '@/api/index';

export const API_USER = 'user/'

export const Auth = {
    async registration(email, password) {
        const {data} = await $api.post(API_USER + 'registration', {email, password})
        return data;
    },

    async login(email, password) {
        const {data} = await $api.post(API_USER + 'login', {email, password})
        return data;
    },

    async logout() {
        const {data} = await $api.post(API_USER + 'logout')
        return data;
    }

}