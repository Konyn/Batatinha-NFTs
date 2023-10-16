import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "activeBar",

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/moeda",
      name: "moeda",
      component: () => import("../views/Moeda.vue"),
    },
    {
      path: "/carrinho",
      name: "carrinho",
      component: () => import("../components/Carrinho.vue"),
    },
    {
      path: "/artistas",
      name: "artistas",
      component: () => import("../views/Artistas.vue"),
    },
    {
      path: "/galeria/:key",
      name: "galeria",
      component: () => import("../views/Galeria.vue"),
    },
    {
      path: "/colecoes",
      name: "colecoes",
      component: () => import("../views/Colecoes.vue"),
    },
    {
      path: "/nft",
      name: "nft",
      component: () => import("../views/NFT.vue"),
    },
    {
      path: "/:patchMatch(.*)*",
      name: "notFound",
      component: () => import("../views/notFound.vue"),
    },
    {
      path: "/produto",
      name: "produto",
      component: () => import("../components/teste/produto.vue"),
    },
    {
      path: "/produtos",
      name: "produtos",
      component: () => import("../components/teste/produtos.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/cadastro",
      name: "cadastro",
      component: () => import("../views/Signup.vue"),
    },
    {
      path: "/minha-conta",
      name: "minhaconta",
      component: () => import("../views/admin/MinhaConta.vue"),
    },
  ],
});

export default router;
