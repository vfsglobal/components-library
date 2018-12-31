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

export default {
  components: {
    screenContainer,
    vfsIcon
  },

  data() {
    return {
      allIcons: ['upload-rect-fill', 'upload-circle-fill', 'cart'],
      selectedIconIndex: 0
    };
  },

  computed: {
    selectedIcon() {
      return this.allIcons[this.selectedIconIndex];
    }
  }
}
</script>

<style>

</style>
