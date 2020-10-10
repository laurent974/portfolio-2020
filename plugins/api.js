import pageRepository from '~/repositories/api/page.js'

export default ({$axios, store, req, app}, inject) => {
  const pageRepositoryWithAxios = pageRepository($axios, app)

  const repositories = {
    page: pageRepositoryWithAxios
  }

  inject('api', repositories)
}