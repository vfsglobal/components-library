<template>
    <div :class="type" class="vfs-alert">
        <vfs-icon :name="typeDetails" />
        <slot/>
    </div>
</template>

<script>
import vfsIcon from '~/components/library/icon.vue';

import { generateTypeMixin } from '~/components/mixins/general';

export default {
    mixins: [generateTypeMixin({
        info: 'info-fill',
        success: 'checkmark',
        warning: 'warning-fill',
        danger: 'close-fill'
    }, 'info')],

    name: 'vfs-alert',

    components: {
        vfsIcon
    }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/common";

.vfs-alert {
  position: relative;
  padding: 12px;
  min-width: 632px;
  color: $dark_blue;

  > * {
    display: inline-block;
    vertical-align: middle;
  }

  > i {
    font-size: 16px;
    margin-right: 5px;
  }

  @mixin alert-box($color) {
    border-left: 4px solid $color;
    background-color: rgba($color, 0.05);

    > i {
      color: $color;
    }
  }

  &.info {
    @include alert-box(#005ea5);
  }
  &.warning {
    @include alert-box(#bd862e);
  }
  &.success {
    @include alert-box(#00823b);
  }
  &.danger {
    @include alert-box($invalid_color);
  }
}
</style>
