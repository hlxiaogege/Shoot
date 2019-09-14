<template>
  <section>
    <mt-header title="我的团队">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="aui-team-box">
      <div class="aui-team-head">
        <h1>198</h1>
        <h2>团队总人数</h2>
      </div>
      <div class="aui-palace aui-palace-three">
        <a href="javascript:;" class="aui-palace-grid">
          <div class="aui-palace-grid-text">
            <h1>12</h1>
            <h2>一级有效会员</h2>
          </div>
        </a>
        <a href="javascript:;" class="aui-palace-grid">
          <div class="aui-palace-grid-text">
            <h1>12</h1>
            <h2>二级有效会员</h2>
          </div>
        </a>
        <a href="javascript:;" class="aui-palace-grid">
          <div class="aui-palace-grid-text">
            <h1>12</h1>
            <h2>三级有效会员</h2>
          </div>
        </a>
      </div>
    </div>
    <div class="aui-fold-box">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="一级团队" name="1">
          <div class="aui-flex b-line">
            <div class="aui-member-user">
              <img src="../../public/img/user-logo-001.png">
            </div>
            <div class="aui-flex-box">
              <h3>李嘉桦同学</h3>
              <p>铂金会员</p>
            </div>
          </div>
          <div class="aui-flex b-line">
            <div class="aui-member-user">
              <img src="../../public/img/user-logo-002.png">
            </div>
            <div class="aui-flex-box">
              <h3>一点车CAR</h3>
              <p>普通会员</p>
            </div>
          </div>
          <div class="aui-flex b-line">
            <div class="aui-member-user">
              <img src="../../public/img/user-logo-003.png">
            </div>
            <div class="aui-flex-box">
              <h3>AUI素材网</h3>
              <p>普通会员</p>
            </div>
          </div>
          <div class="aui-flex b-line">
            <div class="aui-member-user">
              <img src="../../public/img/user-logo-004.png">
            </div>
            <div class="aui-flex-box">
              <h3>李炳成</h3>
              <p>普通会员</p>
            </div>
          </div>
        </van-collapse-item>
        <van-collapse-item title="二级团队" name="2">
          <div class="aui-flex b-line">
            <div class="aui-member-user">
              <img src="../../public/img/user-blue.png">
            </div>
            <div class="aui-flex-box">
              <h3>18801061167</h3>
              <p>普通会员</p>
            </div>
          </div>
          <div class="aui-flex b-line">
            <div class="aui-member-user">
              <img src="../../public/img/user-blue.png">
            </div>
            <div class="aui-flex-box">
              <h3>18801061167</h3>
              <p>普通会员</p>
            </div>
          </div>
        </van-collapse-item>
        <van-collapse-item title="三级团队" name="3">
          <div class="aui-flex b-line">
            <div class="aui-member-user">
              <img src="../../public/img/user-blue.png">
            </div>
            <div class="aui-flex-box">
              <h3>AUI素材网</h3>
              <p>铂金会员</p>
            </div>
          </div>
          <div class="aui-flex b-line">
            <div class="aui-member-user">
              <img src="../../public/img/user-blue.png">
            </div>
            <div class="aui-flex-box">
              <h3>李嘉桦同学</h3>
              <p>普通会员</p>
            </div>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ['1'],
    }
  },
}
</script>
<style>
.aui-team-box {
  width: 100%;
  background-clip: padding-box;
  text-align: center;
  background-color: #ffd2bb;
  background-image: url(../../public/img/i-head.png);
  background-size: cover;
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
}
.aui-team-box h1 {
  color: rgba(255, 255, 255, 0.92);
  font-family: "Apple Braille";
  font-size: 1.1rem;
  height: 1.5rem;
}
.aui-team-box h2 {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
  font-weight: normal;
}
.aui-palace {
  padding: 1rem;
  position: relative;
  overflow: hidden;
}
.aui-palace::after{
  content: "";
  height: 0;
  display: block;
  clear: both;
}
.aui-palace-three .aui-palace-grid {
  width: 33.333%;
  padding: 0;
  background: none;
}

.aui-member-user {
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
}
.aui-member-user img {
  width: 40px;
  height: 40px;
  display: block;
  border: none;
  border-radius: 100%;
}
.van-collapse-item__wrapper .aui-flex{
  padding: 0.5rem 0 0.5rem 0;
}
.van-collapse-item__content{
  padding: 0.8rem !important;
}
</style>