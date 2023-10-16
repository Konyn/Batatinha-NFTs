<template>
    <section>
            <div>
        <Produto
        v-for="product in $store.state.products" :key="product.id"
        :product="product"
        />
    </div>
    <pre>
        {{ $store.state.cart.length }}
    </pre>
    <div>
        <p>
          {{ $store.state.user.first_name }} {{ $store.state.user.last_name }}  
        </p>
        <button @click="updateUser()">Atualizar perfil</button>
    </div>
    </section>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Produto from './produto.vue';

export default defineComponent({ 
    components: { Produto },
    methods:{
        updateUser(){
            const newUser = {
            first_name: 'Joao',
            last_name: 'M',
            email: 'joao@snow.com'
            }
            this.$store.dispatch('storeUser', newUser).then(() => {
                console.log('Terminou com sucesso!');
            });
        },
    }
    })
</script>

<style lang="scss" scoped>
section{
    color: #fff;
}
</style>