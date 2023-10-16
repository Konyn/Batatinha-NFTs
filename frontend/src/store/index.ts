import type Explore from "@/interfaces/Explore";
import http from "@/web";
import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      first_name: "Jon",
      last_name: "Snow",
      email: "jon@snow.com",
    },

    products: [] as Explore[],
    cart: [],
  },
  mutations: {
    banco(state: any, data: Explore) {
      state.cart = data;
    },
    storeUser(state: any, data: any) {
      state.user = data;
    },
    addProduct(state: any, data: any) {
      state.cart.push(data);
    },
    removeProduct(state: any, id: any) {
      const idx = state.cart.findIndex((o: any) => o.id === id);
      state.cart.splice(idx, 1);
    },
  },
  actions: {
    meuCarrinho({ commit }, data) {
      commit("addProduct", data);
    },
    removeItemCart({ commit }, item) {
      commit("removeProduct", item);
    },
    storeUser({ commit }, data: any) {
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          commit("storeUser", data);
          resolve();
        }, 3000);
      });
    },
  },
  getters: {
    total(state) {
      // dependencia
      // retornar um valor
      return state.cart.reduce((total, item) => (total += item.valor), 0);
    },
  },
});
