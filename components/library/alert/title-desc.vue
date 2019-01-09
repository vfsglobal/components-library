<template>
  <div class="title-desc">
    <h4 class="validation-title">{{title}}</h4>
    <slot/>
  </div>
</template>
<script>
import { typeProp } from '~/components/mixins/general';
import { componentDetails } from './component-details';

import vfsLink from '~/components/library/link.vue';

export default {
  mixins: [typeProp],

  components: {
    vfsLink
  },

  props: componentDetails.titleDesc.props
}
</script>
<style lang="scss">
@import "./assets/scss/globals/common";
@import "./common-alert";

.vfs-alert.title-desc {
  padding: 20px;

  > .validation-title {
    font-size: 16px;
    color: $invalid_color;
    margin-bottom: 10px;
  }

  &.validation {
    @include alert-box($invalid_color, false);
    @include alert-link($invalid_color);
  }
}
</style>
