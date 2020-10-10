<template>
  <div>
    <h1>Hello world!</h1>
    <ul>
      <li v-for="(page, index) in pages" :key="index">{{page.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',

  async asyncData(context) {
    let pages = []

    try {
      const result = await context.$api.page.getListPages({
        order: 'asc'
      })
      pages = result ? result : ['page', "page2"]
    } catch (e) {
      console.error(e)
    }

    return {pages: pages}
  }
}
</script>