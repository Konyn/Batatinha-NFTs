<template>
    <section>

        <!--CARDS PRINCIPAIS TENDENCIAS-->
        <div class="container">
            <div class="titulo">
                <h2>CATEGORIA EM DESTAQUE</h2>
            </div>
            <!--card 1-->
            <div class="card-box ">
                <div class="card" v-for="artista in artistas" :key="artista.id">
                    <img :src="artista.image" alt="nft">
                    <p>{{ artista.nome }}</p>
                    <h2>{{ artista.criador }}</h2>
                    <div class="flex">
                        <div class="flex-1">
                            <span class="span">
                                <img class="eth__icone" src="../assets/icon/ETH1.png" alt="moeda">
                                <p>{{ artista.valor }}</p>
                            </span>
                            <p>1 de 32</p>
                        </div>
                    </div>
                    <button class="btn btn-primary">Compra</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import type Arte from '../interfaces/Banco.js'

export default defineComponent({
    data() {
        return {
            artistas: [] as Arte[]  // Inicialize o array artistas como um array vazio
        }
    },
    methods: {
        async carregarDados() {
            try {
                const res = await axios.get("http://localhost:3000/arte");
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
    margin: 0 auto;
    padding: 0.5rem;

    .titulo {
        color: var(--texto-branco);
        margin: 1.5rem 0 3.5rem 0;
        text-shadow: 3px 2px 5px #ddd;
    }

    .card-box {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 40px 30px;
    }

    .card {
        border-radius: 1rem;
        padding: 1rem;

        h2 {
            margin: 0.3rem 0;
            font-size: 1.2rem;
            font-weight: bold;
        }

        img {
            width: 100%;
            height: 250px;
            border-radius: 1rem;
            object-fit: cover;
        }
    }

    .flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 1rem 0;

        a {
            font-size: 0.9rem;
            font-weight: 700;
            color: #1c51fe;
        }
    }

    .flex-1 {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .span {
            display: flex;
            background-color: #bda7ff70;
            height: 2rem;
            border-radius: 1.2rem;
            padding: 0 0.8rem;
            color: #1c51fe;
            font-weight: 700;
            font-size: 0.8rem;

            img {
                margin-top: 4px;
                width: 22px;
                height: 22px;
            }

            p {
                margin-top: 2px;
                margin-left: 0.4rem;
                color: #1c51fe;
                font-size: 1.2rem;
                font-weight: 500;
            }
        }

        p {
            margin-left: 0.4rem;
            color: #000;
            font-size: 1.2rem;
            font-weight: 500;
        }
    }
}

@media screen and (min-width: 616px) {}
</style>
