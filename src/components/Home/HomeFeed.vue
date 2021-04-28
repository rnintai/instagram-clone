<template>
  <div class="HomeFeed">
    <header class="story-slider">
      <ul class="story-list">
        <li class="story-item"><button class="profile"></button></li>
        <li class="story-item"><button class="profile"></button></li>
        <li class="story-item"><button class="profile"></button></li>
        <li class="story-item"><button class="profile"></button></li>
        <li class="story-item"><button class="profile"></button></li>
        <li class="story-item"><button class="profile"></button></li>
        <li class="story-item"><button class="profile"></button></li>
        <li class="story-item"><button class="profile"></button></li>
        <li class="story-item"><button class="profile"></button></li>
        <li class="story-item"><button class="profile"></button></li>
      </ul>
    </header>
    <main class="feed-wrap">
      <div class="profile">
        <div class="profile-info">
          <div class="profile-image-wrap">
            <img
              src="https://user-images.githubusercontent.com/65759076/116090636-0c58dc00-a6df-11eb-8bd0-e74842edadd6.png"
              alt="프로필 이미지"
              class="profile-image"
            />
          </div>
          <span class="profile-id">rnintai</span>
        </div>
        <div class="profile-menu">
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeFeed',
};
</script>

<style lang="scss" scoped>
.HomeFeed {
  width: 400px;
  // height: 400px;
  background-color: #fff;
  .story-slider {
    border: 1px solid #000;
  }
  .feed-wrap {
    border: 1px solid #000;
    .profile {
      display: flex;
      align-items: center;
      .profile-info {
        display: flex;
        align-items: center;
        .profile-image-wrap {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          overflow: hidden;
          .profile-image {
            width: 100%;
          }
        }
        .profile-id {
          font-weight: 700;
        }
      }
    }
  }
}
</style>
