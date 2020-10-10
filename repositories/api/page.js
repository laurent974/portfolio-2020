export default $axios => ({
  index(params = null) {
    return $axios.$get(`/page`, { params })
  },

  getPage(id, params) {
    return $axios.$get(`/page/${id}`, { params })
  },

  getListPages(params) {
    return $axios.$get(`/pages`, { params })
  }
})