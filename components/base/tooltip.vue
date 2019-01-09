<template>
    <div class="tooltip">
        <vfs-icon :name="iconName" />
        <div class="main-content">
            <slot />
        </div>
    </div>

</template>

<script>

import vfsIcon from '~/components/library/icon.vue';
export default {
    components: {
        vfsIcon
    },
    props: {
        iconName: {
            type: String,
            default: 'info'
        }
    }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/base";

.tooltip {
  position: relative;
  display: inline-block;

  > i {
    display: block;
  }

  > .main-content {
    $background: rgba(0, 0, 0, 0.8);
    $left_shift: 20px;
    $top_shift: 5px;
    $arrow_tip_length: 5px;
    $arrow_broadness: 10px;

    position: absolute;
    left: 50%;
    top: 100%;
    width: 200px;
    background-color: $background;
    color: #fff;
    padding: 5px;
    border-radius: 4px;
    opacity: 0;
    transform-origin: $left_shift #{-$top_shift};
    margin-top: $arrow_tip_length + $top_shift;
    margin-left: -$left_shift;
    transform: scale(0);
    visibility: hidden;
    transition: all 0.3s;

    &:after {
      content: "";
      position: absolute;
      left: $left_shift;
      bottom: 100%;
      margin-left: -$arrow_broadness / 2;
      @include create_arrow(top, $arrow_tip_length, $arrow_broadness, $background);
    }
  }
  &:hover > .main-content {
    opacity: 1;
    transform: scale(1);
    visibility: visible;
  }
}
</style>
