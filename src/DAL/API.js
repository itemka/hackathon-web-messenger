import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    //baseURL: 'http://localhost:54463/api/1.0/',
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "326adc8b-48be-4905-a33d-14875af1c491"
    },
});

export const api = {
    getToken: () => instance.post(`auth/get-token`).then(response => response),
};