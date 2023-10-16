<template>
  <main>
    <section class="card user">
      <span class="setting"><i class="bi bi-gear-fill"></i></span>
      <div class="clear"></div>
      <img
        src="https://static.kabum.com.br/conteudo/temas/001/imagens/k5/images/profile_ninja.png"
        alt="Usuario"
      />
      <h1>Bem-vindo, David Emanuel</h1>
      <span class="subtitle">
        <i class="bi bi-envelope-fill"></i>
        davidchagas00@gmail.com
      </span>
    </section>

    <section class="flex">
      <section class="menu">
        <div class="title">
          <i class="bx bx-cart"></i>
          <span>RESUMO DO SEU ÚLTIMO PEDIDO</span>
        </div>
        <section class="card pedido">
          <div class="order">
            <h1>NÚMERO DE PEIDO</h1>
            <p>#1123123123</p>
          </div>
          <div class="d-flex justify-content-between">
            <div class="status">
              <h1>STATUS</h1>
              <p>Concluido</p>
            </div>
            <div class="date-order">
              <h1>DATA</h1>
              <p>20/09/2023</p>
            </div>
            <div class="payment">
              <h1>PAGAMENTO</h1>
              <p>PIX</p>
            </div>
          </div>
          <span class="line"></span>

          <div class="address">
            <h1>ENDEREÇO</h1>
            <p>RUA BARÃO DO RIO BRANCO</p>
            <P>Número 991, CENTRO - Apartamento 1</P>
            <P>CEP 85010040 - Guarapuava, PR</P>
          </div>

          <div class="shipping-company">
            <h1>REDE SUL</h1>
            <p>Não disponível</p>
          </div>
          <span class="line"></span>

          <button class="btn btn-primary">VER TODOS OS PEDIDOS</button>
        </section>
      </section>

      <section class="atalhos">
        <div class="title left">
          <i class="bi bi-grid-fill"></i>
          <span>ATALHOS</span>
        </div>

        <div class="card height">
          <div class="d-flex gap-3 text-icons">
            <i class="bi bi-basket2-fill"></i>
            <span>MEUS PEDIDOS</span>
          </div>
        </div>

        <div class="card height">
          <div class="d-flex gap-3 text-icons">
            <i class="bx bxs-chat"></i>
            <span>PROTOCOLOS E ATENDIMENTO</span>
          </div>
        </div>

        <div class="card height">
          <div class="d-flex gap-3 text-icons">
            <i class="bx bxs-heart"></i>
            <span>FAVORITOS</span>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MinhaConta",
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
main {
  max-width: 1440px;
  padding: 0 5%;
  margin: auto;
}
.user {
  padding: 0 1rem 1rem 1rem;
  background-color: #523bff2f;
  .setting {
    position: relative;
    margin-bottom: 1.5rem;
    i {
      position: absolute;
      top: 5px;
      right: 0;
      font-size: 1.3rem;
    }
  }
  .clear {
    clear: both;
  }
  i {
    background: linear-gradient(to right, #523bff, #ff00f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  img {
    width: 56px;
    height: 56px;
    margin: 0.5rem auto;
  }
  h1 {
    text-align: center;
    font-size: 1.27rem;
    font-weight: 600;
    color: #fff;
  }
  .subtitle {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 500;
    color: #fff;
  }
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 20px;
  margin: 1rem 0;
  height: 2.5rem;
  i {
    font-size: 2rem;
    background: linear-gradient(to right, #523bff, #ff00f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  span {
    color: #fff;
    font-size: 1rem;
  }
}

.left {
  justify-content: flex-start;
}
.pedido {
  padding: 1rem;
  width: 100%;
  background-color: #523bff18;
  h1 {
    margin-bottom: 1rem;
    font-size: 0.875rem;
    font-weight: 700;
    color: #fff;
  }
  P {
    margin: 0;
    padding: 0;
    color: #fff;
  }

  .order {
    margin-bottom: 1rem;
  }
  .status p {
    color: green;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .payment {
    p {
      background: linear-gradient(to right, #523bff, #ff00f6 20%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
      letter-spacing: 1px;
    }
  }
  .shipping-company {
    h1 {
      margin-top: 1.2rem;
      margin-bottom: 0.5rem;
    }
    p {
      //   background: linear-gradient(to right, #523bff, #ff00f6 20%);
      //   -webkit-background-clip: text;
      //   -webkit-text-fill-color: transparent;
      color: #bd1414;
      font-weight: 700;
      letter-spacing: 1px;
    }
  }
  //
}

.height {
  position: relative;
  height: 5.375rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  background-color: #523bff18;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: inherit;
    filter: blur(5px);
  }

  .text-icons {
    position: relative;
    align-items: center;
    span {
      font-size: 0.875rem;
      font-weight: 700;
      color: #fff;
    }
    i {
      font-size: 1.5rem;
      background: linear-gradient(to right, #523bff, #ff00f6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}

.line {
  border: 1px solid #c4c4c457;
  margin: 1rem 0;
}

@media screen and (min-width: 1000px) {
  .flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .menu {
      max-width: 650px;
      width: 100%;
    }
    .atalhos {
      max-width: 500px;
      width: 100%;
    }
  }
}

@media screen and (max-width: 1235px) {
  .flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .menu {
      max-width: 600px;
      width: 100%;
    }
    .atalhos {
      max-width: 600px;
      width: 100%;
    }
  }
}
</style>
