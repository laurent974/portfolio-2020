<template>
  <div>
    <Aside />
    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    min-height: 100vh;
    align-items: center;
    padding-left: 80px;
    background: $soft-black;
    color: $white;
  }
</style>