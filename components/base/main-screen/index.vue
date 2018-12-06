<template>
    <div class="screen_container">
        <div class="component_list_wrapper">
            <searchWrapper/>
        </div>
        <div class="main_screen">
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

.screen_container {
  display: flex;
  background: $orange;
  flex: 1;

  > .component_list_wrapper {
    width: $layout_left_width;
    padding: 20px 0px;
  }
}
</style>
