<template>
  <aside class="aside">
    <a href="#" class="logo" rel="index">
      LYP
    </a>
    <nav class="nav">
      <a href="#"><i class="icon-home"></i></a>
      <a href="#"><i class="icon-user"></i></a>
      <a href="#"><i class="icon-laptop"></i></a>
      <a href="#"><i class="icon-code"></i></a>
      <a href="#"><i class="icon-envelope"></i></a>
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
    width: 60px;
    height: 100%;
    min-height: 500px;
    top: 0;
    left: 0;
    background: $black;
    justify-content: space-between;
    z-index: 3;
  }
</style>