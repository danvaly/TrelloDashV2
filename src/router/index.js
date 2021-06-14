import Vue from 'vue'
import Router from 'vue-router'

import { checkAccessMiddleware, setPageTitleMiddleware } from './middlewares'
import { routes } from './routes'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'is-active',
  base: process.env.VUE_APP_PUBLIC_PATH,
  mode: 'history',
  routes
})

router.beforeEach(checkAccessMiddleware)
router.beforeEach(setPageTitleMiddleware)

export default router
