<template>
  <div id="app">
    <!-- 비 로그인 -->
    <div class="not-logged-in" v-if="!loggedIn">
      <router-view />
    </div>
    <!-- 로그인 시 -->
    <div class="logged-in" v-else>
      <nav-bar></nav-bar>
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Common/NavBar.vue";
import { mapState } from "vuex";

export default {
  components: { NavBar },
  computed: {
    ...mapState(["loggedIn"]),
  },
  name: "App",
};
</script>

<style lang="scss">
@import "assets/css/reset.css";
@import "assets/css/main.scss";
</style>
