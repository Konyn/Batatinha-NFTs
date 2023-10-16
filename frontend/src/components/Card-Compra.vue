<template>
    <div class="card">
        <div class="subtitulo">
            <i class="bi bi-clock"></i>
            <h4>A promoção termina em 9 de fevereiro de 2024 às 4h37 </h4>
        </div>

        <div class="line"></div>

        <div class="card-venda">
            <strong>Preço atual</strong>
            <div class="valor">
                <h2>0,3 ETH</h2>
                <p>BRL R$5000</p>
            </div>
        </div>

        <div class="card-compra">
            <div class="flex">
                <button class="btn btn-primary largura">
                    Comprar agora
                </button>
                <button class="btn btn-outline-primary">
                    <i class="bi bi-cart3"></i>
                </button>
            </div>
            <button class="btn btn-secondary">Faça Oferta</button>
        </div>
    </div>

    <div class="card">
        <div class="title">
            <i class="bi bi-justify-left"></i>
            <h2>Descrição</h2>
        </div>

        <div class="line"></div>

        <div class="descricao">
            <p>Por <Strong>Shot</Strong></p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, fuga.
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'CardCompra',
    data() {
        return {};
    },
});
</script>

<style lang="scss" scoped>
.card {
    border: 2px solid #ddd;
    padding: 1rem 0;

    .subtitulo {
        text-align: center;

        h4 {
            text-align: center;
            margin-bottom: 1rem;
            font-size: 1.4rem;
        }

        i {
            font-size: 1.8rem;
        }
    }

    .card-venda {
        padding: 0.6rem;
        width: 90%;
        margin: 0 auto;


        .valor {
            display: flex;
            align-items: first baseline;
            width: 100%;

            h2 {
                margin: 1rem 1rem 0 0;
                font-size: 2rem;
                font-weight: 700;
                letter-spacing: 1px;
            }

            p {}
        }
    }

    .card-compra {
        width: 90%;
        text-align: center;
        margin: 0 auto;

        .flex {
            display: flex;
            justify-content: space-evenly;
            margin-bottom: 0.5rem;

            .largura {
                width: 85%;
            }

            button:nth-of-type(2) {
                width: 15%;
                margin-left: 1rem;
            }

        }

        button:nth-of-type(1) {
            width: 100%;
        }
    }
}

.card:nth-of-type(2) {
    margin-top: 2rem;

    .title {
        display: flex;
        align-items: first baseline;
        margin-left: 1rem;

        i {
            font-size: 1.5rem;
            margin-right: 1rem;
        }
    }

    .line {
        border-bottom: 2px solid #ddd;
        margin: 0.5rem 0;
    }

    .descricao {
        width: 90%;
        margin: auto;
    }
}
</style>