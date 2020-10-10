import webpack from 'webpack'

export default {
  //Headers de la page
  head: {
    titleTemplate: 'Laurent Yen-Pon - Portfolio - %s',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {'http-equiv': 'Cache-Control', content: 'no-cache, no-store, must-revalidate'},
      {'http-equiv': 'Pragma', content: 'no-cache'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  //Plugins loaded before mounting the app
  plugins: [
    '~/plugins/api'
  ],

  //Nuxt.js dev-modules
  buildModules: [
    ['@nuxtjs/router', {
      keepDefaultRouter: true
    }]
  ],

  //Nuxt.js modules
  modules: [
    '@nuxtjs/axios'
  ],

  //Axios module configuration
  axios: {
    baseURL: 'http://5.51.118.35/portfolio-2020/admin/wp-json/wp/v2/'
  },

  //css
  css: [
    '~/assets/css/main.scss'
  ]
}