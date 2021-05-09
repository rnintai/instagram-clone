import axios from "axios";
import router from "@/router/index.js";

const actions = {
  async onLogin({ commit, dispatch }, loginObj) {
    await axios
      .post("http://localhost:3000/auth/login", {
        name: loginObj.name,
        password: loginObj.password,
      })
      .then((res) => {
        let token = res.data.token;
        localStorage.setItem("access_token", token);
        dispatch("verifyUser", null, { root: true });
        router.push("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
        commit("loginFail", null, { root: true });
      });
  },
};

export default {
  namespaced: true,
  actions,
};
