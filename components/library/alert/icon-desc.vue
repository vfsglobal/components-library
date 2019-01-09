<template>
  <div class="icon-desc">
    <vfs-icon :name="typeDetails" />
    <slot />
  </div>
</template>

<script>
import { generateTypeMixin} from '~/components/mixins/general';
import { componentDetails } from './component-details';

import vfsIcon from '~/components/library/icon.vue';

export default {
  mixins: [generateTypeMixin({
    info: 'info-fill',
    success: 'checkmark',
    warning: 'warning-fill',
    danger: 'close-circle-fill'
  })],

  components: {
    vfsIcon
  },

  props: componentDetails.iconDesc.props
}
</script>

<style lang="scss">
@import "./assets/scss/globals/common";
@import "./common-alert";

.vfs-alert.icon-desc {
  padding: 12px;

  > * {
    display: inline-block;
    vertical-align: middle;
  }

  > i {
    font-size: 16px;
    margin-right: 5px;
  }

  @mixin alert-link($color) {
    > a,
    a:hover {
      color: $color;
      border-bottom-color: $color;
    }
  }
  &.info {
    @include alert-box(#005ea5);
  }
  &.warning {
    @include alert-box(#bd862e);
    @include alert-link(#bd862e);
  }
  &.success {
    @include alert-box(#00823b);
  }
  &.danger {
    @include alert-box($invalid_color);
  }
  
}
</style>