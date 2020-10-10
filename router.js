import Router from 'vue-router'
import index from './pages/index'

export async function createRouter(options) {
  let routes = []

  routes.push(
    {
      path: '/',
      component: index,
      name: 'index',
      meta: {
        breadcrumbs: {
          title: 'Accueil'
        }
      }
    }
  )

  return new Router({
    mode: 'history',
    routes,
    linkExactActiveClass: 'active',
    scrollBehavior() {
      return { y: 0 }
    }
  })
}