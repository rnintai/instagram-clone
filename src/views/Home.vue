<template>
  <main class="home">
    <home-feed></home-feed>
    <user-recommend></user-recommend>
  </main>
</template>

<script>
import HomeFeed from '@/components/Home/HomeFeed.vue';
import UserRecommend from '@/components/Home/UserRecommend.vue';

export default {
  name: 'Home',
  components: { HomeFeed, UserRecommend },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  home-feed {
  }
  user-recommend {
  }
}
</style>
