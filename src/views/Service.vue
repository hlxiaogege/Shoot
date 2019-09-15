<template>
  <div>
    <mt-header title="联系客服">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="divHeight"></div>
    <div class="aui-service">
      <div class="aui-flex b-line">
        <div class="aui-wx-img">
          <img src="../../public/img/wx.png">
        </div>
        <div class="aui-flex-box">
          <h2>微信客服</h2>
          <p>xiazaibao888</p>
        </div>
        <div class="aui-copy">
          <button>复制</button>
        </div>
      </div>
      <div class="aui-flex b-line">
        <div class="aui-wx-img">
          <img src="../../public/img/qq.png">
        </div>
        <div class="aui-flex-box">
          <h2>QQ客服</h2>
          <p>874731831</p>
        </div>
        <div class="aui-copy">
          <button>复制</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
 /* 空div */
.divHeight{
  width: 100%;
  height: 10px;
  background: #f7f7f7;
  position: relative;
  overflow: hidden;
  border: 1px solid #f2f2f2;
} 
.aui-service {
  background: #fff;
}
.aui-wx-img {
  width: 2.7rem;
  height: 2.7rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  overflow: hidden;
}
.aui-service h2 {
  color: #333;
  font-size: 0.95rem;
  font-weight: normal;
  margin-bottom: 0.3rem;
}
.aui-service p {
  color: #999;
}
.aui-copy button {
  background: none;
  border: 1px solid #28a9ff;
  border-radius: 3px;
  font-size: 0.8rem;
  padding: 0.25rem 0.8rem;
  color: #28a9ff;
  width: 100%;
  display: block;
}
</style>