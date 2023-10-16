<template>
    <main class="container">
        <section class="espacamento">
            <div class="subtitle">
                <a href="#">
                    <h3>Coleção</h3>
                </a>
            </div>
            <div>
                <h2>NFT - Nome</h2>
                <small>Criado por <a href="">Pessoa</a></small>
            </div>
        </section>
        <section class="flex">
            <div class="teste">
                <div class="card">
                    <div class="card-info">

                        <div>
                            <i class='bx bxs-coin-stack'></i>
                        </div>

                        <div class="icon">
                            <i class='bx bx-expand-alt'></i>
                            <i @click="favoritos" :style="!favorito ? '' : 'display: none'" class='bx bx-heart'></i>
                            <i @click="favoritos" :style="favorito ? '' : 'display: none'"
                                class='bx bxs-heart vermelho'></i>
                        </div>
                    </div>
                    <div class="imagem">
                        <img src="../assets/NFTs/macacos/macacosDrop4.svg" alt="NFT">
                    </div>
                </div>
                <Detalhes />
            </div>

            <div class="componentes">
                <CardCompra />
            </div>
        </section>

    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Detalhes from '../components/Detalhes.vue';
import CardCompra from '@/components/Card-Compra.vue';
import axios from 'axios';

export default defineComponent({
    name: 'NFT',
    components: { Detalhes, CardCompra },
    data() {
        return {
            favorito: false
        };
    },
    methods: {
        favoritos() {
            return this.favorito = !this.favorito
        }
    }
});
</script>

<style lang="scss" scoped>
.espacamento {
    margin-bottom: 15px;
    margin-left: 5%;
}

.container h3,
h2 {
    color: var(--texto-branco);
    text-shadow: 2px 1px 4px grey;
}

.container small {

    color: var(--texto-branco);

}

.espacamento {
    padding: 0 2%;
}

.flex {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding: 0 1%;

    .teste {
        max-width: 420px;
    }

    .card {
        border-radius: 0.8rem;
        width: 100%;
        height: 100%;
        max-height: 29.15rem;

        .imagem {
            display: flex;
            justify-content: center;
        }

        img {
            width: 400px;
        }

        .card-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.5rem 1%;

            div {
                cursor: pointer;
            }

            i {
                font-size: 1.8rem;
            }

            .vermelho {
                color: red;
            }

            .icon i:nth-of-type(1) {
                margin-right: 1rem;
            }
        }
    }



    .componentes {
        width: 50%;
    }
}

@media screen and (max-width: 768px) {
    .container {
        padding: 0;
    }

    .flex {
        flex-direction: column;
        width: 100%;
        gap: 0;

        .card {
            width: 100%;
            height: 500px;
            margin-bottom: 6rem;

            img {
                width: 100%;
                height: 100%;
                border-radius: 0.8rem;
                object-fit: cover;
            }

        }

        .componentes {
            width: 100%;
        }
    }
}

@media screen and (max-width: 1024px) {
    .container {
        padding: 0;
    }

    .flex {
        flex-direction: column;
        width: 100%;
        gap: 0;

        .card {
            width: 100%;
            height: 500px;
            margin-bottom: 6rem;

            img {
                width: 100%;
                height: 100%;
                border-radius: 0.8rem;
                object-fit: cover;
            }

        }

        .componentes {
            width: 100%;
        }
    }
}
</style>