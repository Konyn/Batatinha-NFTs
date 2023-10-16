<template>
  <section class="card">
    <form action="">
      <label for="">Usuario:</label>
      <input type="text" placeholder="Usuario" />
      <label for="">Senha:</label>
      <input type="password" placeholder="Senha" />
      <button class="btn btn-primary mt-3">Entrar</button>
    </form>
    <div class="clear"></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginView",
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.card {
  width: 25rem;
  margin: 187px auto;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 21px 1px #523bff;
  background-color: #523bff2f;
  border: none;
  label {
    display: block;
    margin-bottom: 0.2rem;
    padding: 0 0.1rem;
    color: #fff;
  }
  input {
    width: 100%;
    margin-bottom: 0.4rem;
    padding: 0 0.3rem;
    border-radius: 0.3rem;
    border: 1px solid #c4c4c4;
    height: 2rem;
    outline: none;
  }
  input:focus {
    box-shadow: 0 0 21px 1px #523bff;
    outline: 1px solid #523bff;
  }
  button {
    float: right;
    width: 100%;
    height: 2.2rem;
    letter-spacing: 1px;
    font-size: 1.1rem;
    line-height: 0;
    font-weight: 700;
    background: linear-gradient(to right, #523bff, #ff00f6);
    border: none;
  }
  button:hover {
    scale: 0.95;
  }
}
.clear {
  clear: both;
}
</style>
