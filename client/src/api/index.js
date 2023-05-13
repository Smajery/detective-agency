import axios from 'axios';

const $api = axios.create({
    withCredentials: true,
    baseURL: process.env.API_URL
})

// Перехватывает запрос и помещает в его header токен
const authInterceptorRequest = (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
}

const authInterceptorResponse = (config) => {
    return config
}

$api.interceptors.request.use(authInterceptorRequest)

$api.interceptors.response.use(authInterceptorResponse, async (error) => {
    const originalRequest = error.config;
    if(error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(proces.env.API_URL + 'refresh', {withCredentials: true})
            localStorage.setItem('accessToken', response.data.accessToken)
            return $api.request(originalRequest);  
        } catch (e) {
            console.log('User is not authorized')
        }
    }
    throw error;
})

export default $api