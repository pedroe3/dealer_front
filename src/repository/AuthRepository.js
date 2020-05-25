import AxiosClient from "./Client/AxiosClient";
const resource = '/auth';

export default {
    signInRequest(credentials) {
        const response = AxiosClient.post(`${resource}`, credentials);
        return response
    }
};
