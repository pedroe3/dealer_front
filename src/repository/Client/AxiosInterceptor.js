import AxiosClient from "./AxiosClient";

AxiosClient.interceptors.request.use((config) => {
    console.log(config.url);
   // console.log(config.headers)
    return config;
}, (error) => {
    return Promise.reject(error);
});
