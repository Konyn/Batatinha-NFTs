<template>
    <section class="container">
        <span class="span">
            <i class='bx bxs-star'></i>
            Batatinha NFTs
            <i class='bx bxs-star'></i>
            Batatinha NFTs
            <i class='bx bxs-star'></i>
        </span>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'Looping',
})
</script>

<style lang="scss" scoped>
section {
    color: #fff;
    width: 100%;
    height: 184px;
    background-image: linear-gradient(to left, #8D1CFE, #0038ED);
    transform: rotate(-5deg);
    margin: 100px 0;
    overflow: hidden;
    border-radius: 1rem;
    margin: 150px auto;

    span {
        position: absolute;
        animation: loop 5s infinite ease-in-out;
        font-size: 4rem;
        font-weight: 800;
        width: calc(100% * 2);
        height: 100%;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
    }

}

@keyframes loop {
    0% {
        transform: translateX(-100%);
    }


    50% {
        transform: translateX(0%);
        animation-delay: 10s;
    }

    100% {
        transform: translateX(100%);
    }

}
</style>