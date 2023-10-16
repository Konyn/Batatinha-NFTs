<template>
  <button class="botao-carrinho" id="show-modal" @click="showModal = true">
    <i class="bx bx-cart"></i>
    <span
      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      v-show="$store.state.cart.length > 0"
    >
      {{ $store.state.cart.length }}
    </span>
  </button>

  <Teleport to="body">
    <modal :show="showModal" @close="showModal = false"> </modal>
  </Teleport>
</template>

<script lang="ts">
import Modal from "./ModalCarrinho.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
});
</script>

<style lang="scss">
.botao-carrinho {
  position: relative;
  background: none;
  border: none;
  margin-left: 1rem;

  i {
    font-size: 1.7rem;
    color: #fff;
    font-weight: 500;
  }
  .badge {
    width: 25px;
    height: 20px;
    padding: 0;
    padding-top: 0.15rem;
    margin-top: 3px;
  }
}

.botao-carrinho:hover {
  background: linear-gradient(to right, #523bff 10%, #ff00f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  scale: 1.2;
}
</style>
