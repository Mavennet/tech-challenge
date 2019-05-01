import axios from 'axios';
import {USER_LOGIN, USER_LOGOUT, AUTH_USER} from './types';

export function loginUser(dataToSubmit){
    const request = axios.post(`api/users/login`,dataToSubmit)
        .then(response => response.data);

    return {
        type: USER_LOGIN,
        payload: request
    }
}

export function logoutUser() {
    const request = axios.get(`api/users/logout`)
        .then(response => response.data);

    return {
        type: USER_LOGOUT,
        payload: request
    }
}

export function auth(){

    const request = axios.get(`api/users/auth`)
        .then(response => {
            return response.data
        });

    return {
        type: AUTH_USER,
        payload: request
    }

}