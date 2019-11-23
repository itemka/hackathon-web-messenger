import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    //baseURL: 'http://localhost:54463/api/1.0/',
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7dc52db3-0d14-44ab-80ee-40d908279e0f"
    },
})

export const api = {
    getToken: () => instance.post(`auth/get-token`).then(response => {
        return response.data
    }),
    getUsers(currentPage = 1, pageSize = 10, term = '') {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${term}`)
            .then(response => {
                console.log(response.data.items)
                if (response.data.items.length !== 1) {
                    console.log('Неверное имя')
                } else {
                    return response.data.items[0];
                }
            });
    },
}
