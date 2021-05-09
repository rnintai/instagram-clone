<template>
  <main class="home">
    <div class="not-logged-in" v-if="!loggedIn">
      <sign-in></sign-in>
    </div>
    <div class="logged-in" v-else>
      <home-feed></home-feed>
      <user-recommend></user-recommend>
    </div>
  </main>
</template>

<script>
import HomeFeed from "@/components/Home/HomeFeed.vue";
import UserRecommend from "@/components/Home/UserRecommend.vue";
import { mapState } from "vuex";
import SignIn from "../components/Home/SignIn.vue";

export default {
  name: "Home",
  computed: {
    ...mapState(["loggedIn"]),
  },
  components: { HomeFeed, UserRecommend, SignIn },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  home-feed {
  }
  user-recommend {
  }
}
</style>
