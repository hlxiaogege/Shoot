<template>
  <div class="container">
    <mt-header title="注册账号">
      <router-link to="/login" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="aui-code-box">
      <form action="">
        <p class="aui-code-line">
          <i class="icon icon-phone"></i>
          <input class="aui-code-line-input" placeholder="请输入手机号码">
        </p>
        <p class="aui-code-line">
          <i class="icon icon-psd"></i>
          <input class="aui-code-line-input" placeholder="请输入密码">
        </p>
        <p class="aui-code-line">
          <i class="icon icon-psd"></i>
          <input class="aui-code-line-input" placeholder="请再次输入密码">
        </p>
        <p class="aui-code-line">
          <i class="icon icon-code"></i>
          <input class="aui-code-line-input" placeholder="输入验证码">
          <a href="javascript:;" class="aui-code-ret">获取验证码</a>
        </p>
        <p class="aui-code-line">
          <i class="icon icon-img"></i>
          <input class="aui-code-line-input" placeholder="输入验证码">
          <a href="javascript::" class="aui-code-ret">
            <img src="../../public/img/code.png">
          </a>
        </p>
        <div class="aui-code-btn">
          <button @click="alert">立即注册</button>
        </div>
        <div class="aui-forget">
          已有账号,
          <router-link to="/login">前往登录</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    alert(){
      this.$toast({
        message:"注册成功",
        position: 'bottom',
      });
      setTimeout(()=>{
        this.$router.push("/login");
      },3000);
    }
  },
}
</script>
<style scoped>
.container{
  background-image: url(../../public/img/reg.jpg);
  width: 100%;
  min-height: 100vh;
} 
.container .mint-header{
  background: rgba(255,255,255,0.6) !important;
  color: aliceblue !important;
  font-size: 1rem !important;
}
.aui-code-box {
  padding: 1rem 1rem;
  text-align: center;
  border-radius: 3px;
  width: 100%;
  background: rgba(255,255,255,0.6) !important;
  margin-top: 1.5rem;
  box-sizing: border-box;
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
.aui-code-ret {
  position: absolute;
  right: 1.2rem;
  top: 0.75rem;
  width: auto;
  text-align: right;
  color: #049bff;
}
.aui-code-ret img {
  width: 60px;
  margin-top: -0.28rem;
}
.aui-code-ret {
  position: absolute;
  right: 1.2rem;
  top: 0.75rem;
  width: auto;
  text-align: right;
  color: #049bff;
}
.aui-code-line .icon {
  position: absolute;
  left: 0.5rem;
  top: 0.6rem;
}
.icon-phone {
  background-image: url(../../public/img/phone.png);
}
.icon-code {
  background-image: url(../../public/img/dun.png);
}
.icon-psd {
  background-image: url(../../public/img/lock.png);
}
.icon-img {
  background-image: url(../../public/img/img.png);
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
.aui-code-btn button{
  background-color: #049bff;
  background: linear-gradient(#049bffa8, #28a9ff7a);
  height: 42px;
  line-height: 42px;
  border: none;
  color: #fff;
  border-radius: 5px;
  width: 100%;
  font-size: 1rem;
}
.aui-forget {
  color: #666;
  display: block;
  font-size: 0.8rem;
  text-align: left;
}
.aui-forget a{
  color: #049bff;
  font-style: normal;
}
</style>