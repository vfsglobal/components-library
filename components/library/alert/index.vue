<template>
    <component :type="type" :class="type" class="vfs-alert" :is="typeDetails" :title="title">
        <slot />
    </component>
</template>

<script>
import iconDesc from './icon-desc.vue';
import titleDesc from './title-desc.vue';

import { generateTypeMixin } from '~/components/mixins/general';

import { allTypeComponents, defaultType, allComponentProps } from './component-details';

export default {
    name: 'vfs-alert',

    mixins: [generateTypeMixin(allTypeComponents, defaultType)],

    components: {
        iconDesc,
        titleDesc
    },

    props: allComponentProps
}
</script>

<style lang="scss">
@import "./assets/scss/globals/common";
@import "./assets/scss/globals/library";

.vfs-alert {
  position: relative;
  color: $dark_blue;
  box-sizing: border-box;
  @extend %general_component_max_width;
}
</style>
