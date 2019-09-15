<template>
  <div>
    <mt-header title="分享介绍">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="line"></div>
    <div class="aui-introduce">
      <div class="aui-img-in">
        <img src="../../public/img/zb-bg.png">
      </div>
      <!-- 软件介绍 -->
      <div class="aui-process">
        <h2>软件介绍</h2>
        <div class="aui-process-text">
          <p>AUI素材网软件集结了市面上大部分APP下载任务的专业软件，主要业务范围，帮助各种APP赚取下载量，增加APP在应用商店的下载量排名，同时每款APP下载完，本软件将会自动用你的网络ID以游客的身份去体验你所下载的APP,增加日活跃用户。任务必须体验1- -3分钟，否则无法获得商家佣金，做任务中间可进入后台运行。</p>
          <p>注:做任务的APP不会到你的手机桌面，无需担心占用你手机内存不够用</p>
        </div>
      </div>
      <!-- 会员等级 -->
      <div class="aui-process">
        <h2>会员等级</h2>
        <div class="aui-process-text">
          <div class="aui-fiv-list">
            <a href="javascript:;" class="aui-flex">
              <div class="aui-vip-img">
                <img src="../../public/img/v1.png">
              </div>
              <div class="aui-flex-box">
                <h3 style="color:#c5c9d4">体验会员58元</h3>
                <p>每天可以下载2个APP</p>
              </div>
            </a>
            <a href="javascript:;" class="aui-flex">
              <div class="aui-vip-img">
                <img src="../../public/img/v2.png">
              </div>
              <div class="aui-flex-box">
                <h3 style="color:#d8a756">中级会员158元</h3>
                <p>每天可以下载6个APP</p>
              </div>
            </a>
            <a href="javascript:;" class="aui-flex">
              <div class="aui-vip-img">
                <img src="../../public/img/v3.png">
              </div>
              <div class="aui-flex-box">
                <h3 style="color:#313140">高级会员258元</h3>
                <p>每天可以下载10个APP</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- 分享好友奖励 -->
      <div class="aui-process">
        <h2>好友下载奖励</h2>
        <div class="aui-process-text">
          <p>1级推荐15%</p>
          <p>2级推荐10%</p>
          <p>3级推荐5%</p>
          <p>分享满3人,可以拿3级,不够3人拿1级</p>
        </div>
      </div>
       <!-- 团队分享 -->
      <div class="aui-process">
        <h2>团队分享励</h2>
        <div class="aui-process-text">
          <p>三级内有效会员达50人，升级为“分享能手”</p>
          <p>拿无限代分享见点5%，拿无限代下载收益3%</p>
          <p>三级内有效会员达100人，升级为“分享达人”</p>
          <p>拿无限代分享见点10%，拿无限代下载收益6%</p>
          <p>三级内有效会员达200人，升级为“分享大使</p>
          <p>拿无限代分享见点15%,拿无限代下载收益%</p>
        </div>
      </div>
      <div class="aui-due-title">
        <img src="../../public/img/title.png">
      </div>
      <!-- 注册流程 -->
      <div class="aui-process">
        <h2>注册流程</h2>
        <div class="aui-process-text">
          <p>首先，扫分享人的注册维码， 或者点击分享人的链接注册。然后，会自动跳转到下载页面;也可以在平台“个人中心”>“APP下载”，扫码直接下载APP。</p>
        </div>
      </div>
      <!-- 加入流程 -->
      <div class="aui-process">
        <h2>加入流程</h2>
        <div class="aui-process-text">
          <p>在首页点击加入我们”，按“体验会员”，“中级会员”，“高级会员”的顺序依次开通。你可以选择微信”，“支付宝”“余额”支付和升级权限。</p>
        </div>
      </div>
      <!-- 操作流程 -->
      <div class="aui-process">
        <h2>加入流程</h2>
        <div class="aui-process-text">
          <p>成为会员后，点击菜单栏“”图标进入APP下载界面，，根据会员权限选择APP下载数量，比如“体验会员”可以任意选择2个APP下载，“中级会员”可以任意选择6个APP下载。</p>
          <p>你可以同时下载一个以及更多APP。 待下载全部结束后，点击下方的“应用体验”待体验完成后，奖励会自动到达个人账户。</p>
          <p>注:体验有以口A门，巴日平禁中途</p>
        </div>
      </div>
      <!-- 提现流程 -->
      <div class="aui-process">
        <h2>提现流程</h2>
        <div class="aui-process-text">
          <p>奖励到账后，可以提现至个人银行卡，50元起提现，提现手续费10%，请正确填写提现账号信息</p>
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
.aui-introduce {
  width: 100%;
  overflow: hidden;
  background: #f68c34;
} 
.aui-process {
  position: relative;
  margin: 0 auto 0.8rem;
  width: 85%;
  border-radius: 5px;
  padding: 0.2rem 0;
}
.aui-process h2 {
  color: #f9e3b0;
  font-size: 1.1rem;
  width: 100%;
  text-align: center;
  position: relative;
}
.aui-process h2:before {
  content: '';
  position: absolute;
  z-index: 0;
  top: 0rem;
  right: 21%;
  width: 40px;
  height: 49px;
  background-size: 30px;
  background-repeat: no-repeat;
  background-image: url(../../public/img/point_right.png);
}
.aui-process h2:after {
  content: '';
  position: absolute;
  z-index: 0;
  top: 0rem;
  left: 50%;
  width: 40px;
  height: 49px;
  margin-left: -90px;
  background-size: 30px;
  background-repeat: no-repeat;
  background-image: url(../../public/img/point_left.png);
}
.aui-process-text {
  color: #59201d;
  font-size: 0.8rem;
  z-index: 2;
  position: relative;
  background: #fff;
  box-shadow: 0 6px 24px #d45e00;
  border-radius: 3px;
  padding: 1rem;
  margin-top: 0.8rem;
}
.aui-process-text p {
  padding: 0.2rem 0;
  line-height: 1.5;
}
.aui-fiv-list {
  padding: 0.5rem 0;
}
.aui-introduce .aui-fiv-list a{
  padding: 0.3rem 0;
}
.aui-vip-img {
  width: 3rem;
  margin-right: 0.5rem;
}
.aui-introduce .aui-process-text h3{
  font-size: 0.98rem;
  font-weight: normal;
  margin-bottom: 0.3rem;
}
.aui-process-text .aui-fiv-list .aui-flex p {
  padding: 0;
  color: #59201d;
}

/* 会员使用手册 */
.aui-due-title {
  width: 60%;
  margin: 3rem auto 0.8rem;
  box-shadow: 0 6px 24px #fb6f00;
  border-radius: 5px;
  position: relative;
}
.aui-due-title:before {
  position: absolute;
  bottom: 0.4rem;
  right: 0.5rem;
  content: '';
  z-index: 1;
  width: 10px;
  height: 2.2rem;
  background-size: 8px;
  background-repeat: no-repeat;
  background-image: url(../../public/img/title_icon.png);
}
.aui-due-title:after {
    position: absolute;
    bottom: 0.4rem;
    left: 0.5rem;
    content: '';
    z-index: 1;
    width: 10px;
    height: 2.2rem;
    background-size: 8px;
    background-repeat: no-repeat;
    background-image: url(../../public/img/title_icon.png);
}
</style>