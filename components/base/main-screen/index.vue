<template>
    <div class="screen-container">
        <div class="component-list-wrapper">
            <searchWrapper/>
        </div>
        <div class="main-screen">
            <slot />
        </div>
    </div>
</template>

<script>
import searchWrapper from './search-wrapper.vue';

export default {
    name: 'main-screen',
    components: {
        searchWrapper
    }
}
</script>

<style lang="scss">
@import "./assets/scss/globals";

.screen-container {
  display: flex;
  background: $orange;
  flex: 1;

  > .component-list-wrapper {
    width: $layout_left_width;
    padding: 20px 0px;
  }

   > .main-screen {
      flex: 1;
      background: rgb(243, 220, 177);
    }
}
</style>
