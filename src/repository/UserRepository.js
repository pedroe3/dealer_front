import Client from './Client/AxiosClient';
//import axios from "axios";
const resource = '/user';

export default {
    getMe() {
        return Client.get(`${resource}/me`);
    },

    // get() {
    //     return Client.get(`${resource}`);
    // },
    // getMe() {
    //     return Client.get(`${resource}/me`);
    // },
    // getPost(id) {
    //     return Client.get(`${resource}/${id}`);
    // },
    // create(payload) {
    //     return Client.post(`${resource}`, payload);
    // },
    // update(payload, id) {
    //     return Client.put(`${resource}/${id}`, payload);
    // },
    // delete(id) {
    //     return Client.delete(`${resource}/${id}`)
    // },

    // MANY OTHER ENDPOINT RELATED STUFFS
};

// Client.interceptors.request.use((config) => {
//     //console.log(config.headers)
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });
