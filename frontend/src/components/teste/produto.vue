<template>
    <section>
        <p>
          {{ product.name }} - {{ product.price }}  
        </p>
        <div>
            <button @click="addProduct()" class="btn btn-primary">Adicionar</button>
            <button @click="removeProduct()" class="btn btn-danger">Remover</button>
        </div>
    </section>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: '',
    props:{
        product: Object
    },
    data() {
        return {};
    },
    methods:{
        addProduct(){
            this.$store.commit('addProduct', this.product)
        },
        removeProduct(){
            this.$store.commit('removeProduct', this.product.id)
        }
    },
    created(){
        
    }

});
</script>

<style lang="scss" scoped>
section{
    color: var(--texto-branco);
    p{
        margin: 1rem 0;
    }
}
</style>