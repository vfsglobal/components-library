<template>
  <header>
      <div class="logo">
        <img src="images/vfs-global-logo.png" alt="VFS Global Services" />
      </div>
      <mainContent/>
  </header>
</template>

<script>
import mainContent from './main-content.vue';

export default {
  name: 'top-header',
  components: {
    mainContent
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals";

header {
  font-size: 13px;
  display: flex;
  flex-direction: column;
  background: $blue;
  padding: 10px 0px;

    > .logo {
      width: $layout_left_width;
      text-align: center;
      padding: 20px 0px;
    }
}
</style>
