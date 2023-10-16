<template>
  <section class="container busca">
    <div class="title">
      <h2>Navegar no mercado</h2>
      <p>Navegue por mais de 50 mil NFTs no NFT Marketplace..</p>
    </div>
    <div class="pesquisa">
      <input
        type="text"
        placeholder="Buscar seus NFTs favoritos"
        v-model="busca"
      />
      <label for="">
        <i class="bx bx-search"></i>
      </label>
    </div>
  </section>
  <section class="cards">
    <div class="container">
      <div class="card-box">
        <div
          class="card"
          v-for="(artista, index) in listaNFT.slice(0, cardsExibidos)"
          :key="index"
        >
          <img :src="artista.image" alt="nft" />
          <p>{{ artista.criador }}</p>
          <h2>{{ artista.nome }}</h2>
          <div class="flex">
            <div class="flex-1">
              <span class="span">
                <img
                  class="eth__icone"
                  src="../assets/icon/ETH1.png"
                  alt="coin"
                />
                <p>{{ artista.valor }} ETH</p>
              </span>
            </div>
          </div>
          <div class="btn-group">
            <button class="btn btn-primary" type="submit">Comprar</button>
            <button
              class="btn btn-outline-primary"
              @click="itemsCarrinho(artista)"
              type="submit"
            >
              <i class="bi bi-cart3"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="ver-mais">
        <button
          class="btn btn-primary"
          @click="carregarMaisCards"
          v-if="exibirCards"
        >
          Carregar mais
        </button>
      </div>
    </div>
  </section>
  <section class="scroll">
    <div class="pop" @click="scrollTop">
      <i class="bx bx-up-arrow-alt"></i>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//import axios from "axios";
import type Explore from "../interfaces/Banco.js";
import http from "@/web";

export default defineComponent({
  data() {
    return {
      artistas: [] as Explore[],
      busca: "",
      cardsExibidos: 8,
      exibirCards: true,
    };
  },
  methods: {
    itemsCarrinho(item) {
      this.$store.dispatch("meuCarrinho", item);
    },
    async carregarDados() {
      try {
        const endpoints = [
          "bloxies",
          "dreamfriends",
          "lucids",
          "toxicskull",
          "deltanauts",
          "acidcat",
          "criminaldonkeys",
          "angrysociety",
        ];
        const requests = endpoints.map((endpoint) => http.get(`/${endpoint}`));
        const responses = await Promise.all(requests);
        this.artistas = responses.flatMap((response) => response.data);
      } catch (error) {
        console.error("Error loading data: ", error);
      }
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    carregarMaisCards() {
      if (this.cardsExibidos === this.artistas.length) {
        this.exibirCards = false;
      } else {
        this.cardsExibidos += 8;
      }
    },
  },
  computed: {
    listaNFT() {
      if (this.busca.trim().length > 0) {
        return this.artistas.filter(
          (item) =>
            item.criador
              .toLowerCase()
              .includes(this.busca.trim().toLowerCase()) ||
            item.nome.toLowerCase().includes(this.busca.trim().toLowerCase())
        );
      } else {
        return this.artistas;
      }
    },
  },
  created() {
    this.carregarDados();
  },
});
</script>

<style scoped lang="scss">
.busca {
  padding: 0 1.4rem;
  color: var(--texto-branco);

  .title {
    text-shadow: 3px 2px 5px #ddd;
  }

  .pesquisa {
    display: flex;
    align-items: center;
    position: relative;
  }

  .pesquisa input {
    height: 2.5rem;
    width: 100%;
    box-shadow: 0 0 2px 2px #523bff;
    border: 1px solid #ddd;
    border-radius: 0.4rem;
    padding-left: 0.8rem;
    font-size: 1.1rem;
    outline: none;
  }

  .pesquisa input:focus {
    box-shadow: 0 0 21px 1px #523bff;
  }

  .pesquisa label {
    position: absolute;
    right: 1rem;
    z-index: 10;

    i {
      padding-top: 0.5rem;
      font-size: 1.6rem;
      color: var(--texto-preto);
    }
  }
}

.cards {
  margin: 0 auto;
  padding: 0.5rem;

  .card-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px 30px;
  }

  .card {
    border-radius: 1rem;
    padding: 1rem;
    width: 280px;
    margin: 0 auto;
    h2 {
      margin: 0.3rem 0;
      font-size: 1.2rem;
      font-weight: bold;
    }

    img {
      width: 100%;
      height: 250px;
      border-radius: 1rem;
      object-fit: cover;
      margin-bottom: 0.5rem;
    }

    .btn-group {
      button:nth-last-of-type(2) {
        width: 100%;
      }
      button:nth-last-of-type(1):hover {
        border-left-color: #fff;
      }
      button {
        box-shadow: none;
      }
    }
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 1rem 0;

    a {
      font-size: 0.9rem;
      font-weight: 700;
      color: #1c51fe;
    }
  }

  .flex-1 {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .span {
      display: flex;
      background-color: #bda7ff70;
      height: 2rem;
      border-radius: 1.2rem;
      padding: 0 0.8rem;
      color: #1c51fe;
      font-weight: 700;
      font-size: 0.8rem;

      img {
        margin-top: 4px;
        width: 22px;
        height: 22px;
      }

      p {
        margin-top: 2px;
        margin-left: 0.4rem;
        color: #1c51fe;
        font-size: 1.2rem;
        font-weight: 500;
      }
    }

    p {
      margin-left: 0.4rem;
      color: #000;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
}

.ver-mais {
  margin-top: 5rem;
  text-align: center;
}

.scroll {
  position: relative;

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
}

@media screen and (min-width: 1024px) {
  .busca {
    padding: 0 1.4rem;
    color: var(--texto-branco);
    display: flex;

    .title {
      width: 50%;
    }

    .pesquisa {
      display: flex;
      align-items: center;
      position: relative;
      width: 50%;
    }

    .pesquisa input {
      height: 2.8rem;
      width: 100%;
      border-radius: 0.4rem;
      padding-left: 0.8rem;
      font-size: 1.1rem;
    }

    .pesquisa label {
      position: absolute;
      right: 1rem;
      z-index: 10;

      i {
        padding-top: 0.5rem;
        font-size: 1.6rem;
        color: var(--texto-preto);
      }
    }
  }
}
</style>
