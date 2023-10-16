<template>
    <section>
        <div class="visualizacao">
            <i class="bi bi-eye"></i>
            <p>1,3 mil visualizações</p>
        </div>
        <div class="favoritos">
            <i @click="favoritos" :style="!favorito ? '' : 'display: none'" class='bx bx-heart'></i>
            <i @click="favoritos" :style="favorito ? '' : 'display: none'" class='bx bxs-heart vermelho'></i>
            <P>22 favoritos</P>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: '',
    data() {
        return {
            favorito: false
        };
    },
    methods: {
        favoritos() {
            return this.favorito = !this.favorito;
        }
    }
});
</script>

<style lang="scss" scoped>
section {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 2rem 0;
    color: var(--texto-branco);

    .visualizacao,
    .favoritos {
        display: flex;
        justify-content: center;
    }

    .favoritos {
        .vermelho {
            color: red;
        }

        i {
            cursor: pointer;
            padding-top: 6px;
        }
    }

    p {
        font-size: 1.5rem;
    }

    i {
        margin: 0 1rem;
        font-size: 1.5rem;
    }
}
</style>