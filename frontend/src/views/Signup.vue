<template>
  <section class="card">
    <form action=" " >
      <div class="">
        <div class="left d-flex gap-3">
          <div>
            <label>Nome Comepleto:</label>
            <input required  type="text" placeholder="Nome completo" />
            <label>CPF:</label>
            <input required type="number" placeholder="___-___-___-__" />
          </div>

          <div>
            <label>Data de nascimento:</label>
            <input required type="date" />
            <label>Celular:</label>
            <input required type="tel" placeholder="(00) 0000-0000" />
          </div>

        </div>

        <div class="right">
          <div class="d-block">
            <label>Email:</label>
            <input required type="email" placeholder="E-mail" />
          </div>
          <div class="d-flex justify-content-between gap-3">
            <div>
              <label>Senha:</label>
              <input required type="password" placeholder="Senha" />
            </div>
            <div>
              <label>Confirmação de senha:</label>
              <input required type="password" placeholder="Confirmação de senha" />
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex">
        <input type="checkbox">
        <label>Quero receber ofertas e novidades por e-mail, SMS ou WhatsApp!</label>
      </div>

      <div class="d-flex">
        <input type="checkbox" required >
        <label>Li e estou de acordo com as <a href=""> políticas da empresa e políticas de privacidade.* </a></label>
      </div>

      <button class="btn btn-primary mt-3">Entrar</button>
    </form>
    <div class="clear"></div>
  </section>
  <section class="d-flex justify-content-center">
    <span style="color: #fff">Já possui cadastro ? <a href="/login">ENTRAR</a></span>
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
  width: 45rem;
  margin: 187px auto;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 25px 1px #523bff;
  background-color: #523bff2f;
  border: none;

  .left{
    div {
      width: 100%;
    }
  }
  .right{
    width: 100%;
    label{
      width: 15rem;
    }
    input{
      width: 100%;
    }
  }
  label {
    margin-bottom: 0.5rem;
    padding: 0 0.1rem;
    color: #fff;
    line-height: 1.3rem;
  }
  input {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
    border-radius: 0.3rem;
    border: 1px solid #c4c4c4;
    height: 2.5rem;
    outline: none;
  }
  input:focus {
    box-shadow: 0 0 21px 1px #523bff;
    outline: 1px solid #523bff;
  }

  input[type="checkbox"]{
    height: 1.2rem;
    width: 1.2rem;
    margin-right: 0.5rem;
  }
  input[type="checkbox"]:focus {
    box-shadow: none;
    outline: none;
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
