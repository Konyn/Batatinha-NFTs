<template>
  <main>
    <!-- Video -->
    <section class="container box-video">
      <div class="video">
        <video autoplay loop muted preload="auto">
          <source src="https://res.cloudinary.com/do8znblao/video/upload/v1693015546/a2awb4zpyufyjhmon5tx.mp4"
            type="video/mp4">
        </video>
      </div>
      <span class="line"></span>
      <div class="estatisticas">

        <div class="flex">
          <div class="reparticao">
            <h2>50k</h2>
            <p>Usuários <br> ativos</p>
          </div>

          <span class="line-h remove"></span>

          <div class="reparticao espacamento">
            <h2>43k</h2>
            <p>Artes
              <br>
              disponíveis
            </p>
          </div>


          <span class="line-h"></span>


          <div class="reparticao espacamento">
            <h2>38k</h2>
            <p>Artistas
              <br>
              cadastrados
            </p>
          </div>

          <span class="line-h remove"></span>

          <div class="reparticao espacamento">
            <h2>34k</h2>
            <p>Produtos
              <br>
              online
            </p>
          </div>
        </div>

      </div>
      <span class="line"></span>
    </section>
    <!-- Tendencias -->
    <section>
      <Tendencias />
      <Categorias />
      <Leilao />
    </section>
    <section class="scroll">
    <div class="pop" @click="scrollTop">
      <i class='bx bx-up-arrow-alt'></i>
    </div>
  </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tendencias from '../components/Tendencias.vue';
import Categorias from '../components/Categorias.vue';
import Leilao from '../components/Leilao.vue';

export default defineComponent({
  name: 'Home',
  components: { Tendencias, Categorias, Leilao },
  methods:{
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
  }
})
</script>

<style lang="scss" scoped>
.box-video {
  video {
    width: 100%;
    margin-bottom: 2.1rem;

    source {
      width: 100%;
      height: 720px;
    }
  }

  .line {
    display: block;
    border-radius: 1.3rem;
    background: linear-gradient(to right, #FF01F7 50%, #762FFE 68%);
    width: 100%;
    height: 4px;
    margin-bottom: 2rem;
  }

  .line-h {
    display: block;
    border-radius: 1.3rem;
    background: linear-gradient(#ff00f7b4, #772ffe);
    width: 4px;
    height: 66px;
    margin: 0 0.5rem;
  }

  .line:nth-last-of-type(1) {
    margin-top: 1.5rem;
  }

  .flex {
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    span {
      margin: 0 2rem;
    }
  }

  .estatisticas {
    display: flex;

    flex-wrap: wrap;
    color: #fff;

    .reparticao {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      h2 {
        font-size: 3rem;
        font-weight: 700;
        letter-spacing: 3px;
      }

      p {
        font-size: 1.3rem;
        font-weight: 500;
        margin-left: 1.2rem;
        width: 118px;
        letter-spacing: 1px;
      }
    }
  }
  
}

.pop {
    position: fixed;
    bottom: 1rem;
    right: 1.3rem;
    z-index: 2;
    height: 2.5rem;
    width: 2.5rem;
    line-height: 3.2rem;
    border: 1px solid #1c51fe;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;

    i {
      color: var(--texto-branco);
      font-size: 1.8rem;
    }
  }

@media screen and (max-width: 1088px) {

  .flex {
    display: flex;
    justify-content: space-around;
  }

  .estatisticas {
    flex-direction: column;


    .line-h {
      display: block;
      border-radius: 1.3rem;
      background: linear-gradient(to left, #ff00f7b4, #772ffe);
      width: 100%;
      height: 1px;
      margin: 1rem 0;
    }

    .remove {
      display: none;
    }
  }
}

@media screen and (max-width: 500px) {
  .box-video {
    .flex {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;

      .reparticao {
        margin-bottom: 1rem;
        line-height: 1.5rem;
        text-align: center;

      }

      .espacamento {
        margin: 1.5rem 0;
      }

    }

    .estatisticas {
      flex-direction: column;

      .line-h {
        margin: 0.2rem 0;
      }

      .remove {
        display: block;
      }
    }

    .line:nth-last-of-type(1) {
      margin-top: 0rem;
    }
  }

}
</style>

<!-- #FF00F780
#762FFEAD -->