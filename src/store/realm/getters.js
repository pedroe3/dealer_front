export const getRealms = state => {
    return state.realms
}

export const getDataTableRealmsData = state => {
    return {
        total: state.meta.paginationData.total,
        per_page: state.meta.paginationData.per_page,
        current_page: state.meta.paginationData.current_page,
        last_page: state.meta.paginationData.last_page,
        next_page_url: state.meta.paginationData.next_page_url,
        prev_page_url: state.meta.paginationData.prev_page_url,
        from: state.meta.paginationData.from,
        to: state.meta.paginationData.to,
        data: state.realms
    }
}
export const getRealm = state => {
    return state.realm
}

export const getPaginationData = state => {
    return state.meta.paginationData
}
