import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

require('./store/subscriber')
require('./repository/Client/AxiosInterceptor')

Vue.config.productionTip = false

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
