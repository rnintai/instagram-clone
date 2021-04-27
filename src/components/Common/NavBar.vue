<template>
  <nav class="NavBar">
    <div class="NavBar-wrap">
      <a class="logo">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="메인 로고"
          class="logo-image"
        />
      </a>
      <!--  -->
      <div class="search">
        <!-- 1000px 이상일 때 -->
        <input type="text" class="search-input-box" placeholder="검색" />
        <span class="search-ico">
          <i class="fas fa-search"></i>
        </span>
        <button class="search-clear">
          <i class="fas fa-times-circle"></i>
        </button>
      </div>
      <!--  -->
      <ul class="menu">
        <li class="menu-icon-item">
          <!-- 1000px 이하일 때 -->
          <button class="search-btn">
            <i class="fas fa-search"></i>
          </button>
        </li>
        <li class="menu-icon-item">
          <a href="#none" class="home-link">
            <img
              src="https://user-images.githubusercontent.com/65759076/116198727-4a064500-a771-11eb-9b92-0ec5f9b76cad.png"
              alt="홈버튼"
              class="home-link-img"
            />
          </a>
        </li>
        <li class="menu-icon-item">
          <a href="#none" class="direct-link">
            <i class="far fa-envelope-open"></i>
          </a>
        </li>
        <li class="menu-icon-item">
          <a href="#none" class="browse-link">
            <i class="far fa-compass"></i>
          </a>
        </li>
        <li class="menu-icon-item"></li>
        <a href="#none" class="liked-link">
          <i class="far fa-heart"></i>
        </a>
        <li class="menu-icon-item">
          <a href="#none" class="profile">
            <div class="profile-wrap">
              <img
                src="https://user-images.githubusercontent.com/65759076/116090636-0c58dc00-a6df-11eb-8bd0-e74842edadd6.png"
                alt="프로필"
                class="profile-img"
              />
            </div>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style lang="scss" scoped>
.NavBar {
  background-color: #fff;
  border-bottom: 1px solid rgb(219, 219, 219);
  .NavBar-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 60%;
    height: 54px;
    .logo {
      width: 103px;
      display: inline-block;
      margin-top: 7px;
    }
    .search {
      display: flex;
      justify-content: center;
      cursor: text;
      align-items: center;
      position: absolute;
      left: 50%;
      width: 200px;
      height: 28px;
      transform: translateX(-50%);
      background-color: var(--bg-grey);
      border: 1px solid var(--border-grey);
      border-radius: 3px;
      color: #8e8e8e;
      .search-input-box {
        padding: auto;
        text-align: center;
        font-size: 12px;
        background-color: var(--bg-grey);
        &:focus {
          text-align: left;
          + .search-ico {
            left: 5%;
          }
          ~ .search-clear {
            display: inline-block;
          }
        }
      }
      .search-ico {
        position: absolute;
        left: 40%;
        transform: translateX(-50%);
        margin-bottom: 4px;
        .fas {
          font-size: 6px;
          color: #b9b9b9;
        }
      }
      .search-clear {
        position: absolute;
        right: 5%;
        display: none;
        .fas {
          font-size: 14px;
          color: #b9b9b9;
        }
      }
      .small-search-button {
        display: none;
      }
    }
    .menu {
      display: flex;
      align-items: center;
      padding-right: 20px;
      .menu-icon-item {
        margin-left: 20px;
        width: auto;
        .search-btn {
          display: none;
          background-color: #fff;
          cursor: pointer;
        }
        .home-link {
          position: relative;
          top: 2px;
        }
      }
      .profile {
        display: inline-block;
        width: 25px;
        height: 25px;
        .profile-wrap {
          display: inline-block;
          border-radius: 50%;
          width: 100%;
          height: 100%;
          overflow: hidden;
          .profile-img {
            width: 100%;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .NavBar {
    .NavBar-wrap {
      .search {
        display: none;
      }
      .menu {
        .menu-icon-item {
          .search-btn {
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>
