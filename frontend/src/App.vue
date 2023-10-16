<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router'
import Header from "./components/template/Header.vue";
import Footer from './components/template/Footer.vue';

export default defineComponent({
  components: {
    Header,
    Footer
  }
})

</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
