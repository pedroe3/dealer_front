export default function superAdmin ({ next, store }) {

    if (!store.getters['auth/isSuperAdmin'] ) {
        return next({
            name: 'HomeView'
        })
    }
    return next()
}
