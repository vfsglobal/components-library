<template>
  <screen-container class="center">
    <vfs-button>testing</vfs-button>
    <br>
    <vfs-button class="secondary small" tag="button" icon-name="cart">Register</vfs-button>
    <br>
    <vfs-button class="secondary large">testing</vfs-button>
    <br>
    <vfs-button class="small">testing</vfs-button>
    <br>
    <tooltip>
      You can use any icon here..
    </tooltip>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </screen-container>
</template>

<script>
import screenContainer from '~/components/base/screen-container.vue';
import vfsButton from '~/components/library/button.vue';
import tooltip from '~/components/base/tooltip.vue';

export default {
  components: {
    screenContainer,
    vfsButton,
    tooltip
  }
}
</script>

<style>
</style>
