<template>
  <header :class="{ fixo: menu }">
    <nav class="container">
      <router-link class="home" to="/">
        <img src="../../assets/icon/g.svg" alt="" />
      </router-link>

      <div class="menu-icon" @click="abrirMenu" v-if="!menu">
        <i class="bx bx-menu"></i>
      </div>
      <div class="fechar" @click="fecharMenu" v-if="menu">X</div>
      <div class="menu" :class="{ active: menu }">
        <div></div>
        <div class="link">
          <router-link class="router" @click="fecharMenu" to="/">
            Marketplace
            <span class="span"></span>
          </router-link>
          <router-link class="router" @click="fecharMenu" to="/about">
            Explore
            <span class="span"></span>
          </router-link>
          <router-link class="router" @click="fecharMenu" to="/artistas">
            Artistas
            <span class="span"></span>
          </router-link>
          <router-link class="router" @click="fecharMenu" to="/colecoes">
            Coleções
            <span class="span"></span>
          </router-link>
        </div>
        <div class="flex">
          <input type="text" placeholder="Buscar ..." />
          <router-link to="/minha-conta">
            <button class="button">
              <i class="bx bx-user"></i>
            </button>
            <Modal @click="modal = true" />
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "../modal/Modal.vue";

export default defineComponent({
  components: { Modal },
  data() {
    return {
      menu: false,
      modal: false,
    };
  },
  methods: {
    abrirMenu() {
      this.menu = true;
    },
    fecharMenu() {
      this.menu = false;
    },
  },
});
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  margin-bottom: 3rem;
}

header.fixo {
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: #110929;
}

nav {
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;

  .home {
    img {
      width: 200px;
      height: 80px;
    }

    z-index: 1212;
  }

  a {
    color: #fff;
  }

  .menu-icon {
    font-size: 2.2rem;
  }

  .menu {
    display: none;
    position: relative;
    width: 100%;
    background-color: #110929;
  }

  .menu.active {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 75px;
    right: 0;
    z-index: 999;
    padding: 1rem;

    a {
      display: block;
      font-size: 1.3rem;
      padding: 0.3rem;
      font-weight: 700;
    }

    a:nth-last-of-type(1) {
      margin-bottom: 5px;
    }

    .router:hover {
      font-weight: 700;
      background: linear-gradient(to right, #523bff, #ff00f6 30%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .fechar {
    background-color: #0000003a;
    position: fixed;
    width: 100%;
    height: calc(100% - 75px);
    bottom: 0;
    z-index: 3;
  }

  .flex {
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
      height: 2rem;
      box-shadow: 0 0 2px 2px #523bff;
      border: 1px solid #ddd;
      border-radius: 1.2rem;
      padding-left: 0.8rem;
      font-size: 1.2rem;
      outline: none;
    }

    input:focus {
      box-shadow: 0 0 21px 1px #523bff;
    }

    .botao-carrinho {
      background: none;
      border: none;

      i {
        font-size: 1.7rem;
        color: #fff;
        font-weight: 500;
      }
    }

    .botao-carrinho:hover {
      background: linear-gradient(to right, #523bff 10%, #ff00f6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      scale: 1.2;
    }

    .button {
      background: none;
      border-radius: 50%;
      height: 3rem;
      width: 3rem;
      line-height: 3.5rem;
      background: linear-gradient(to right, #523bff, #ff00f6);
      border: none;
    }

    .button i {
      font-size: 1.7rem;
      color: #fff;
    }
  }
}

nav a.activeBar {
  transition: 0.5s;
  padding-bottom: 0.5rem;

  .span {
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 1.3rem;
    background: linear-gradient(to right, #523bff 10%, #ff00f6 100%);
    width: 100%;
    height: 4px;
    animation: loop 0s infinite;
  }
}

@media screen and (min-width: 940px) {
  nav > h2 {
    display: none;
  }

  .menu-icon,
  .fechar {
    display: none;
  }

  nav {
    .menu {
      position: static;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      position: none;
      z-index: 999;
      padding: 1rem;
      background-color: transparent;

      .link {
        display: flex;
      }

      .router {
        position: relative;
      }

      a {
        font-size: 1.3rem;
        margin: 0 1.3rem;
        font-weight: 700;
      }

      .router:hover {
        font-weight: 700;
        background: linear-gradient(to right, #523bff 10%, #ff00f6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .flex {
      display: flex;
      flex-direction: row;
      align-items: center;

      input {
        margin-right: 2rem;
      }

      button {
        margin-top: 0.4rem;
      }
    }
  }

  @keyframes loop {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(100%);
    }
  }
}
</style>

<!-- #523BFF -->
<!--#FF00F6-->
