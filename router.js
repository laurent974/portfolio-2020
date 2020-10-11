import Router from 'vue-router'
import index from './pages/index'
import about from './pages/about'
import contact from './pages/contact'
import skills from './pages/skills'
import works from './pages/works'

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
    },

    {
      path: '/a-propos',
      component: about,
      name: 'about',
      meta: {
        breadcrumbs: {
          title: 'À propos'
        }
      }
    },

    {
      path: '/contact',
      component: contact,
      name: 'contact',
      meta: {
        breadcrumbs: {
          title: 'Me contacter'
        }
      }
    },

    {
      path: '/skills',
      component: skills,
      name: 'skills',
      meta: {
        breadcrumbs: {
          title: 'Mes compétences'
        }
      }
    },

    {
      path: '/portfolio',
      component: works,
      name: 'works',
      meta: {
        breadcrumbs: {
          title: 'Mon portfolio'
        }
      }
    },
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