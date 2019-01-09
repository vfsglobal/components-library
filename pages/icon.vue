<template>
  <screen-container class="center">
    <vfs-icon :name="selectedIcon" />
    <select v-model="selectedIconIndex">
      <option v-for="(icon, index) in allIcons" :key="icon" :value="index">{{icon}}</option>
    </select>
  </screen-container>
</template>

<script>
import screenContainer from '~/components/base/screen-container.vue';
import vfsIcon from '~/components/library/icon.vue';

import {mapState} from 'vuex';

export default {
  components: {
    screenContainer,
    vfsIcon
  },

  data() {
    return {
      selectedIconIndex: 0
    };
  },

  computed: {
    ...mapState('icons', {
      allIcons: state => state.list
    }),
    selectedIcon() {
      return this.allIcons[this.selectedIconIndex];
    }
  }
}
</script>

<style>

</style>
