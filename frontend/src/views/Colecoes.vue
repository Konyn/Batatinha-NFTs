<template>
    <section>

        <!--CARDS NOVAS CATEGORIAS-->
        <div class="container">
            <div class="titulo">
                <h2>COLEÇÕES</h2>
            </div>
            <!--card 1-->
            <div class="card-box ">
                <div class="card" v-for="artista in artistas" :key="artista.id">
                    <img :src="artista.image" alt="nft">
                    <h2>{{ artista.categoria }}</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import type Image from '../interfaces/Banco.js'

export default defineComponent({
    data() {
        return {
            artistas: [] as Image[]  // Inicialize o array artistas como um array vazio
        }
    },
    methods: {
        async carregarDados() {
            try {
                const res = await axios.get("http://localhost:3000/images");
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
        gap: 40px 30px;
    }

    .card:hover {
        cursor: pointer;
    }

    .card {
        border-radius: 1rem;
        width: 280px;
        h2 {
            font-size: 1.2rem;
            font-weight: bold;
            padding: 1rem;
            text-align: center;
            font-weight: bold;
        }

        img {
            width: 100%;
            height: 250px;
            border-radius: 1rem 1rem 0 0;
            object-fit: cover;
        }
    }
}

@media screen and (min-width: 616px) {}
</style>
