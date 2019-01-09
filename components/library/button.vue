<template>
  <component :is="tag" class="vfs-button">
    <slot />
    <vfs-icon :name="iconName" v-if="iconName" />
    <span class="num" v-if="num">{{num}}</span>
  </component>
</template>

<script>
import vfsIcon from '~/components/library/icon.vue';

export default {
  name: 'vfs-button',

  components: {
    vfsIcon
  },
  props: {
    tag: {
      type: String,
      default: 'a'
    },
    iconName: {
      type: String,
      dafault: null
    },
    num: {
      type: [Number, String],
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/common";

.vfs-button {
  display: inline-block;
  position: relative;
  min-width: 120px;
  padding: 16px;
  border-radius: 8px;
  background-color: $orange;
  font: inherit;
  font-size: 16px;
  color: #fff;
  text-align: center;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s;

  &.large {
    font-size: 18px;
    padding: 18px;
  }

  &.small {
    padding: 10px;
  }

  &:before {
    content: "";
    color: #fff;
    position: absolute;
    left: 0%;
    bottom: 0%;
    width: 100%;
    height: 0%;
    background: $dark_orange;
    z-index: -1;
    transition: all 0.3s;
  }

  &:hover {
    color: #fff;

    &:before {
      height: 100%;
    }
  }

  &.secondary {
    background-color: transparent;
    border: 1px solid $orange;
    color: $orange;

    &:before {
      background: $orange;
    }

    &:hover {
      color: #fff;
    }
  }
  .num {
    padding: 1px 4px;
    background: #fcefe8;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    color: $orange;
    margin-left: 5px;
  }
  > * {
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    font-size: 20px;
  }
}
</style>