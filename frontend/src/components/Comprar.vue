<template>
  <form method="post">
    <input type="number" v-model="pedido.id" readonly >
    <input type="text" v-model="pedido.nome" readonly>
    <input type="text" v-model="pedido.criador" readonly >
    <input type="text" v-model="pedido.imagem" readonly >
    <input type="text" v-model="pedido.valor" readonly >
    <input type="number" v-model="pedido.quantidade" readonly >
    <button @click="pedidoNft">Fazer Pedido</button>
  </form>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Comprar',
    props: {
    pedido: {
      type: Object,
      required: true
    }
  },
    data() {
        return {
          pedido:{
            id: null,
            nome: null,
            criador: null,
            imagem: null,
            valor: null,
            quantidade: 1,
            status: 'Solicitado'
          }

        };
    },
    methods:{
      async created(){
        const id = this.$route.params.id;
        const categoria = this.$route.params.categoria;
        const res = await axios.get(`http://localhost:3000/${categoria}/${id}`)
        this.pedido = res.data;
      },  
        async pedidoNft(e: any){
            e.preventDefault()

      const data = {
        nome: this.pedido.nome,
        criador: this.pedido.criador,
        imagem: this.pedido.imagem,
        valor: this.pedido.valor,
        status: "Solicitado"
      }

      const dataJson = JSON.stringify(data) 
            const req = await fetch("http://localhost:3000/comprados", {
              method: "POST",
              headers: { "Content-Type" : "application/json" },
              body: dataJson
      });

      const res = await req.json();
      console.log(res);
      }
    }
});
</script>
