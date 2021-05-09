import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router/index.js";
import login from "./modules/auth/login.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      email: null,
      name: null,
      post: null,
    },
    loggedIn: false,
    loginError: false,
    loading: true,
  },
  mutations: {
    loginSuccess(state, payload) {
      state.loggedIn = true;
      state.loginError = false;
      state.userInfo = payload;
    },
    loginFail(state) {
      state.loggedIn = false;
      state.loginError = true;
    },
    logOut(state) {
      state.loggedIn = false;
      state.loginError = false;
      state.userInfo = null;
      localStorage.removeItem("access_token");
    },
  },
  actions: {
    async verifyUser({ state, commit }) {
      const token = localStorage.getItem("access_token");
      await axios
        .get("http://localhost:3000/auth/checktoken", {
          headers: {
            authorization: `${token}`,
          },
        })
        .then((res) => {
          commit("loginSuccess", res.data.userInfo);
          router.replace("/");
          state.loading = false;
        })
        .catch((err) => {
          console.log(err);
          state.loading = false;
        });
    },
  },
  modules: { login },
});
