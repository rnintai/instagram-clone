<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/Common/NavBar.vue';
export default {
  components: { NavBar },
  name: 'App',
};
</script>

<style lang="scss">
@import 'assets/css/reset.css';
@import 'assets/css/main.scss';
</style>
