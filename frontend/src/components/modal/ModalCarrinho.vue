<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <div class="modal-body">
                    <slot name="body">
                        <Carrinho>
                            <div class="fechar">
                                <i @click="$emit('close')" class="bi bi-x-circle-fill"></i>
                            </div>
                        </Carrinho>
                    </slot>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Carrinho from '../carri-teste.vue';
export default defineComponent({
    name: '',
    components: {
        Carrinho
    },
    props: {
        show: Boolean
    }
});
</script>

<style lang="scss" scoped>
.fechar {
    text-align: right;
    font-size: 1.5rem;
    font-weight: 700;
}

.fechar i:hover {
    cursor: pointer;
    color: red;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.3s ease;
}

.modal-container {
    width: 600px;
    margin: auto;
    transition: all 0.3s ease;
}

.modal-body {
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

@media(max-width: 468px) {

    .modal-mask {
        overflow-y: scroll;
    }
}
</style>