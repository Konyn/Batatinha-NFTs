<template>

</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import Pedido from '../interfaces/Banco.js'
export default defineComponent({
    name: '',
    props: {
        show: Boolean
    },
    data() {
        return {
            pedidos:  {
                nome: '',
                criador: '',
                imagem: '',
                valor: '',
                quantidade: 1,
                vendedor: '',
            },
        }
    },
    methods: {
        async sendForm() {
            const pedidos = {
                nome: this.pedidos.nome,
                criador: this.pedidos.criador,
                imagem: this.pedidos.imagem,
                valor: this.pedidos.valor,
                quantidade: this.quantidade,
                vendedor: this.pedidos.vendedor,
            };
            try {
                const res = await axios.post(`http://localhost:3000/comprados`, pedidos);
                console.log(res);
                alert('Comprado com sucesso!');
            } catch (error) {
                console.log(error);
            }

        },
        // formatNumber(valor) {
        //     if (valor) {
        //         return valor.toLocaleString("pt-BR", {
        //             style: "currency",
        //             currency: "BRL",
        //         })
        //     }
        //     return "";
        // },
    },
    computed: {
        // formattedValor() {
        //     return this.formatNumber(this.pedidos.valor);
        // }
    },
    async created() {
        const id = this.$route.params.id;
        const categoria = this.$route.params.categoria;
        const response = await axios.get(`http://localhost:3000/${categoria}/${id}`);
        this.pedidos = response;
    }

});
</script>

<style lang="scss" scoped>

</style>