import * as mutations from './mutation-types';
import Repository from "../../repository/RepositoryFactory";
const AuthRepository = Repository.get('auth')
const UserRepository = Repository.get('user')


export const signInAction = async ({dispatch}, credentials) => {
    let response = await AuthRepository.signInRequest(credentials)
    dispatch('attempt', response.data.token)
}

export const attempt = async ({ commit, state }, token) => {
    if (token) {
        commit(mutations.SET_TOKEN, token)
    }
    if (!state.token) {
        return
    }
    try {
        let response = await UserRepository.getMe()
        commit(mutations.SET_USER, response.data)

    } catch (e) {
        commit(mutations.CLEAR_AUTH)
    }
}

export const signOut = ({ commit }) => {
    commit(mutations.CLEAR_AUTH)
}
