import axios from 'axios';

import {authSlice} from './AuthSlice';
import {Auth} from '@/api/auth';
import {setStorageItem} from '@/utils/storage';
import {API_USER} from '@/utils/api-routes';

export const AuthActionCreator = {
    setIsAuth: boolean => dispatch => {
        dispatch(authSlice.actions.setIsAuth(boolean));
    },

    logout: () => async dispatch => {
        try {
            const response = await Auth.logout()
            localStorage.removeItem('accessToken')
            dispatch(AuthActionCreator.setIsAuth(false))
        } catch (e) {
            console.error(e.response.data.message)
        }
    },

    checkAuth: () => async dispatch => {
       try {
           const response = await axios.get(process.env.API_URL + API_USER + 'refresh', {withCredentials: true})
           localStorage.setItem('accessToken', response.data.accessToken)
           dispatch(AuthActionCreator.setIsAuth(true))
       } catch (e) {
           console.error(e)
       }
    }
};