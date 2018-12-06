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

    > .logo {
      width: $layout_left_width;
      padding: 30px 0px;
      text-align: center;
    }
}
</style>
