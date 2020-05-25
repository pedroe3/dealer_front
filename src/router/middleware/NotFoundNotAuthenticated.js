export default function NotFoundAuthenticated ({ next, to, store }) {
    if(to.matched[0].path === '*' && !store.getters['auth/isAuthenticated']){
        return next({
            name: 'LoginView'
        })
    }
    return next()
}
