import AxiosClient from "./Client/AxiosClient";
const resource = '/realm';

export default {
    get() {
        return AxiosClient.get(`${resource}`)
    },
    getPage(page) {
        console.log("respository: " + page)
        let response = AxiosClient.get(`${resource}?page=${page}&size=20`)
        console.log(response.data)
        return response
    },
    getById(id){
        let response = AxiosClient.get(`${resource}/${id}`)
        return response
    },
    addRealm(realm) {
        console.log(realm)
        let response = AxiosClient.post(`${resource}`, realm)
        console.log(response.data)
        return response
    }

    //update

    //create new

    //deactivate
};


