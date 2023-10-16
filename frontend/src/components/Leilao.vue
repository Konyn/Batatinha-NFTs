<template>
  <article class="container">
    <!-- Relativa-->
    <div class="anuncio">
      <!-- Relativa-->
      <img src="../assets/NFTs/macacos/leilao.svg" alt="Leilao" />
      <div class="timer">
        <!-- Absoluta-->
        <div class="cronometro">
          <div>
            <small class="texto">O LEILÃO COMEÇA EM:</small>
            <div class="flex">
              <span>
                <p>{{ hours % 24 }}</p>
                <small>Horas</small>
              </span>
              <span class="ponto">:</span>
              <span>
                <p>{{ minutes % 60 }}</p>
                <small>Minutos</small>
              </span>
              <span class="ponto">:</span>
              <span>
                <p>{{ seconds % 60 }}</p>
                <small>Segundos</small>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="titulo">
        <h3>PREPARE-SE PARA O LEILÃO DA NOVA COLEÇÃO</h3>
        <h1>PRIME MONKEYS</h1>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "Leilao",
  setup() {
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const lunchDate = new Date("30 september 2023");

    setInterval(() => {
      const currentDate = new Date();
      const lunchTime = lunchDate - currentDate;

      seconds.value = parseInt((lunchTime / 1000) % 60);
      minutes.value = parseInt((lunchTime / 1000 / 60) % 60);
      hours.value = parseInt((lunchTime / 1000 / 60 / 60) % 24);
    }, 1000);

    return { hours, minutes, seconds };
  },
});
</script>

<style lang="scss" scoped>
article {
  margin: 120px auto;

  div {
    width: 100%;

    img {
      width: 100%;
    }
  }
}

.anuncio {
  position: relative;
}

.cronometro {
  position: absolute;
  right: 5rem;
  bottom: 3.5rem;
}

.cronometro {
  width: 295px;
  background-color: #3b3b3b86;
  color: #fff;
  border-radius: 20px;
  padding: 1rem 0;
}

.texto {
  margin-left: 50px;
}

.titulo {
  position: absolute;
  left: 4rem;
  bottom: 3rem;
  color: var(--texto-branco);
  text-shadow: 3px 2px 5px grey;

  h1 {
    font-weight: 900;
    font-size: 50px;
    margin-top: 30px;
  }
}

.flex {
  display: flex;
  justify-content: center;
  width: 100%;

  p {
    font-size: 2.2rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
}

.ponto {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0.5rem;
}
</style>
