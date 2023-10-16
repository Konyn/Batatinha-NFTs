<template>
    <!--CARDS ARTISTAS-->
    <section>
        <div class="container">
            <div class="titulo">
                <h2>TOP ARTISTAS CRIADORES</h2>
            </div>
            <div class="card-box">
                <div class="card" v-for="artista in artistas" :key="artista.id">
                    <img :src="artista.image" alt="artista">
                    <h2>{{ artista.nome }}</h2>
                </div>
            </div>

        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios'
import type Images from '../interfaces/Banco.js'

export default defineComponent({
    data() {
        return {
            artistas: [] as Images[]  // Inicialize o array artistas como um array vazio
        }
    },
    methods: {
        async carregarDados() {
            try {
                const res = await axios.get("http://localhost:3000/artistas");
                this.artistas = res.data;
            } catch (error) {
                console.error('Erro ao carregar os dados: ', error);
            }
        },
    },
    created() {
        this.carregarDados();
    }
})

</script>

<style scoped lang="scss">
section {
    margin: 100px auto;
    padding: 0.5rem;


    .titulo {
        color: var(--texto-branco);
        margin-bottom: 60px;
        text-shadow: 3px 2px 5px grey;
    }

    .card-box {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        /* Exibir 4 colunas */
        gap: 40px 30px;
    }

    .card {
        border-radius: 1rem;
        padding: 1rem;
        cursor: pointer;

        h2 {
            margin: 0.3rem 0;
            font-size: 1.2rem;
            font-weight: bold;
            text-align: center;
            margin-top: 20px;
            color: var(--texto-preto);
        }
    }
}
</style>
