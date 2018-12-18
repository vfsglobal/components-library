<template>
  <header>
    <div class="logo">
      <nuxt-link to="/">
        <img
          src="images/vfs-global-logo.png"
          alt="VFS Global Services"
        />
      </nuxt-link>
    </div>
    <mainContent />
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
@import "./assets/scss/globals/base";

header {
  font-size: 13px;
  display: flex;
  background: $blue;
  box-shadow: $layout_box_shadow;

  > .logo {
    width: $layout_left_width;
    text-align: center;
    padding: 20px 0px;
  }
}
</style>
