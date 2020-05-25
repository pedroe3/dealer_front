import * as mutations from './mutation-types';
import Repository from "../../repository/RepositoryFactory";
const RealmRepository = Repository.get('realm')

export const getRealms = async ({ commit }) => {
    let response = await RealmRepository.get()
    commit(mutations.SET_REALM_PAGINATION, response.data.page)
    //commit(mutations.SET_REALM_PAGINATION_LINK, response.data._links)
    commit(mutations.SET_REALMS, response.data._embedded.realmList)
}

export const getRealmById = async ({ commit }, id ) => {
    let response = await RealmRepository.getById(id)
    console.log(response.data)
    commit(mutations.SET_REALM, response.data)
}

export const getRealmsPage = async ({ commit }, requestedPage) => {
    //console.log("requessted page - action: " + requestedPage)
    let response = await RealmRepository.getPage(requestedPage)
    commit(mutations.SET_REALM_PAGINATION, response.data.page)
    //commit(mutations.SET_REALM_PAGINATION_LINK, response.data._links)
    commit(mutations.SET_REALMS, response.data._embedded.realmList)
}

export const clearRealm = ({ commit }) => {
    commit(mutations.CLEAR_REALM)
}

export const addRealm = async (_ , newRealm) => {
     RealmRepository.addRealm(newRealm)

    //ADD ERROR HANDLING
}
