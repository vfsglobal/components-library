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
  flex: 1;

  > .main-screen {
    flex: 1;
    overflow: hidden;
  }
}
</style>
