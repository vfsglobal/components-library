<template>
  <div class="component-list-wrapper">
    <div class="search-wrapper">
      <input
        type="text"
        placeholder="Search Any Component"
        v-model="searchText"
      >
    </div>
    <div
      class="list-wrapper"
      :class="{empty : isEmpty}"
      id="custom-scroll"
    >
      <transition name="slide">
        <transition-group
          name="list-slide"
          tag="ul"
          v-if="!isEmpty"
        >
          <li
            v-for="item in filteredList"
            :key="item.text"
            class="list-item"
          >
            <nuxt-link :to="item.link">{{ item.text }}</nuxt-link>
          </li>
        </transition-group>
        <div
          v-else
          class="empty-message"
        >{{emptyMessage}}</div>
      </transition>
    </div>
  </div>

</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data: function () {
    return {
      searchText: '',
      emptyMessage: 'No Component Found'
    }
  },
  computed: {
    ...mapGetters({
      list: 'componentList'
    }),
    lowerCasedSearchText() {
      return this.searchText.toLowerCase();
    },
    filteredList() {
      return this.list.filter(item => item.text.toLowerCase().indexOf(this.lowerCasedSearchText) == 0);
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
      background: $invalid_back_color;
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
            color: white;
            display: block;
            position: absolute;
            left: 0%;
            bottom: 0%;
            width: 100%;
            height: 0%;
            background: $blue;
            opacity: 0;
            z-index: -1;
            transition: all 0.3s;
          }
          &:hover:before,
          &.nuxt-link-exact-active:before {
            height: 100%;
            color: white;
            opacity: 1;
          }
          &:hover,
          &.nuxt-link-exact-active {
            color: #fff;
          }
          &.nuxt-link-exact-active:before {
            background: $orange;
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
    width: 100%;
  }
  #{transition_start($list_li_transition_name)} {
    opacity: 0;
    transform: translateX(-100%);
  }
}
</style>