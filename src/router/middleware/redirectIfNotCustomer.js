export default function redirectIfNotCustomer ({ next }) {
    // eslint-disable-next-line no-constant-condition
    if(false){
        return next({
            name: 'LoginView'
        })
    }
    return next()
}
