<template>
  <div class="component-list-wrapper">
    <div class="search-wrapper">
      <input typy="text" placeholder="Search Any Component" v-model="searchText">
    </div>
    <div class="list-wrapper" :class="{empty : isEmpty}">
      <transition name="slide">
        <ul v-if="!isEmpty">
          <li v-for="(item, index) in filteredList" :key="index">
            <a href="#">{{ item }}</a>
          </li>
        </ul>
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
    filteredList () {
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
  }
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
      outline:none;
    }
  }
  > .list-wrapper {
    flex: 1;
    background: #f5f5f5;
    position: relative;
    > ul {
      height: 100%;
      border-right: 2px solid transparent;

      > li {
        > a {
          color: $orange;
          display: block;
          padding: 10px;
          border-bottom: 2px solid #ccc;
        }
      }
    }
  }
  > .empty-message {
    padding: 10px 0px;
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
  left: 100%;
}
</style>