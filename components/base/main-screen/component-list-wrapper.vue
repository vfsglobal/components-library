<template>
  <div class="component-list-wrapper">
    <div class="search-wrapper">
      <input typy="text" placeholder="Search Any Component" v-model="searchText">
    </div>
    <div class="list-wrapper" :class="{empty : isEmpty}" id="custom-scroll">
      <transition name="slide">
        <transition-group name="list-slide" tag="ul" v-if="!isEmpty">
          <li v-for="item in filteredList" :key="item" class="list-item">
            <a href="#">{{ item }}</a>
          </li>
        </transition-group>
        <div v-else class="empty-message">{{emptyMessage}}</div>
      </transition>
    </div>
  </div>

</template>
<script>
import { mapState } from 'vuex';

export default {
  data: function () {
    return {
      searchText: '',
      emptyMessage: 'No Component Found'
    }
  },
  computed: {
    ...mapState('components-library', {
      list: state => state.list
    }),
    filteredList() {
      var filteredArr = [];

      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].toLowerCase().indexOf(this.searchText.toLowerCase()) == 0)
          filteredArr.push(this.list[i]);
      }

      return filteredArr;
    },
    isEmpty() {
      return this.filteredList.length == 0;
    }
  },
}
</script>
<style lang="scss">
@import "./assets/scss/globals/base";

.component-list-wrapper {
  > .search-wrapper {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    padding: 10px;
    box-shadow: $layout_box_shadow;
    display: table;
    z-index: 1;
    > input {
      border-radius: 5px;
      padding: 7px;
      border: 1px solid $dark_border_color;
      width: 100%;
      margin: 0;
      box-shadow: inset 2px 2px 5px $light_border_color;
      box-sizing: border-box;
      outline: none;
    }
  }

  > .list-wrapper {
    flex: 1;
    background: $light_border_color;
    position: relative;
    transition: all 0.3s;
    overflow: hidden;
    overflow-y: auto;

    &#custom-scroll {
      &::-webkit-scrollbar-track {
        box-shadow: inset 2px -2px 5px rgba($scroll_color, 0.1);
        background-color: $light_border_color;
      }

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgba($scroll_color, 0.7);
      }
      &::-webkit-scrollbar-thumb:hover {
        background: rgba($scroll_color, 0.9);
      }
    }
    &.empty {
      background: $validation_background_color;
    }
    > ul {
      height: 100%;
      border-right: 2px solid transparent;

      > li {
        display: block;
        transition: all 0.3s;
        > a {
          display: table;
          position: relative;
          width: 100%;
          color: #031b30;
          padding: 10px;
          box-sizing: border-box;
          z-index: 1;
          transition: all 0.3s;

          border-bottom: 2px solid $light_white_color;

          &:before {
            content: "";
            color:white;
            display: block;
            position: absolute;
            left: 0%;
            bottom: 0%;
            width: 100%;
            height: 0%;
            background: $blue;
            opacity: 0;
            border-radius: 5px;
            z-index: -1;
            transition: all 0.3s;
          }
          &.active:before,
          &:hover:before {
            height: 100%;
            color:white;
            opacity: 1;
          }
          &:hover, &.active{
            color:#fff;
          }
        }
      }
      .empty-message {
        padding: 10px;
      }
    }
  }

  $main_transition_name: slide;

  #{transition_active($main_transition_name)} {
    position: absolute;
    left: 0%;
    width: 100%;
    overflow: hidden;
    transition: left 0.5s;
  }

  #{transition_active($main_transition_name, 'ul')} {
    border-right: 2px solid $light_white_color !important;
  }

  #{transition_start($main_transition_name, 'ul')} {
    left: -100%;
  }

  #{transition_start($main_transition_name, '.empty-message')} {
    transition: opacity 0;
    left: 100%;
  }

  $list_li_transition_name: list-slide;

  .#{$list_li_transition_name}-leave-active {
    position: absolute;
    transition: all 0.3s;
  }
  #{transition_start($list_li_transition_name)} {
    opacity: 0;
    transform: translateX(-100%);
  }
}
</style>