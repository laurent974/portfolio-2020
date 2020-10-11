<template>
  <aside class="aside">
    <a href="#" class="logo" rel="index">
      LYP
    </a>
    <nav class="nav">
      <nuxt-link to="/"><i class="icon-home"></i></nuxt-link>
      <nuxt-link to="a-propos"><i class="icon-user"></i></nuxt-link>
      <nuxt-link to="skills"><i class="icon-laptop"></i></nuxt-link>
      <nuxt-link to="portfolio"><i class="icon-code"></i></nuxt-link>
      <nuxt-link to="contact"><i class="icon-envelope"></i></nuxt-link>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "Aside"
}
</script>

<style lang="scss" scoped>
  .aside {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
    height: 100%;
    min-height: 500px;
    top: 0;
    left: 0;
    background: $black;
    justify-content: space-around;
    z-index: 3;
  }

  .nav {
    a {
      font-size: 1.25rem;
      color: $white;
      margin-bottom: 15px;
      display: block;
      line-height: 51px;
      height: 51px;
      padding: 0 20px;
      position: relative;
      text-decoration: none;

      &:hover {
        color: $yellow;
      }

      &.active {
        color: $yellow;
      }
    }
  }

  .logo {
    position: absolute;
    display: block;
    top: 0;
  }
</style>