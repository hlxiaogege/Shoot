<template>
  <div>
    <mt-header title="修改密码">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="line"></div>
    <div class="aui-code-box">
      <form action="">
        <p class="aui-code-line">
          <i class="icon icon-psd"></i>
          <input type="password" placeholder="旧密码" class="aui-code-line-input">
        </p>
        <p class="aui-code-line">
          <i class="icon icon-psd"></i>
          <input type="password" placeholder="请输入新密码" class="aui-code-line-input">
        </p>
        <p class="aui-code-line">
          <i class="icon icon-psd"></i>
          <input type="password" placeholder="请再次输入密码" class="aui-code-line-input">
        </p>
        <div class="aui-code-btn">
          <button>更改密码</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.aui-code-box {
  padding: 1rem 1rem;
  text-align: center;
  border-radius: 3px;
  width: 100%;
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
.aui-code-line .icon {
  position: absolute;
  left: 0.5rem;
  top: 0.6rem;
}
.icon-psd {
  background-image: url(../../public/img/lock.png);
}
.icon {
  width: 20px;
  height: 20px;
  display: block;
  border: none;
  float: left;
  background-size: 20px;
  background-repeat: no-repeat;
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
  background: linear-gradient(#049bff, #28a9ff);
  height: 42px;
  line-height: 42px;
  border: none;
  color: #fff;
  border-radius: 2px;
  width: 100%;
  font-size: 1rem;
  box-shadow: 0 3px 9px #aedfff;
}
</style>