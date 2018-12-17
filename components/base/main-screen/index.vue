<template>
    <div class="screen-container">
        <componentListWrapper />
        <div class="main-screen">
            <slot />
        </div>
    </div>
</template>

<script>
import componentListWrapper from './component-list-wrapper.vue';

export default {
    name: 'main-screen',
    components: {
        componentListWrapper
    }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/base";

.screen-container {
  display: flex;
  flex:1;

  > .component-list-wrapper {
    width: $layout_left_width;
     text-align: center;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: $layout_box_shadow;
  }

   > .main-screen {
      flex: 1;
<<<<<<< HEAD
=======
      overflow: hidden;
>>>>>>> 77397f4cd55a03b76d0d4341a2f1a869de54de08
    }
}
</style>
