<template>
  <div class="component-list-wrapper">
    <div class="search-wrapper">
      <input typy="text" placeholder="Search Any Component" v-model="searchText">
    </div>
    <div class="list-wrapper" :class="{empty : isEmpty}">
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
@import "./assets/scss/globals";

.component-list-wrapper {
  > .search-wrapper {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    padding: 10px;
    box-shadow: $box_shadow;
    display: table;
    z-index: 1;
    > input {
      border-radius: 5px;
      padding: 7px;
      border: 1px solid #aaa;
      width: 100%;
      margin: 0;
      box-shadow: inset 2px 2px 5px #ccc;
      box-sizing: border-box;
      outline: none;
    }
  }

  > .list-wrapper {
    flex: 1;
    background: #f5f5f5;
    position: relative;
    transition: all 0.3s;
    &.empty {
      background: rgba(#b10e1e, 0.3);
    }
    > ul {
      height: 100%;
      border-right: 2px solid transparent;

      > li {
        transition: all 0.3s;
        > a {
          color: $orange;
          display: block;
          padding: 10px;
          border-bottom: 2px solid #ccc;
        }
      }
      .empty-message {
        padding: 10px;
      }
    }
  }
}

$transition_name: slide;

#{transition_active($transition_name)} {
  position: absolute;
  left: 0%;
  width: 100%;
  overflow: hidden;
  transition: left 0.5s;
}

#{transition_active($transition_name, 'ul')} {
  border-right: 2px solid #ccc !important;
}

#{transition_start($transition_name, 'ul')} {
  left: -100%;
}

#{transition_start($transition_name, '.empty-message')} {
  transition: opacity 0;
  left: 100%;
}
.list-slide-leave-active {
  position: absolute;
  transition: all 0.3s;
}
.list-slide-enter, .list-slide-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100%);
}
</style>