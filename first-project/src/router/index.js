import Vue from 'vue'
import Router from 'vue-router'

import PageDashboard from '../page/PageDashboard.vue'
import PageAbout from '../page/PageAbout.vue'
import Page404 from '../page/Page404.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: 'add/payment/Food?value=200',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout
    },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: PageLogin
    // },
    {
      path: '*',
      name: 'NotFound',
      component: Page404
    }
  ]
})

// const userAuth = false

// router.beforeEach((to, from, next) => {
//   if (to.name === 'dashboard') {
//     next({ name: Login })
//   }else {
//     next()
//   }
// })

const titles = {
  dashboard: 'Welcome to Dashboard',
  about: 'About us',
  NotFound: 'Page not found!'
}

router.afterEach((to, from) => {
  document.title = titles[to.name]
})

export default router
