<!-- <template>
    <div>
        <label for="crypto">Escolha uma criptomoeda:</label>
        <select v-model="selectedCrypto" @change="convertCryptoToBRL">
            <option v-for="crypto in cryptoOptions" :key="crypto.id" :value="crypto.id">
                {{ crypto.name }}
            </option>
        </select>

        <input v-model="cryptoAmount" type="number" min="0" step="0.01" placeholder="Quantidade de criptomoeda">

        <p v-if="convertedAmount">Valor em BRL: {{ convertedAmount }}</p>
    </div>
</template>
  
<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import type Moeda from '../interfaces/Moeda.js'

export default defineComponent({
    data() {
        return {
            selectedCrypto: '',
            cryptoAmount: '',
            convertedAmount: '',
            cryptoOptions: [] as Moeda[],
        };
    },
    mounted() {
        this.fetchCryptoList();
    },
    methods: {
        async fetchCryptoList() {
            try {
                const response = await axios.get(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
                );
                this.cryptoOptions = response.data;
            } catch (error) {
                console.error('Error fetching crypto list:', error);
            }
        },
        convertCryptoToBRL() {
            if (!this.selectedCrypto || !this.cryptoAmount) {
                this.convertedAmount = '';
                return;
            }

            axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${this.selectedCrypto}&vs_currencies=brl`)
                .then(response => {
                    const brlValue = response.data[this.selectedCrypto].brl;
                    this.convertedAmount = (brlValue * parseFloat(this.cryptoAmount)).toFixed(2);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    this.convertedAmount = 'Erro na conversão';
                });
        },
    },
});
</script> -->
  


<template>
    <div class="container card">
        <div class="card-info">

            <div>
                <i class='bx bxs-coin-stack'></i>
            </div>

            <div class="icon">
                <i class='bx bx-expand-alt'></i>
                <i class='bx bx-heart'></i>
                <i class='bx bxs-heart vermelho'></i>
            </div>
        </div>
        <img src="../assets/NFTs/macacos/macacosDrop4.svg" alt="NFT">
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped></style>