<template>
  <div>
    <h1 class="h1">{{ page.title.rendered }}</h1>
    <div class="rte" v-html="page.content.rendered"></div>

    <nuxt-link to="contact" class="button">Contactez moi!</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Index',

  async asyncData(context) {
    let page = []

    try {
      const result = await context.$api.page.getPage('accueil')
      page = result ? result[0] : []
    } catch (e) {
      console.error(e)
    }

    return {
      page
    }
  }
}
</script>