import axios from 'axios';

export const fetch = axios.create({
    baseURL: 'https://mywallet.goit.co.ua/api',
    timeout: 10000,
});

export const setAuthToken = (token, headers) => {
    const auth = { Authorization: `Bearer ${token}` };
    const newHeaders = headers ? { ...auth, ...headers } : auth;
    return { headers: newHeaders };
};