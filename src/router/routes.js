// single pages
import homePage from '../pages/Home.vue'
import queuePage from '../pages/Queue.vue'
import loginPage from '../pages/Login.vue'
import notFoundPage from '../pages/NotFound.vue'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: {
      isAuth: true,
      title: `${process.env.VUE_APP_DOMAIN_TITLE} | Dashboard`
    }
  },
  {
    path: '/queue',
    name: 'queue',
    component: queuePage,
    meta: {
      title: `${process.env.VUE_APP_DOMAIN_TITLE} | My Queue`
    }
  },
  {
    path: '/login',
    name: 'login',
    component: loginPage,
    meta: { title: `${process.env.VUE_APP_DOMAIN_TITLE} | Login Page` }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${process.env.VUE_APP_DOMAIN_TITLE} | Not found` }
  }
]
