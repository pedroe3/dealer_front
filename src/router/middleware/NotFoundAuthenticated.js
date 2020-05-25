export default function NotFoundAuthenticated ({ next, to, store }) {
   if(to.matched[0].name === "NotFound" && store.getters['auth/isAuthenticated']){
       return next({
           name: 'HomeView'
       })
   }
    return next()
}
