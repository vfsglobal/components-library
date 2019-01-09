<template>
    <component :type="type" :class="type" class="vfs-alert" :is="typeDetails" v-bind="attrs">
        <slot />
    </component>
</template>

<script>
import iconDesc from './icon-desc.vue';
import titleDesc from './title-desc.vue';

import { generateTypeMixin } from '~/components/mixins/general';

import { allTypeComponents, defaultType, allComponentProps, componentDetails } from './component-details';

export default {
    name: 'vfs-alert',

    mixins: [generateTypeMixin(allTypeComponents, defaultType)],

    components: {
        iconDesc,
        titleDesc
    },

    props: allComponentProps,

    computed: {
        attrs() {
            var curProps = componentDetails[this.typeDetails].props,
                attrs = {};
            
            for(var propName in curProps)
                attrs[propName] = this[propName];
            
            return attrs;
        }
    }
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
