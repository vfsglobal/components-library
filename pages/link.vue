<template>
    <screen-container class="center">
        <vfs-link href="#">Normal text link</vfs-link><br>
        <vfs-link href="#" type='arrow'>With arrow</vfs-link><br>
        <vfs-link href="#" type='external'>External Link</vfs-link>
     </screen-container>

</template>

<script>
import screenContainer from '~/components/base/screen-container.vue';
import vfsLink from '~/components/library/link.vue';

export default {
    components: {
        screenContainer,
        vfsLink
    }

}
</script>

<style>
</style>
