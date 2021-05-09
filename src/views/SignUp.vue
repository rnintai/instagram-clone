<template>
  <div class="wrapper">
    <div class="sign-up">
      <div class="logo">
        <img
          src="https://fontmeme.com/images/instagram-new-logo.png"
          alt="메인 로고"
          class="logo-image"
        />
      </div>
      <div class="body-wrapper">
        <input type="text" class="name" placeholder="계정 이름" />
        <input type="password" class="pw" placeholder="비밀번호" />
        <input type="password" class="pw-check" placeholder="비밀번호 확인" />

        <button class="signup-btn">회원 가입</button>
      </div>
    </div>
    <div class="login">
      <span class="login-text">계정이 있으신가요?</span>
      <router-link to="/" class="login-route">로그인</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
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
  .sign-up {
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
      margin-bottom: 10px;
      .name,
      .pw,
      .pw-check {
        border: 1px solid rgb(184, 184, 184);
        border-radius: 2px;
        background-color: var(--bg-grey);
        padding: 5px;
        height: 23px;
      }
      .signup-btn {
        padding: 10px 0;
        color: #fff;
        background-color: rgb(45, 161, 255);
        cursor: pointer;
      }
    }
  }
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0;
    font-size: 0.8em;

    border: 1px solid rgb(184, 184, 184);
    border-radius: 2px;
    background-color: #fff;
    .login-text {
      margin-right: 8px;
    }
    .login-route {
      font-weight: 700;
      color: rgb(45, 161, 255);
    }
  }
}
</style>
