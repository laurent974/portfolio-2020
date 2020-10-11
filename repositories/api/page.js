export default $axios => ({
  index(params = null) {
    return $axios.$get(`/page`, { params })
  },

  getPage(slug, params) {
    return $axios.$get(`/pages?slug=${slug}`, { params })
  },

  getListPages(params) {
    return $axios.$get(`/pages`, { params })
  }
})