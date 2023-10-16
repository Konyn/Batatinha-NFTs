<template>
  <section>
    <div
      class="card"
      style="width: 20rem"
      :style="$store.state.cart.length < 4 ? 'height: 100%;' : ''"
    >
      <slot></slot>

      <ul>
        <span class="title" v-show="$store.state.cart.length < 1"
          >Nenhum NFT no seu carrinho</span
        >
        <div class="item" v-for="(item, index) in items" :key="index">
          <div class="image">
            <img :src="item.image" class="card-img-top" :alt="item.nome" />
          </div>
          <div class="item-info">
            <span class="card-title">{{ item.nome }}</span>
            <span>{{ item.criador }}</span>
            <span>{{ item.valor }} ETH</span>
            <small>{{ item.vendedor }}</small>
          </div>
          <button class="lixo" @click="removeItem()">
            <i class="bi bi-trash3-fill"></i>
          </button>
        </div>
      </ul>

      <ul class="list-group list-group-flush mt-3 mb-3">
        <li class="list-group-item">
          <div class="flex">
            <strong>Valor total</strong>
            <strong>{{ valorTotal }} ETH</strong>
          </div>

          <!-- <small class="small">{{ valorTotal }} ETH</small> -->
        </li>
      </ul>
      <button class="btn btn-primary">Completar compra</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import type Image from "../interfaces/Banco.js";

export default defineComponent({
  data() {
    return {
      artistas: [] as Image[], // Inicialize o array artistas como um array vazio
      items: this.$store.state.cart,
    };
  },
  methods: {
    async carregarDados() {
      try {
        const res = await axios.get("http://localhost:3000/images");
        this.artistas = res.data;
      } catch (error) {
        console.error("Erro ao carregar os dados: ", error);
      }
    },
    removeItem() {
      this.$store.dispatch("removeItemCart");
    },
  },
  created() {
    this.carregarDados();
  },
  computed: {
    valorTotal() {
      return this.$store.getters.total;
    },
  },
});
</script>

<style scoped lang="scss">
section {
  .card {
    padding: 0 1rem;
    padding-bottom: 1rem;
    height: 460px;

    ul:nth-last-of-type(2) {
      overflow-y: auto;
    }
    .title {
      margin: 0 2.3rem;
      text-align: center;
    }
    .item {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;

      .lixo {
        margin: auto;
        width: 2rem;
        height: 2rem;
        text-align: center;
        cursor: pointer;
        background: none;
        border: none;
      }

      .lixo i {
        font-size: 1.2rem;
      }

      .lixo i:hover {
        padding: 0.5rem;
        border-radius: 0.3rem;
        background-color: red;
        color: #fff;
        transition: 0.2s;
      }
    }

    .image {
      width: 90px;

      img {
        width: 90px;
        height: 90px;
      }
    }

    .item-info {
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      width: 50%;
    }

    .flex {
      display: flex;
      justify-content: space-between;
    }

    .small {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
