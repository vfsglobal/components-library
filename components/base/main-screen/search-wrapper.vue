<template>

  <div class="search-wrapper">
    <input typy="text" placeholder="search any component" v-model="searchText">
    <transition name="fade">
      <ul v-if="filteredList.length > 0">
        <li v-for-key="(item, index) in filteredList" key="index">{{ item }}</li>
      </ul>
      <div v-else class="empty_message">{{emptyMessage}}</div>
    </transition>
  </div>

</template>
<script>
import { mapState } from 'vuex';

export default {
  data: function () {
    return {
      searchText: ''
    }
  },
  computed: {
    ...mapState('components-library', {
      list: state => state.list
    }),
    filteredList: function () {
      var filteredArr = [];

      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].toLowerCase().indexOf(this.searchText.toLowerCase()) == 0)
          filteredArr.push(this.list[i]);
      }

      return filteredArr;
    }
  }
}
</script>
<style lang="scss">
.component-list-wrapper > .search-wrapper {
  flex: 1;
  padding: 5px 0px;
  text-align: center;
  display: table;

  > input {
    width: 100%;
  }
  > ul {
    text-decoration: none;
  }
}

@function transition_active($transition_name, $prefix: "") {
  @return $prefix + "." + $transition_name + "-enter-active, " + $prefix + "." +
    $transition_name + "-leave-active";
}

@function transition_start($transition_name, $prefix: "") {
  @return $prefix + "." + $transition_name + "-enter, " + $prefix + "." +
    $transition_name + "-leave-to";
}

$transition_name: fade;

#{transition_active($transition_name)} {
  position: absolute;
  transition: all 3.3s;
}

#{transition_start($transition_name, ul)} {
  opacity: 0;
}
#{transition_start($transition_name, '.empty_message')} {
  opacity: 0;
  transform: scale(0.5);
}
</style>