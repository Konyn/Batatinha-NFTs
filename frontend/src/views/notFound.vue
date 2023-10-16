<template>
    <div>
      <h2>Pagina não encontrada</h2>  
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'notFound',
    data() {
        return {};
    },

});
</script>

<style lang="scss" scoped>
div{
    position: relative;
    height: calc(100vh - 28.75rem);

    h2{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        margin: auto;
        text-align: center;
        color: var(--texto-branco);
    }
}

</style>