<template>
    <screen-container class="center">
        <div style="margin-left: 0px; curser:pointer">
            <button @click="openModal">Open Modal</button><br> is modal open? :{{showModal}}
        </div>
        <vfs-modal title="Thank You!" v-model="showModal">
            We'll be in touch shortly to arrange your visa. We'll be in touch shortly to arrange four visa.
            <template slot="bottomContent">
                Or you can contact one of our staff members on +91 22 67866031
            </template>
        </vfs-modal>
    </screen-container>
</template>

<script>
import screenContainer from '~/components/base/screen-container.vue';
import vfsModal from '~/components/library/modal.vue';

export default {
    components: {
        screenContainer,
        vfsModal
    },

    data() {
        return {
            showModal: false
        };
    },
    methods: {
        openModal() {
            this.showModal = true;
        }
    }
}
</script>

<style>
.vfs-modal-wrapper {
  position: absolute;
}
</style>
