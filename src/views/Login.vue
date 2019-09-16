<template>
  <div class="aui-login-box">
    <div class="aui-login-container">
      <div class="aui-code-box">
        <div class="aui-code-logo">
          <div class="aui-code-logo-img">
            <img src="../../public/img/taobao.jpg">
          </div>
          <h2>淘宝网</h2>
        </div>
        <form action="">
          <p class="aui-code-line">
            <i class="icon icon-phone"></i>
            <input type="text" class="aui-code-line-input" placeholder="请输入手机号码">
          </p>
          <p class="aui-code-line">
            <i class="icon icon-psd"></i>
            <input type="text" class="aui-code-line-input" placeholder="输入密码">
          </p>
          <div class="aui-code-btn">
            <router-link to="/" class="login">登录</router-link>
          </div>
          <div class="aui-flex aui-flex-module">
            <router-link to="/forget">忘记密码?</router-link>
            <router-link to="/reg">立即注册</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.aui-login-box {
  width: 100%;
  margin: 0 auto;
  height: 100%;
}
.aui-login-container{
  background-image: url(../../public/img/login-bg1.jpg);
  background-size: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
}
.aui-code-box {
  text-align: center;
  width: 100%;
  padding: 1rem;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.3)
}
.aui-login-container .aui-code-logo {
  margin-bottom: 1rem;
}
.aui-code-logo-img {
  width: 75px;
  height: 75px;
  margin: 0 auto;
  border-radius: 10px;
}
.aui-login-container .aui-code-logo-img img {
  border-radius: 100%;
}
.aui-login-container .aui-code-logo h2 {
  color: white;
  font-size: 0.95rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: normal;
}

.aui-login-container .aui-code-box p {
  background-color: rgba(232, 240, 254);
  border-radius: 22px;
}
.aui-code-box p {
  background: #f7f7f7;
  color: #cccccc;
  font-size: 0.85rem;
  position: relative;
  width: 100%;
  padding: 0 15px;
  border-radius: 5px;
  margin-bottom: 0.8rem;
  box-sizing: border-box;
}
.aui-code-line .icon {
  position: absolute;
  left: 0.5rem;
  top: 0.6rem;
}
.icon-phone {
  background-image: url(../../public/img/phone.png);
}
.icon-psd {
    background-image: url(../../public/img/lock.png);
}
.aui-code-line-input {
  padding: 0.6rem 0 0.6rem 0.9rem;
  height: 42px;
  width: 100%;
  font-size: 14px;
  background: none;
  border: none;
  color: #777;
  border-radius: 22px;
  box-sizing: border-box;
}
.aui-code-btn .login{
  height: 42px;
  line-height: 42px;
  border: none;
  color: #fff;
  width: 100%;
  font-size: 1rem;
  background: #333333;
  border-radius: 22px;
  box-shadow: 0 0 0 #fff;
}

.aui-flex-module {
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between
}
.aui-flex-module a{
  font-size: 0.8rem;
  color: #333;
}
</style>