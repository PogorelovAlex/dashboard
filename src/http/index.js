import axios from 'axios';


export const API_URL = `https://api.skilla.ru/mango/getList?date_start=2022-04-11& date_end=2022-04-12
& in_out=1`

const bearerToken = `qwerty123`;

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})
api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${bearerToken}`
    return config;
})
export default api;