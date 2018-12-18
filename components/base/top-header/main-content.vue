<template>
  <div class="main-content-wrapper">
    <transition name="slide-up">
      <div class="heading-button" v-if="currentComponent">
        <h3 class="big-heading">{{currentComponent.text}}</h3>
        <h5 class="small-heading">Updated on <br>
          <h4 class="heading-date">{{currentComponent.modifiedTime}}</h4>
        </h5>
      </div>
    </transition>
    <div class="download-button">
      <h3 class="big-heading">Download</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      currentComponent: null
    };
  },

  computed: mapGetters(['componentList']),

  watch: {
    $route: {
      handler(to) {
        this.currentComponent = to.name == 'index' ? null : this.componentList.find(item => item.name == to.name);
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/base";

header .main-content-wrapper {
  flex: 1;
  position: relative;
  padding: 0 20px;
  overflow: hidden;

  > .heading-button,
  .download-button {
    position: absolute;
    bottom: 0px;
    color: #fff;
    border-radius: 4px 4px 0 0;
    padding: $common_padding;
  }
  > .heading-button {
    background: $light_blue_color;
    display: flex;
    align-items: center;
    justify-content: center;

    & > .big-heading {
      float: left;
      font-size: 35px;
      border-right: 2px solid $blue;
      padding-right: $common_padding;
    }
    & > .small-heading {
      padding-left: $common_padding;
      font-size: 12px;
      float: left;

      & > .heading-date {
        margin-top: 5px;
        font-weight: bold;
      }
    }
  }
  > .download-button {
    background: $orange;
    right: 20px;

    & > .big-heading {
      display: block;
      font-size: 20px;
      cursor: pointer;
    }
  }

  $main_transition_name: slide-up;

  #{transition_active($main_transition_name)} {
    transition: all 0.5s;
  }

  #{transition_start($main_transition_name)} {
    transform: translateY(100%);
  }
}
</style>
