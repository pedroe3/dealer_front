import store from './index'
import AxiosClient from "../repository/Client/AxiosClient";

store.subscribe((mutation) => {
    switch (mutation.type) {
        case 'auth/SET_TOKEN':
            if (mutation.payload) {
                AxiosClient.defaults.headers.common.Authorization = `Bearer ${mutation.payload}`;
                AxiosClient.defaults.headers.post.Authorization = `Bearer ${mutation.payload}`;
                localStorage.setItem('token', mutation.payload)
            }
            break
        case 'auth/CLEAR_AUTH':
            if (!mutation.payload) {
                AxiosClient.defaults.headers.common.Authorization = null
                localStorage.removeItem('token')
            }
            break
    }
})
