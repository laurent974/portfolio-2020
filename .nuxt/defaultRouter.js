import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9880d6b6 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _76ac5890 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _5b2ad64c = () => interopDefault(import('..\\pages\\skills.vue' /* webpackChunkName: "pages/skills" */))
const _45a48a1a = () => interopDefault(import('..\\pages\\works.vue' /* webpackChunkName: "pages/works" */))
const _5911212c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _9880d6b6,
    name: "about"
  }, {
    path: "/contact",
    component: _76ac5890,
    name: "contact"
  }, {
    path: "/skills",
    component: _5b2ad64c,
    name: "skills"
  }, {
    path: "/works",
    component: _45a48a1a,
    name: "works"
  }, {
    path: "/",
    component: _5911212c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
