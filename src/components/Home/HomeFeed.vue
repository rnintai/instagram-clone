<template>
  <div class="HomeFeed">
    <!-- 스토리 -->
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
    <!-- 피드 -->
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
          <div class="profile-menu">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
      </div>
      <div class="feed-post">
        <img
          src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/179266153_1636424216560185_7129523436989794758_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=JpX-UHHigkEAX86Ko-N&edm=AIQHJ4wBAAAA&ccb=7-4&oh=a4cd213df8a1a192b2fe359bff318f71&oe=60AEC66E&_nc_sid=7b02f1"
          alt="포스트"
        />
      </div>
      <div class="feed-description"></div>
    </main>
  </div>
</template>

<script>
export default {
  name: "HomeFeed",
};
</script>

<style lang="scss" scoped>
.HomeFeed {
  width: 400px;
  // height: 400px;
  .story-slider {
    background-color: #fff;
    border: 1px solid var(--border-grey);
    margin-bottom: 20px;
    .story-list {
      display: flex;
      justify-content: space-between;
    }
  }
  .feed-wrap {
    background-color: #fff;
    border: 1px solid var(--border-grey);
    .profile {
      display: flex;
      align-items: center;
      padding: 5px;
      .profile-info {
        display: flex;
        align-items: center;
        // justify-content: space-between;
        width: 100%;
        .profile-image-wrap {
          flex-basis: auto;
          margin-right: 10px;
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
          flex-basis: 85%;
        }
        .profile-menu {
          flex-basis: 5%;
          .fas {
            font-size: 0.7em;
            color: #8f8f8f;
          }
        }
      }
    }
  }
}
</style>
