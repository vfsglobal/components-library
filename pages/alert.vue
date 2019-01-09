<template>
  <screen-container class="center">
    <vfs-alert>Info Alert</vfs-alert><br>
    <vfs-alert type="success">Success Alert</vfs-alert><br>
    <vfs-alert type="warning">Warning Alert.
      <vfs-link href="#" type='arrow'>link to complete action</vfs-link>
    </vfs-alert><br>
    <vfs-alert type="danger">Danger Alert</vfs-alert><br>

    <vfs-alert type="validation" title="Validation alert">
      <h4>Hold up! Something went wrong</h4>
      <vfs-link href="#">Error Link</vfs-link>
    </vfs-alert>
  </screen-container>
</template>

<script>
import screenContainer from '~/components/base/screen-container.vue';
import vfsAlert from '~/components/library/alert/index.vue';
import vfsLink from '~/components/library/link.vue';

export default {
  components: {
    screenContainer,
    vfsAlert,
    vfsLink
  }
}
</script>

<style lang="scss">
.vfs-alert.validation {
  > h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }
}
</style>
