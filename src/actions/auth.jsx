import axios from 'axios';
import { ACCESS_TOKEN, API_USERS, getCookie, GET_USER_INFO, LOGIN, LOGOUT } from 'utils';

export const authHeaders = () => {
    return {
        headers: {
            'Authorization': `Bearer ${getCookie(ACCESS_TOKEN)}`
        }
    }
}

export const login = payload => {
    return axios.post(LOGIN, payload);
}

export const logout = () => {
    return axios.post(LOGOUT,null, authHeaders());
}

export const register = payload => {
    return axios.post(API_USERS, payload);
}

export const getUserInfo = () => {
    return axios.get(GET_USER_INFO, authHeaders());
}

