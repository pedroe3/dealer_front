import * as types from './mutation-types'

export default {

    [types.SET_TOKEN](state, token) {
        state.token = token
        state.isAuthenticated = true
    },
    [types.SET_USER_NAME](state, userName) {
        state.user.userName = userName
    },
    [types.SET_USER](state, user) {
        state.user.firstName = user.firstName
        state.user.lastName = user.lastName
        state.user.email = user.email
        state.user.userName = user.userName
        state.roles = user.roles
        state.isSuperAdmin = user.roles.filter(role => role === 'SUPER_ADMIN')[0] === 'SUPER_ADMIN' //todo: check to improve this
    },
    [types.CLEAR_AUTH](state) {
        state.token = null
        state.user = null
        state.isAuthenticated = false
    },
    [types.MILLAN_EXAMPLE](state) {
        state.userName = "test"
    },

};
