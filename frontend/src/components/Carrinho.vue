<template>
  <section>
    <div
      class="card"
      style="width: 20rem"
      v-for="pedido in pedidos"
      :key="pedido.id"
    >
      <slot></slot>
      <ul>
        <div class="item">
          <div class="image">
            <img :src="pedido.image" class="card-img-top" alt="..." />
          </div>
          <div class="item-info">
            <span class="card-title">{{ product.nome }}</span>
            <span>{{ product.criador }}</span>
            <span>{{ product.valor }}</span>
            <small>{{ product.vendedor }}</small>
          </div>
          <div class="lixo" @click="deletar(product.id)">
            <i class="bi bi-trash3-fill"></i>
          </div>
        </div>
      </ul>

      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="flex">
            <strong>Valor total</strong>
            <strong>{{ product.valor }}</strong>
          </div>

          <small class="small">R$100,00</small>
        </li>
      </ul>
      <button class="btn btn-primary">Completar compra</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import type Pedido from "../interfaces/Banco.js";

export default defineComponent({
  props: {
    product: Object,
  },
  data() {
    return {
      pedidos: [] as Pedido[],
    };
  },
  methods: {
    async pedidos() {
      try {
        const res = await axios.get("http://localhost:3000/comprados");
        this.pedidos = res.data;
      } catch (error) {
        console.error("Erro ao carregar os dados: ", error);
      }
    },
    async deletar(id: number) {
      const req = await axios.delete(`http://localhost:3000/comprados/${id}`);
      return req;
    },
  },
  created() {
    this.pedidos();
  },
});
</script>

<style scoped lang="scss">
section {
  .card {
    padding: 0 1rem;
    padding-bottom: 1rem;

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
