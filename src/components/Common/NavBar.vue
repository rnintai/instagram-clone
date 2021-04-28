<template>
  <nav class="NavBar">
    <div class="NavBar-wrap">
      <router-link to="/" class="logo">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="메인 로고"
          class="logo-image"
        />
      </router-link>
      <!--  -->
      <div class="search-wrap">
        <div class="search">
          <input type="text" class="search-input-box" />
          <span class="search-ico">
            <i class="fas fa-search"></i>
          </span>
          <button class="search-clear">
            <i class="fas fa-times-circle"></i>
          </button>
          <!-- search dropdown 창 -->
          <div class="wrapper-arrow"></div>
          <div class="search-dropdown-wrapper">
            <div class="search-dropdown-header">
              <span class="search-dropdown-title">최근 검색 항목</span>
              <button class="search-erase-btn">모두 지우기</button>
            </div>
            <ul class="search-dropdown-list">
              <li class="search-dropdown-item">
                <a href="#none" class="search-dropdown-link">
                  <search-profile></search-profile>
                </a>
              </li>
              <li class="search-dropdown-item">
                <a href="#none" class="search-dropdown-link"
                  ><search-profile></search-profile>
                </a>
              </li>
              <li class="search-dropdown-item">
                <a href="#none" class="search-dropdown-link"
                  ><search-profile></search-profile
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--  -->
      <ul class="menu">
        <li class="menu-icon-item">
          <router-link to="/" class="home-link">
            <i class="fas fa-home"></i>
          </router-link>
        </li>
        <li class="menu-icon-item">
          <router-link to="/direct" class="direct-link">
            <i class="far fa-envelope-open"></i>
          </router-link>
        </li>
        <li class="menu-icon-item">
          <a href="#none" class="browse-link">
            <i class="far fa-compass"></i>
          </a>
        </li>
        <li class="menu-icon-item">
          <a href="#none" class="liked-link">
            <i class="far fa-heart"></i>
          </a>
        </li>
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
import SearchProfile from '@/components/Common/SearchProfile.vue';

export default {
  name: 'NavBar',
  components: {
    SearchProfile,
  },
};
</script>

<style lang="scss" scoped>
.NavBar {
  background-color: #fff;
  border-bottom: 1px solid rgb(219, 219, 219);
  .NavBar-wrap {
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    margin: 0 auto;
    width: 60%;
    height: 54px;
    .logo {
      width: 103px;
      display: inline-block;
      margin-top: 7px;
    }
    .search-wrap {
      align-items: center;
      position: relative;
      width: 202px;
      height: 30px;
      left: 5%;
      .search {
        display: flex;
        justify-content: space-between;
        cursor: text;
        align-items: center;
        width: 200px;
        height: 28px;
        background-color: var(--bg-grey);
        border: 1px solid var(--border-grey);
        border-radius: 3px;
        color: #8e8e8e;
        .search-ico {
          // position: relative;
          position: absolute;
          left: 50%;
          top: 4px;
          transform: translateX(-50%);
          margin-left: 2px;
          // margin-bottom: 4px;
          .fas {
            font-size: 6px;
            color: #b9b9b9;
          }
        }
        .search-input-box {
          text-align: center;
          font-size: 12px;
          background-color: var(--bg-grey);
          &:focus {
            text-align: left;
            padding-left: 21px;
            ~ .search-ico {
              left: 5%;
            }
            ~ .search-clear {
              display: inline-block;
            }
            ~ .search-dropdown-wrapper {
              display: inline-block;
            }
            ~ .wrapper-arrow {
              display: inline-block;
            }
          }
          &:not(:focus) {
            color: white;
          }
        }

        .search-clear {
          display: none;
          background-color: var(--bg-grey);
          margin-right: 7px;
          .fas {
            font-size: 14px;
            color: #b9b9b9;
          }
        }
      }

      // dropdown arrow
      .wrapper-arrow {
        display: none;
        position: absolute;
        top: 36px;
        background-color: #fff;
        border-top: 1px solid var(--border-grey);
        border-left: 1px solid var(--border-grey);
        width: 10px;
        height: 10px;
        left: 45%;
        transform: translateX(-50%);
        transform: rotate(45deg);
        z-index: 1;
      }
      //
      .search-dropdown-wrapper {
        display: none;
        position: absolute;
        width: 375px;
        background-color: #fff;
        border: 1px solid var(--border-grey);
        border-radius: 10px;
        left: 45%;
        transform: translateX(-50%);
        top: 41px;
        padding: 10px 0px;
        .search-dropdown-header {
          display: flex;
          justify-content: space-between;
          margin: 3px 10px;
          .search-dropdown-title {
            color: #000;
            font-weight: 700;
            font-size: 15px;
          }
          .search-erase-btn {
            background-color: #fff;
            font-weight: 700;
            color: #0095f6;
          }
        }
        .search-dropdown-list {
          display: flex;
          flex-direction: column;
          margin-top: 15px;
          .search-dropdown-item {
            .search-dropdown-link {
              width: 100%;
              border-radius: 6px;
              &:hover {
                .SearchProfile {
                  background-color: var(--bg-grey);
                  .x-box {
                    .x-box-btn {
                      background-color: var(--border-grey);
                    }
                  }
                }
              }
            }
          }
        }
      }
      //

      .small-search-button {
        display: none;
      }
    }
    .menu {
      display: flex;
      align-items: center;
      padding-right: 20px;
      .menu-icon-item {
        position: relative;
        margin-left: 20px;
        width: auto;
        // color: #fff;
        .fas,
        .far {
          color: #8f8f8f;
        }
        .search-btn {
          display: none;
          background-color: #fff;
          cursor: pointer;
          &:focus {
            ~ .wrapper-arrow {
              display: inline-block;
            }
            ~ .search-dropdown-wrapper {
              display: inline-block;
            }
          }
        }
        .router-link-exact-active {
          .fas,
          .far {
            color: #000;
          }
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
@media screen and (max-width: 950px) {
  .NavBar {
    height: 92px;
    .NavBar-wrap {
      .search-wrap {
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
      }
      .wrapper-arrow {
        left: 50%;
        transform: translateX(-50%);
      }
      .search-dropdown-wrapper {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
