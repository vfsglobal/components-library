<template>
  <div class="container" id="app">
    <topHeader />
    <mainScreen>
      <nuxt />
    </mainScreen>
  </div>
</template>

<script>
import topHeader from '~/components/base/top-header/index.vue';
import mainScreen from '~/components/base/main-screen/index.vue';

export default {
  components: {
    topHeader,
    mainScreen
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>