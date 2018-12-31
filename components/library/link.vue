<template>
    <a class='vfs-link' :class="type">
        <vfs-icon :name="typeDetails.iconName" v-if="typeDetails.iconAtEnd === false" />
        <slot />
        <vfs-icon :name="typeDetails.iconName" v-if="typeDetails.iconAtEnd === true" />
    </a>
</template>

<script>
import vfsIcon from '~/components/library/icon.vue';
import { generateTypeMixin } from '~/components/mixins/general';

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

.vfs-link {
  border-bottom: 1px solid $orange;
  color: $orange;
  font-size: 16px;
  transition: all 0.3s;

  > i {
    font-size: 12px;
  }

  &:hover {
    color: $dark_orange;
    border-bottom-color: $dark_orange;
  }

  &.external {
    text-align: right;
  }
}
</style>
