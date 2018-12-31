<template>
    <screen-container class="center">
        <vfs-alert>Info Alert</vfs-alert><br>
        <vfs-alert type="success">Success Alert</vfs-alert><br>
        <vfs-alert type="warning">Warning Alert</vfs-alert><br>
        <vfs-alert type="danger">Danger Alert</vfs-alert>
    </screen-container>
</template>

<script>
import screenContainer from '~/components/base/screen-container.vue';
import vfsAlert from '~/components/library/alert.vue';
export default {
  components: {
    screenContainer,
    vfsAlert
  }
}
</script>

<style>

</style>
