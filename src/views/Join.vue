<template>
  <section class="aui-scrollView">
    <mt-header title="加入我们">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="line"></div>
    <div class="aui-open-member">
      <div>
        <img src="../../public/img/vip-bg.png">
      </div>
      <div class="aui-open-title ">
        <p>选择会员类型</p>
      </div>
      <div class="aui-fiv-list">
        <a href="javascript:;" class="aui-flex">
          <div class="aui-vip-img">
            <img src="../../public/img/v1.png" alt="">
          </div>
          <div class="aui-flex-box">
            <h2 style="color:#c5c9d4">
              普卡 
              <em>￥58</em>
            </h2>
            <p>每天可以下载2个APP</p>
          </div>
          <div class="aui-choose">
            <label :class="i==1?'isactive':''" class="cell-right" @click="chooseCard(1)">
              <input type="radio" value="cho" :checked="i==1?'true':'false'">
              <i class="icon cell-radio-icon"></i>
            </label>
          </div>
        </a>
        <a href="javascript:;" class="aui-flex">
          <div class="aui-vip-img">
            <img src="../../public/img/v2.png" alt="">
          </div>
          <div class="aui-flex-box">
            <h2 style="color:#d8a756">
              金卡 
              <em>￥158</em>
            </h2>
            <p>每天可以下载6个APP</p>
          </div>
          <div class="aui-choose">
            <label :class="i==2?'isactive':''" class="cell-right" @click="chooseCard(2)">
              <input type="radio" value="cho" :checked="i==2?'true':'false'">
              <i class="icon cell-radio-icon"></i>
            </label>
          </div>
        </a>
        <a href="javascript:;" class="aui-flex">
          <div class="aui-vip-img">
            <img src="../../public/img/v3.png" alt="">
          </div>
          <div class="aui-flex-box">
            <h2 style="color:#d8a756">
              黑卡 
              <em>￥258</em>
            </h2>
            <p>每天可以下载10个APP</p>
          </div>
          <div class="aui-choose">
            <label :class="i==3?'isactive':''" class="cell-right" @click="chooseCard(3)">
              <input type="radio" value="cho" :checked="i==3?'true':'false'">
              <i class="icon cell-radio-icon"></i>
            </label>
          </div>
        </a>
      </div>
      <div class="aui-open-title ">
        <p>选择支付方式</p>
      </div>
      <div class="aui-fiv-list aui-fiv-list-one">
        <a href="javascript:;" class="aui-flex">
          <div class="aui-vip-img">
            <img src="../../public/img/pay-wx.png" alt="">
          </div>
          <div class="aui-flex-box">
            <h2>
              微信支付 
            </h2>
            <p>快速便捷</p>
          </div>
          <div class="aui-choose">
            <label :class="n==1?'isactive':''" class="cell-right" @click="choosePay(1)">
              <input type="radio" value="cho" :checked="n==1?'true':'false'">
              <i class="icon cell-radio-icon"></i>
            </label>
          </div>
        </a>
        <a href="javascript:;" class="aui-flex">
          <div class="aui-vip-img">
            <img src="../../public/img/pay.png" alt="">
          </div>
          <div class="aui-flex-box">
            <h2>
              支付宝支付 
            </h2>
            <p>2亿人都在用</p>
          </div>
          <div class="aui-choose">
            <label :class="n==2?'isactive':''" class="cell-right" @click="choosePay(2)">
              <input type="radio" value="cho" :checked="n==2?'true':'false'">
              <i class="icon cell-radio-icon"></i>
            </label>
          </div>
        </a>
      </div>
      <div class="aui-code-btn">
        <button>确认开通</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      i:2,
      n:1,
    }
  },
  methods: {
    chooseCard(i){
      this.i=i;
    },
    choosePay(i){
      this.n=i;
    }
  },
}
</script>
<style scoped>
img {
  border: 0;
  width: 100%;
  height: auto;
  display: block;
}
.aui-open-member {
  width: 100%;
  overflow: hidden;
  background: #fff;
}
.aui-open-title {
  padding: 0.5rem 0 0.5rem 1rem;
  color: #848484;
  font-size: 1rem;
  background: #f9f9f9;
}
.aui-fiv-list {
  padding: 0.5rem 0;
}
.aui-fiv-list .aui-flex {
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  height: 2.5rem;
}
.aui-vip-img {
  width: 3rem;
  margin-right: 0.5rem;
}
.aui-flex-box {
  flex: 1;
  min-width: 0;
  font-size: 14px;
  color: #333;
}
.aui-fiv-list h2 {
  color: #3c3c3c;
  font-weight: normal;
  font-size: 1rem;
  margin-bottom: 0.4rem;
}
.aui-fiv-list h2 em {
  font-style: normal;
}
.aui-fiv-list p {
  color: #c7c7c7;
  font-weight: normal;
  font-size: 0.7rem;
}
.cell-right{
  padding: 10px 0;
  height: 42px;
  width: 88%;
  font-size: 14px;
  background: none;
  border: none;
  color: #999;
  display: block;
  margin-left: 0.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

}
.cell-right input[type="radio"], .cell-right input[type="checkbox"]:not(.m-switch) {
  position: absolute;
  left: -9999em;
}
.cell-radio-icon {
  width: 20px;
  height: 20px;
  background-size: 20px;
  background-image: url(../../public/img/cricle.png);
}
.isactive .cell-radio-icon{
  background-image: url(../../public/img/cricle_active.png);
}
.icon {
  display: block;
  border: none;
  float: left;
  background-repeat: no-repeat;
}
.aui-fiv-list-one .aui-vip-img {
  width: 2.2rem;
  height: 2.2rem;
}

.aui-open-member .aui-code-btn {
  padding: 0 1rem 1rem 1rem;
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