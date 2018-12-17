<template>
    <div class="screen-container">
        <div class="main-screen-content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.screen-container {
  display: flex;
  height: 100%;

  &.center {
      align-items: center;
  }

  > .main-screen-content {
      width: 100%;
      max-height: 100%;
      overflow: auto;

      > * {
          display: table;
          margin-left: auto;
          margin-right: auto;
      }
  }
}
</style>
