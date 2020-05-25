import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "../views/HomeView";
import DashboardView from "../views/DashboardView";

import store from '../store'

import middlewarePipeline from "./kernel/middlewarePipeline";
import LoginView from "../views/LoginView";
import CustomerView from "../views/CustomerView";
import UserView from "../views/UserView";
import NotFoundView from "../views/NotFoundView";
import AdministrativeView from "../views/Company/AdministrativeView";
import CompanyForm from "../views/Company/CompanyForm/CompanyForm";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/customer',
    name: 'customerView',
    component: CustomerView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/CustomerView.vue')
  },
  {
    path: '/user',
    name: 'userView',
    component: UserView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   // component: () => import(/* webpackChunkName: "about" */ '../views/UserView')
  },
    {
      path: '/dashboard',
      name: 'DashboardView',
      component: DashboardView
      //component: DashboardView
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ '../views/DashboardView')
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ '../views/LoginView')
    },
    {
      path: '/admin',
      name: 'AdministrativeView',
      component: AdministrativeView
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ '../views/LoginView')
    },
    {
      path: '/company/add',
      name: 'AddCompanyForm',
      component: CompanyForm

    },
    {
      path: '/company/edit/:id',
      name: 'EditCompanyForm',
      component: CompanyForm,
      props: true

    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFoundView
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ '../views/LoginView')
    }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

   let middleware = to.matched.map((matched) => {
      return matched.components.default.middleware
   })
   .filter((middleware)=>{
     return middleware !== undefined
   })
   .flat()

  if(!middleware.length) {
    return next()
  }

  const context = {
    to,
    from,
    next,
    router,
    store
  }

 return middleware[0]({ ...context, next:middlewarePipeline(context, middleware, 1) })

})

export default router
