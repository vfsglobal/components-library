<template>
    <transition name="vfs-modal-animation">
        <div class="vfs-modal-wrapper" v-if="show">
            <div class="vfs-modal-overlay" @click="hideOnOverlayClick && hide()" />
            <div class="vfs-modal">
                <vfs-icon name="close" class="close-button" @click.native="hide" />
                <div class="alert-content-wrapper">
                    <h4>{{title}}</h4>
                    <div class="alert-content">
                        <slot/>
                    </div>
                    <vfs-button @click.native="hide">{{buttonText}}</vfs-button>
                </div>
                <div class="bottom-content" v-if="$slots.bottomContent">
                    <slot name="bottomContent" />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import vfsButton from '~/components/library/button.vue';
import vfsIcon from '~/components/library/icon.vue';

export default {
    name: 'vfs-modal',

    components: {
        vfsButton,
        vfsIcon
    },

    model: {
        prop: 'show',
        event: 'change'
    },

    props: {
        show: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            default: 'Done'
        },
        hideOnOverlayClick: {
            type: Boolean,
            default: true
        }
    },

    methods: {
        hide() {
            this.$emit('change', false);
        }
    }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/common";
@import "./assets/scss/globals/library";

.vfs-modal-wrapper {
  $hor_padding: 40px;

  position: fixed;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  z-index: 999;

  > .vfs-modal-overlay {
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background: rgba(#000, 0.7);
  }

  > .vfs-modal {
    position: absolute;
    left: 50%;
    top: 50%;
    @extend %general_component_max_width;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #333;
    background-color: #ffffff;
    transform: translate(-50%, -50%) scale(1);
    overflow: hidden;

    > .alert-content-wrapper {
      padding: $hor_padding;

      > h4 {
        font-size: 24px;
        color: $dark_blue;
        margin-bottom: 20px;
      }
      > .alert-content {
        font-size: 18px;
        line-height: 1.3em;
      }
      > .vfs-button {
        margin-top: 30px;
        display: block;
      }
    }

    > .close-button {
      position: absolute;
      top: 17px;
      right: 17px;
      color: $dark_blue;
      cursor: pointer;
    }

    > .bottom-content {
      padding: 25px $hor_padding;
      background-color: #f8f9fa;
      font-size: 16px;
      line-height: 1.5em;
    }
  }
}
$main_transition_name: vfs-modal-animation;

#{transition_active($main_transition_name)
  + ", "
  + transition_active($main_transition_name, "", " > *")} {
  transition: all 0.5s;
}
#{transition_start($main_transition_name, "", " > *")} {
  opacity: 0;
}
#{transition_start($main_transition_name, "", " > .vfs-modal")} {
  transform: translate(-50%, -50%) scale(0);
}
</style>
