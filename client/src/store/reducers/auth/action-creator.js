import axios from 'axios';

import {authSlice} from './AuthSlice';
import {Auth} from '@/api/auth';
import {removeStorageItem, setStorageItem} from '@/utils/storage';

export const AuthActionCreator = {
    setIsAuth: boolean => dispatch => {
        dispatch(authSlice.actions.setIsAuth(boolean));
    },
    setCurrentUser: user => dispatch => {
        dispatch(authSlice.actions.setCurrentUser(user));
    },

    signOut: () => async dispatch => {
        try {
            const response = await Auth.logout()
            const storages = [localStorage, sessionStorage];
            storages.forEach(storage => {
                removeStorageItem('accessToken', storage);
                removeStorageItem('auth', storage);
                removeStorageItem('userRole', storage);
            });
            localStorage.setItem('userRole', 'USER')
            dispatch(AuthActionCreator.setIsAuth(false))
        } catch (e) {
            console.error(e.response.data.message)
        }
    },

    checkAuth: () => async dispatch => {
       try {
           const response = await axios.get(process.env.API_URL + 'user/refresh', {withCredentials: true})
           localStorage.setItem('accessToken', response.data.accessToken)
           localStorage.setItem('auth', true)
           dispatch(AuthActionCreator.setIsAuth(true))
       } catch (e) {
           console.error(e)
       }
    }
};