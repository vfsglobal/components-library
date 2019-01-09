<template>
  <a class='vfs-link' :class="type">
    <vfs-icon :name="typeDetails.iconName" v-if="typeDetails.iconAtEnd === false" />
    <slot />
    <vfs-icon :name="typeDetails.iconName" v-if="typeDetails.iconAtEnd === true" />
  </a>
</template>

<script>
import { generateTypeMixin } from '~/components/mixins/general';

import vfsIcon from '~/components/library/icon.vue';

export default {
  name: 'vfs-link',

  mixins: [generateTypeMixin({
    arrow: {
      iconName: 'right-arrow',
      iconAtEnd: true
    },
    external: {
      iconName: 'arrow-up-right',
      iconAtEnd: false
    }
  }, {
      defaultTypeDetails: {}
    })],

  components: {
    vfsIcon
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/common";

%transition {
  transition: all 0.3s;
}

.vfs-link {
  border-bottom: 1px solid $orange;
  color: $orange;
  @extend %transition;

  > i {
    display: inline-block;
    @extend %transition;
    vertical-align: middle;
  }

  &.arrow > i {
    font-size: 12px;
  }

  &.external > i {
    font-size: 10px;
  }

  &:hover {
    color: $dark_orange;
    border-bottom-color: $dark_orange;
    &.arrow > i {
      transform: translateX(5px);
    }
    &.external > i {
      transform: scale(1.2);
    }
  }
}
</style>
