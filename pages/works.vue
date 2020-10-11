<template>
  <div>
    <h1 class="h1">{{ page.title.rendered }}</h1>
    <div class="rte" v-html="page.content.rendered"></div>
  </div>
</template>

<script>
export default {
  name: 'Works',

  async asyncData(context) {
    let page = []

    try {
      const result = await context.$api.page.getPage('portfolio')
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