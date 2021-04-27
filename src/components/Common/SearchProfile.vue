<template>
  <div class="SearchProfile">
    <div class="profile-image-wrap">
      <img
        src="https://user-images.githubusercontent.com/65759076/116090636-0c58dc00-a6df-11eb-8bd0-e74842edadd6.png"
        alt="프로필 이미지"
        class="profile-image"
      />
    </div>
    <ul class="id-and-name">
      <li class="id">rnintai</li>
      <li class="name">김민태</li>
    </ul>
    <div class="x-box">
      <button class="x-box-btn">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchProfile',
};
</script>

<style lang="scss" scoped>
* {
  font-size: 15px;
}
.SearchProfile {
  background-color: transparent;
  // display: inline-block;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  .profile-image-wrap {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    overflow: hidden;
    .profile-image {
      width: 100%;
    }
  }
  .id-and-name {
    position: relative;
    height: 100%;
    left: -32%;
    .id {
      font-size: 14px;
      font-weight: 700;
    }
    .name {
      color: var(--font-grey);
    }
  }
  .x-box {
    .x-box-btn {
      background-color: #fff;
      .fas {
        color: var(--font-grey);
        font-size: 15px;
      }
    }
  }
}
</style>
