<template>
  <div class="wrapper">
    <div class="sign-in">
      <div class="logo">
        <img
          src="https://fontmeme.com/images/instagram-new-logo.png"
          alt="메인 로고"
          class="logo-image"
        />
      </div>
      <div class="body-wrapper">
        <input
          type="text"
          class="name"
          v-model="userInfo.name"
          placeholder="계정 이름"
        />
        <input
          type="password"
          class="pw"
          v-model="userInfo.password"
          placeholder="비밀번호"
        />
        <button class="signin-btn" @click="onLogin(userInfo)">로그인</button>
      </div>
    </div>
    <div class="sign-up">
      <span class="sign-up-text">계정이 없으신가요?</span>
      <router-link to="/signup" class="register">가입하기</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SignIn",
  data: () => ({
    userInfo: {
      name: null,
      password: null,
    },
  }),
  methods: {
    ...mapActions("login", ["onLogin"]),
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 350px;
  margin-top: 50px;
  .sign-in {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid rgb(184, 184, 184);
    border-radius: 5px;
    background-color: #fff;
    margin-bottom: 30px;
    .logo {
      width: 40%;

      img {
        width: 100%;
      }
    }
    .body-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 65%;
      height: 100%;
      .name,
      .pw {
        border: 1px solid rgb(184, 184, 184);
        border-radius: 2px;
        background-color: var(--bg-grey);
        padding: 5px;
        height: 23px;
      }
      .signin-btn {
        padding: 10px 0;
        color: #fff;
        background-color: rgb(45, 161, 255);
        cursor: pointer;
      }
    }
  }
  .sign-up {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0;
    font-size: 0.8em;

    border: 1px solid rgb(184, 184, 184);
    border-radius: 2px;
    background-color: #fff;
    .sign-up-text {
      margin-right: 8px;
    }
    .register {
      font-weight: 700;
      color: rgb(45, 161, 255);
    }
  }
}
</style>
