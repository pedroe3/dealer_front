export default function auth ({ next, store }) {
    if (!store.getters['auth/isAuthenticated'] || store.getters['auth/isAuthenticated'] === null ) {
        return next({
            name: 'LoginView'
        })
    }
    return next()
}
