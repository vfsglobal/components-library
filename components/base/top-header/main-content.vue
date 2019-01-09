<template>
  <div class="main-content-wrapper">
    <transition name="slide-up" mode="out-in">
      <div class="heading-button" v-if="currentComponent" :key="currentComponent.text">
        <h3 class="big-heading">{{currentComponent.text}}</h3>
        <h5 class="small-heading">Updated on <br>
          <h4 class="heading-date">{{currentComponent.modifiedTime | dateFormat}}</h4>
        </h5>
      </div>
    </transition>
    <transition name="slide-up">
      <a href="#" class="download-button" v-if="currentComponent">Download</a>
    </transition>
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
    border-radius: 4px 4px 0 0;
  }
  > .heading-button {
    background: $light_blue;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: $common_padding;
    color: #FFF;

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
        font-size: 1.2em;
      }
    }
  }
  > .download-button {
    background: $orange;
    right: 20px;
    display: block;
    font-size: 18px;
    cursor: pointer;
    padding: $common_padding 30px;
    color: #FFF;
    box-sizing: border-box;
  }

  $main_transition_name: slide-up;

  #{transition_active($main_transition_name)} {
    transition: all $page_transition_duration;
  }

  #{transition_start($main_transition_name)} {
    transform: translateY(100%);
  }
}
</style>
