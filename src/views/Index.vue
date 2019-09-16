<template>
  <section>
    <!-- 父面板 -->
    <mt-tab-container v-model="active" swipeable>
      <!-- 首页 -->
      <mt-tab-container-item id="tab1">
        <mt-header fixed title="首页"></mt-header>
        <div style="height:41px"></div>
        <div class="aui-borrow-box">
          <div class="aui-borrow-flex">
            <div class="aui-borrow-flex-hd">
              <p>当前账户余额(元)</p>
              <h2>50,000.00</h2>
              <h3>3分钟申请，5秒提现</h3>
            </div>
            <div class="aui-borrow-flex-bd">
              <button>我要提现</button>
            </div>
          </div>
        </div>
        <div class="aui-palace aui-palace-nav">
          <router-link to="/card" class="aui-palace-grid">
            <div class="aui-palace-grid-icon">
              <img src="../../public/img/icon-nav-001.png">
            </div>
            <div class="aui-palace-grid-text">
              <p>我的卡片</p>
            </div>
          </router-link>
          <router-link to="/carry" class="aui-palace-grid">
            <div class="aui-palace-grid-icon">
              <img src="../../public/img/icon-nav-002.png">
            </div>
            <div class="aui-palace-grid-text">
              <p>提现列表</p>
            </div>
          </router-link>
          <router-link to="/carry" class="aui-palace-grid">
            <div class="aui-palace-grid-icon">
              <img src="../../public/img/icon-nav-003.png">
            </div>
            <div class="aui-palace-grid-text">
              <p>收益列表</p>
            </div>
          </router-link>
          <router-link to="/group" class="aui-palace-grid">
            <div class="aui-palace-grid-icon">
              <img src="../../public/img/icon-nav-004.png">
            </div>
            <div class="aui-palace-grid-text">
              <p>我的团队</p>
            </div>
          </router-link>
        </div>
        <div class="divHeight"></div>
        <mt-swipe :auto="4000" style="width:100%;height:8rem">
          <mt-swipe-item>
            <img src="../../public/img/banner1.png">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../public/img/banner2.png">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../public/img/banner3.png">
          </mt-swipe-item>
        </mt-swipe>
        <div class="divHeight"></div>
        <div>
          <div class="aui-news-sml">
            <img src="../../public/img/i-news.png">
          </div>
          <div>
            <van-swipe :autoplay="3000" style="height: 20px;" :show-indicators="false" vertical>
              <van-swipe-item v-for="(item,index) in list" :key="index">
                <router-link to="/page">{{item}}</router-link>
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>
        <div class="divHeight"></div>
        <div class="aui-flex aui-flex-bottom">
          <div class="aui-flex-box aui-flex-box-one">
            <router-link to="/video" class="aui-video">
              <div class="aui-video-title">
                <h2>视频介绍</h2>
                <span>VIDEO</span>
              </div>
              <div class="aui-video-img">
                <img src="../../public/img/i-video.png">
              </div>
            </router-link>
          </div>
          <div class="aui-flex-box aui-flex-box-two">
            <div class="aui-ad-two-img">
              <router-link to="/join" class="aui-video aui-join">
                 <div class="aui-video-title">
                  <h2>加入我们</h2>
                  <span>JOIN US</span>
                </div>
                 <div class="aui-video-img">
                  <img src="../../public/img/i-join.png">
                </div>
              </router-link>
            </div>
            <div class="aui-three-img">
              <div class="aui-fl-img">
                <router-link to="/share" class="aui-video aui-join aui-share">
                   <div class="aui-video-title">
                    <h2>分享介绍</h2>
                    <span>SHARE</span>
                  </div>
                  <div class="aui-video-img">
                    <img src="../../public/img/i-share.png">
                  </div>
                </router-link>
              </div>
              <div class="aui-fr-img">
                <router-link to="/platform" class="aui-video aui-join aui-about">
                  <div class="aui-video-title">
                    <h2>关于平台</h2>
                    <span>ABOUT</span>
                  </div>
                  <div class="aui-video-img">
                    <img src="../../public/img/i-about.png">
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="divHeight"></div>
        <div class="aui-flex aui-flex-title">
          <div class="aui-flex-box">
            <h2>任务专区</h2>
          </div>
        </div>
        <div class="aui-palace aui-palace-show">
          <div class="aui-palace-grid" v-for="(item,i) in imgs" :key="i">
            <div class="aui-palace-grid-icon">
              <img :src="item.url">
            </div>
            <div class="aui-palace-grid-text">
              <button>下载</button>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <!-- 任务 -->
      <mt-tab-container-item id="tab2">
        <mt-header fixed title="任务列表"></mt-header>
        <div style="height:41px"></div>
        <div class="aui-dot-head">
          <img src="../../public/img/head.png">
          <div class="aui-dot-body">
            <h1>介绍</h1>
            <div class="aui-dot-text">
              点击下载享受收益
            </div>
          </div>
          <div class="aui-dot-title">
            <h2>点击下载按钮，静待完成</h2>
            <h2>下载完成，查看余额</h2>
            <h2>余额不对，请重新下载</h2>
          </div>
        </div>
        <div class="aui-chg-box">
          <h2>更多精彩应用，等你来下载！</h2>
          <div class="aui-chg-link">
            <a href="javascript:;" class="aui-flex b-line"  v-for="(item,i) of imgs" :key="i">
              <div class="aui-logo-block">
                <img :src="item.url">
              </div>
              <div class="aui-flex-box">
                <h3>{{item.title}}</h3>
              </div>
              <div class="aui-button-dot">
                <button>下载</button>
              </div>
            </a>
          </div>
        </div>
        <div class="aui-experience">
          <button>应用体验</button>
        </div>
      </mt-tab-container-item>
      <!-- 我的 -->
      <mt-tab-container-item id="tab3">
        <mt-header fixed title="个人中心"></mt-header>
        <div style="height:41px"></div>
        <div class="aui-inter-user">
          <div class="aui-flex">
            <div class="aui-inter-user-img">
              <img src="../../public/img/user-logo-003.png">
            </div>
            <div class="aui-flex-box">
              <h2>185****2894</h2>
              <p>账户余额<i>0.00</i></p>
            </div>
            <div class="aui-inter-user-no">
              <a href="javascript:;">立即提现</a>
            </div>
          </div>
        </div>
        <div class="aui-inter-grids aui-inter-grids-blue">
          <a href="javascript:;" class="aui-grids-item">
            <h3>总收益</h3>
            <p>18.90</p>
          </a>
           <a href="javascript:;" class="aui-grids-item">
            <h3>当日收益</h3>
            <p>78.90</p>
          </a>
           <a href="javascript:;" class="aui-grids-item">
            <h3>已提现</h3>
            <p>888.90</p>
          </a>
        </div>
        <div class="aui-palace aui-palace-nav">
          <router-link to="/card" class="aui-palace-grid">
            <div class="aui-palace-grid-icon">
              <img src="../../public/img/icon-nav-001.png">
            </div>
            <div class="aui-palace-grid-text">
              <p>我的卡片</p>
            </div>
          </router-link>
          <router-link to="/carry" class="aui-palace-grid">
            <div class="aui-palace-grid-icon">
              <img src="../../public/img/icon-nav-002.png">
            </div>
            <div class="aui-palace-grid-text">
              <p>提现列表</p>
            </div>
          </router-link>
          <router-link to="/carry" class="aui-palace-grid">
            <div class="aui-palace-grid-icon">
              <img src="../../public/img/icon-nav-003.png">
            </div>
            <div class="aui-palace-grid-text">
              <p>收益列表</p>
            </div>
          </router-link>
          <router-link to="/group" class="aui-palace-grid">
            <div class="aui-palace-grid-icon">
              <img src="../../public/img/icon-nav-004.png">
            </div>
            <div class="aui-palace-grid-text">
              <p>我的团队</p>
            </div>
          </router-link>
        </div>
        <div class="divHeight"></div>
        <div class="aui-member-list">
          <!-- 修改密码 -->
          <router-link to="/update" class="aui-flex aui-flex-bg b-line">
            <div class="aui-info-img">
              <img src="../../public/img/icon-003.png">
            </div>
            <div class="aui-flex-box">
              <p>修改密码</p>
            </div>
            <div class="aui-ren-arrow">
              <span></span>
            </div>
          </router-link>
          <!-- 分享好友 -->
          <router-link to="/friend" class="aui-flex aui-flex-bg b-line">
            <div class="aui-info-img">
              <img src="../../public/img/icon-005.png">
            </div>
            <div class="aui-flex-box">
              <p>分享好友</p>
            </div>
            <div class="aui-ren-arrow">
              <span></span>
            </div>
          </router-link>
          <!-- APP下载 -->
          <router-link to="/download" class="aui-flex aui-flex-bg b-line">
            <div class="aui-info-img">
              <img src="../../public/img/icon-006.png">
            </div>
            <div class="aui-flex-box">
              <p>APP下载</p>
            </div>
            <div class="aui-ren-arrow">
              <span></span>
            </div>
          </router-link>
          <!-- 联系客服 -->
          <router-link to="/service" class="aui-flex aui-flex-bg b-line">
            <div class="aui-info-img">
              <img src="../../public/img/icon-007.png">
            </div>
            <div class="aui-flex-box">
              <p>联系客服</p>
            </div>
            <div class="aui-ren-arrow">
              <span></span>
            </div>
          </router-link>
          <!-- 技术支持 -->
          <a href="javascript:;" class="aui-flex aui-flex-bg b-line">
            <div class="aui-info-img">
              <img src="../../public/img/icon-010.png">
            </div>
            <div class="aui-flex-box">
              <p>技术支持</p>
            </div>
            <div class="aui-ren-arrow">
              <span></span>
            </div>
          </a>
          <!-- 退出登录 -->
          <router-link to="/login" class="aui-flex aui-flex-bg b-line">
            <div class="aui-info-img">
              <img src="../../public/img/icon-009.png">
            </div>
            <div class="aui-flex-box">
              <p>退出登录</p>
            </div>
            <div class="aui-ren-arrow">
              <span></span>
            </div>
          </router-link>
        </div>
        <div class="divHeight"></div>
        <div style="height:50px"></div>
      </mt-tab-container-item>
    </mt-tab-container>
    <footer>
      <mt-tabbar fixed v-model="active" style="z-index:2">
      <!-- 按钮 -->
      <mt-tab-item id="tab1">
        <img slot="icon" src="../../public/img/01_active.png" v-if="this.active=='tab1'">
        <img slot="icon" src="../../public/img/01.png" v-else>
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="../../public/img/02_active.png"
        v-if="this.active=='tab2'">
        <img slot="icon" src="../../public/img/02.png" v-else>
        任务
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="../../public/img/03_active.png"
        v-if="this.active=='tab3'">
        <img slot="icon" src="../../public/img/03.png" v-else>
        我的
      </mt-tab-item>
    </mt-tabbar>
    </footer>
  </section>
</template>
<script>
export default {
  data() {
    return {
      active:"tab1",
      animate:true,
      list:[
        "恭喜！185****2398成为我们的高级会员！",
        "恭喜！178****9089成为我们的高级会员！",
        "恭喜！188****6117成为我们的高级会员！",
        "恭喜！139****8900成为我们的高级会员！",
        "恭喜！159****9888成为我们的中级会员！",
      ],
      imgs:[
        {url:require("../../public/img/logo001.png"),title:"多点购物"},
        {url:require("../../public/img/logo002.png"),title:"网易云音乐"},
        {url:require("../../public/img/logo003.png"),title:"酷狗畅听"},
        {url:require("../../public/img/logo004.png"),title:"虾米音乐"},
        {url:require("../../public/img/logo005.png"),title:"LINE在线"},
        {url:require("../../public/img/logo006.png"),title:"口袋购物"},
        {url:require("../../public/img/logo007.png"),title:"京东商城"},
        {url:require("../../public/img/logo008.png"),title:"时间助手"},
        {url:require("../../public/img/logo001.png"),title:"多点购物"},
        {url:require("../../public/img/logo002.png"),title:"网易云音乐"},
        {url:require("../../public/img/logo003.png"),title:"酷狗畅听"},
        {url:require("../../public/img/logo004.png"),title:"虾米音乐"},
        {url:require("../../public/img/logo005.png"),title:"LINE在线"},
        {url:require("../../public/img/logo006.png"),title:"口袋购物"},
        {url:require("../../public/img/logo007.png"),title:"京东商城"},
        {url:require("../../public/img/logo008.png"),title:"时间助手"},
        {url:require("../../public/img/logo001.png"),title:"多点购物"},
        {url:require("../../public/img/logo002.png"),title:"网易云音乐"},
        {url:require("../../public/img/logo003.png"),title:"酷狗畅听"},
        {url:require("../../public/img/logo004.png"),title:"虾米音乐"},
        {url:require("../../public/img/logo005.png"),title:"LINE在线"},
        {url:require("../../public/img/logo006.png"),title:"口袋购物"},
        {url:require("../../public/img/logo007.png"),title:"京东商城"},
        {url:require("../../public/img/logo008.png"),title:"时间助手"},
        
      ],
    }
  },
  methods: {
    
  },
}
</script>
<style scoped>
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #eaeaea;
  color: #26a2ff !important;
}
.mint-header{
  background-color: #fff;
  color: #333;
  font-size: 1rem;
  border-bottom: 1px solid #e2e2e2;
}

/* 第一页 */
/* 蓝色提现 */
.aui-borrow-box{
  background-image: linear-gradient(to bottom,#5282ea,#2562e3);
  background-color: #006ae3;
  height: 8rem;
}
.aui-borrow-flex{
  padding: 20px;
  position: relative;
  display: flex;
  align-items: center;
}
.aui-borrow-flex-hd{
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}
.aui-borrow-flex-hd p {
  color: #a1c1ff;
  font-size: 1rem;
}
.aui-borrow-flex-hd h2 {
  color: #ffffff;
  font-size: 1.8rem;
  padding-bottom: 0.8rem;
}
.aui-borrow-flex-hd h3 {
  color: #a1c1ff;
  font-size: 1rem;
}
.aui-borrow-flex-bd button {
  background: #fff;
  color: #006ae3;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 20px;
  padding: 0.35rem 0.95rem;
  border: none;
}
/* 4张图片 */
.aui-palace-nav {
  background: #fff;
  margin: 1rem 0;
  padding: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
}
.aui-palace-grid {
  position: relative;
  width: 25%;
  box-sizing: border-box;
  background-color: white;
}
.aui-palace-nav .aui-palace-grid-icon {
  width: 32px;
  height: 32px;
  margin: 0 auto;
}
.aui-palace-grid-icon img {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
}
.aui-palace-grid-text {
  display: block;
  text-align: center;
  color: #333;
  font-size: 0.85rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-top: 0.2rem;
}
.aui-palace-nav p {
  color: #6f6f6f;
  font-size: 0.82rem;
  font-weight: normal;
}
/* 空div */
.divHeight{
  width: 100%;
  height: 10px;
  background: #f7f7f7;
  position: relative;
  overflow: hidden;
}
/* 轮播 */
.mint-swipe-items-wrap img{
  width: 100%;
  height: auto;
  display: block;
  border: none;
}
/* 上下轮播广告 */
.aui-news-sml img {
  width: 2.2rem;
  display: block;
  border: none;
}
.van-swipe__track a{
  color: #2d2f44;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1rem;
  margin-top: 4px;
}
/* 4张图片 */
.aui-flex{
  display: flex;
  align-items: center;
  padding: 0.8rem;
  position: relative;
}
.aui-flex-box-one {
  width: 38%;
  float: left;
  flex: inherit;
  margin-right: 0.5rem;
}
.aui-flex-box {
  min-width: 0;
  font-size: 14px;
  color: #333;
}
.aui-video {
  display: block;
  background: #eceefb;
  border-radius: 3px;
  overflow: hidden;
  padding: 0.8rem;
  height: 13rem;
}
.aui-video-title {
  float: left;
  position: relative;
  z-index: 1;
}
.aui-video h2 {
  color: #7769c3;
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
}
.aui-video span {
  color: #919194;
  font-size: 0.8rem;
  font-weight: normal;
  border-radius: 1px;
}
.aui-video img {
  border-radius: 3px;
  opacity: 0.7;
  width: 100%;
}
/* join us */
.aui-flex-box-two {
  width: 65%;
  float: right;
  flex: inherit;
}
.aui-flex-box {
  min-width: 0;
  font-size: 14px;
  color: #333;
}
.aui-ad-two-img {
  width: 100%;
  margin-bottom: 0.5rem;
}
.aui-join {
  margin-bottom: 0.5rem;
  height: 6.22rem;
  background: #fcf1ef;
  margin-right: 0;
  position: relative;
}
.aui-join h2 {
  color: #cb6a6d;
}
.aui-join .aui-video-img {
  width: 75px;
  float: right;
  position: absolute;
  right: 1rem;
}
/* 最后两个 */
.aui-three-img {
  overflow: hidden;
  width: 100%;
}
.aui-fl-img {
  float: left;
  width: 49%;
  margin-right: 1%;
}
.aui-share {
  margin-bottom: 0;
  background: #e8f3ef;
  box-sizing: border-box;
}
.aui-share h2 {
  color: #68c4bb;
}
.aui-share .aui-video-img {
  width: 50px;
  bottom: 0;
  right: 0;
}

.aui-fr-img {
  float: right;
  width: 49%;
}
.aui-about {
  background: #eff6fc;
  margin-bottom: 0;
  box-sizing: border-box;
}
.aui-about h2 {
  color: #5878b2;
}
.aui-about .aui-video-img{
  width: 60px;
  float: right;
  position: absolute;
  right: 0;
  bottom: 0;
}
/* 任务专区 */
.aui-flex-title {
  padding: 1rem 0 0 1rem;
}
.aui-flex-title h2 {
  font-size: 1rem;
  font-weight: normal;
  color: #64697b;
}
/* 下载 */
.aui-palace-show {
  border-radius: 3px;
  padding: 0;
}
.aui-palace {
  position: relative;
  overflow: hidden;
}
.aui-palace-grid {
  position: relative;
  float: left;
  padding: 1.2rem;
  width: 25%;
  box-sizing: border-box;
  background-color: white;
}
.aui-palace-grid-icon{
  margin: 0 auto;
}
.aui-palace-show .aui-palace-grid-icon img {
  border-radius: 12px;
}
.aui-palace-grid-icon img {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
}
.aui-palace-grid-text {
  display: block;
  text-align: center;
  color: #333;
  font-size: 0.85rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-top: 0.5rem;
}
.aui-palace-grid-text button {
  background: none;
  border: 1px solid #b2b8cc;
  border-radius: 5px;
  font-size: 0.85rem;
  padding: 0.2rem 0;
  color: #b2b8cc;
  width: 100%;
  display: block;
}


/* 任务 */
.aui-dot-head {
  position: relative;
  width: 100%;
}
.aui-dot-head img {
  width: 100%;
  height: auto;
  display: block;
}
.aui-dot-body {
  width: 100%;
  height: auto;
  position: absolute;
  left: 50%;
  margin-left: -50%;
  top: 10%;
  text-align: center;
}
.aui-dot-body h1 {
  color: rgba(255,255,255,0.9);
  font-size: 2rem;
  margin-bottom: 1rem;
}
.aui-dot-text {
  background: #fff;
  width: 70%;
  margin: 0 auto;
  color: #5097ff;
  font-size: 0.85rem;
  border-radius: 20px;
  height: 1.8rem;
  line-height: 1.8rem;
}
.aui-dot-title {
  width: 100%;
  height: auto;
  position: absolute;
  left: 50%;
  margin-left: -50%;
  bottom: 21%;
  text-align: center;
  color: rgba(255,255,255,0.9);
}
.aui-dot-title h2 {
  color: rgba(255,255,255,0.9);
  font-weight: normal;
  font-size: 1.05rem;
  margin-bottom: 0.6rem;
}
/* 下载 */
.aui-chg-box{
  background-color: rgba(255,255,255,0.6);
  margin: -2.8rem auto 1rem;
  width: 92%;
  box-shadow: 0 4px 9px #e6e6e6;
  height: auto;
  position: relative;
  border-radius: 5px;
}
.aui-chg-box h2 {
  text-align: center;
  height: 3rem;
  line-height: 2.9rem;
  color: #4e4e4e;
  font-size: 1rem;
}
.aui-chg-link {
  margin-bottom: 55px;
}
.aui-logo-block {
  width: 40px;
  height: 40px;
  margin-right: 1rem;
}
.aui-logo-block img {
  width: 100%;
  height: auto;
  display: block;
  border: none;
  border-radius: 100px;
}
.aui-chg-box .aui-flex-box{
  display: block;
  width: 60%;
}
.aui-flex-box h3 {
  color: #383838;
  font-size: 0.98rem;
}
.b-line::after{
  content: '';
  width: 92%;
  height: 1px;
  position: absolute;
  z-index: 2;
  bottom: 0;
  border-bottom: 1px solid #eee;
}
.aui-button-dot button{
  border: none;
  color: #fff;
  font-size: 0.82rem;
  padding: 0.35rem 1.3rem;
  border-radius: 20px;
  background: linear-gradient(to right, #fe5244 , #ff7840);
  box-shadow: 0 3px 9px #ffbb9e;
}

.aui-experience {
  position: fixed;
  bottom: 3.5rem;
  left: 0;
  z-index: 49;
  border-radius: 3px;
  margin: 0 1rem;
  width: 92%;
}
.aui-experience button {
  background: #049bff;
  color: #fff7f0;
  border: none;
  padding: 0.6rem 0;
  width: 100%;
  display: block;
  border-radius: 3px;
  font-size: 0.9rem;
}

/* 我的 */
.aui-inter-user {
  background: #049bff;
}
.aui-inter-user .aui-flex {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.aui-inter-user-img {
  width: 50px;
  height: 50px;
  margin-right: 0.5rem;
}
.aui-inter-user-img img {
  width: 50px;
  height: 50px;
  display: block;
  border: none;
  border-radius: 100%;
}
.aui-flex-box {
  min-width: 0;
  font-size: 14px;
  color: #333;
  width: 62%;
}
.aui-flex-box h2 {
  color: #fff;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
}
.aui-flex-box p {
  color: #ccebff;
  font-size: 0.9rem;
  position: relative;
}
.aui-inter-user-no a {
  border: 1px solid #98d4ff;
  color: rgba(255,255,255,0.7);
  font-size: 0.8rem;
  border-radius: 20px;
  padding: 0.25rem 0.6em;
}
/* 3块 */
.aui-inter-grids {
  overflow: hidden;
  position: relative;
  padding-bottom: 0.3rem;
  padding-top: 0.3rem;
  background: #28a9ff;
}
.aui-inter-grids-blue .aui-grids-item {
  width: 33.333%;
}
.aui-grids-item {
  float: left;
  position: relative;
  z-index: 0;
  padding: 0.32rem 0;
  font-size: 0.85rem;
  text-align: center;
  color: #fff;
}
.aui-grids-item:not(:nth-child(3n)):before {
  content: '';
  position: absolute;
  z-index: 0;
  top: 15px;
  right: 0;
  height: 45%;
  border-right: 1px solid #D9D9D9;
  transform: scaleX(0.5);
  transform-origin: 100% 0;
}
.aui-grids-item h3 {
  color: rgba(255,255,255,0.9);
  font-size: 0.92rem;
  font-weight: normal;
}
.aui-grids-item p {
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
}
/* 列表 */
.aui-member-list {
  background: #ffffff;
  font-family: "Apple Braille";
}
.aui-member-list .aui-flex {
  padding: 1rem;
}
.aui-info-img {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.3rem;
}
.aui-info-img img{
  border: 0;
  width: 100%;
  height: auto;
  display: block;
}
.aui-flex-box {
  flex: 1;
  min-width: 0;
  font-size: 14px;
  color: #333;
}

.aui-member-list p {
  color: #6f6f6f;
  font-size: 0.85rem;
}
.aui-ren-arrow {
  text-align: right;
  color: #808080;
  padding-right: 13px;
  position: relative;
}
.aui-ren-arrow span {
  font-size: 0.8rem;
  color: #858d95;
}
.aui-ren-arrow:after {
  content: " ";
  display: inline-block;
  height: 7px;
  width: 7px;
  border-width: 1px 1px 0 0;
  border-color: #c1c1c1;
  border-style: solid;
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  position: absolute;
  top: 50%;
  margin-top: -4px;
  right: 2px;
}
</style>