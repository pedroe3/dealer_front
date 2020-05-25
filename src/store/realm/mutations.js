import * as types from './mutation-types'
import { defaultRealmState } from "./defaults";
import { clone } from 'lodash'

export default {
    [types.SET_REALMS](state, reamls) {
        state.realms = reamls
    },
    [types.SET_REALM_PAGINATION](state, pagination) {
        state.meta.paginationData.total = pagination.totalElements
        state.meta.paginationData.to = pagination.size
        state.meta.paginationData.last_page = pagination.totalPages
        state.meta.paginationData.per_page = pagination.size
    },
    [types.SET_REALM](state, reaml) {
        state.realm = reaml
    },
    [types.CLEAR_REALM](state) {
        state.realm = clone(defaultRealmState)
    },

    // [types.SET_REALM_PAGINATION_LINK](state, links) {
    //     // if(links.next.href) {
    //     //     state.meta.paginationData.next_page_url = links.next.href
    //     // }
    //
    // },


};
