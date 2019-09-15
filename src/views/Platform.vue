<template>
  <div>
    <mt-header title="关于平台">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="line"></div>
    <div class="aui-introduce">
      <div class="aui-img-in">
        <img src="../../public/img/zb-bg.png">
      </div>
      <!-- AUI素材网APP -->
      <div class="aui-process">
        <h2>AUI素材网APP</h2>
        <div class="aui-process-text">
          <h3>为什么在AUI素材网APP上下载应用能赚钱？</h3>
          <p>每款APP上线后都需要大量的下载量来提升自己APP的搜索位置(俗称刷榜) 。各类型APP都有相应的排名，而排名的先后主要是靠下载量决定。这就导致很多APP商家会花钱增加下载量。而我们要做的就是下载该商家所要推广的APP获得相应佣金。你只需要会用手机在平台下载软件就可以了! </p>
          <p>AUI素材网平台集结了市面上大部分APP下载任务，主要服务范围就是帮助各种APP赚取下载量，提高APP在应用商店的下载排名。所以大家可以在AUI素材网平台下载APP赚佣金。</p>
        </div>
      </div>
      <!-- 工作原理 -->
      <div class="aui-process">
        <h2>工作原理</h2>
        <div class="aui-process-text">
          <h3>AUI素材网APP的工作原理？</h3>
          <p>本软件将会自动捕捉用户的.网络ID,用于APP下载，下载完成之后，使用用户的网络ID模拟体验所 下载的APP，以增加此APP日活跃用户，增加该APP的曝光量。 </p>
        </div>
      </div>
      <!-- 平台要求 -->
      <div class="aui-process">
        <h2>平台要求</h2>
        <div class="aui-process-text">
          <h3>AUI素材网平台体验要求？</h3>
          <p>商家为了提防广告费用被刷，后台都有实时监控功能，因试玩流程的不完整将无法获得商家佣金，APP下载后必须体验1~3分钟，这样此任务才会视为有效，为了在体验时不占用户的时间，任务体验期间可后台运行。 </p>
        </div>
      </div>
      <!-- 手机流量 -->
      <div class="aui-process">
        <h2>手机流量</h2>
        <div class="aui-process-text">
          <h3>AUI素材网APP下载任务时是否会消耗用户的手机流量，是否占用内存？</h3>
          <p>任务下载时，只需要用户网络ID去识别下载，APP会下载到平台服务器上，不会下载到用户手机，所以几乎不消耗用户的手机流量。也无需担心占用手机内存。 </p>
          <p>所以说在AUI素材网平台，你可以轻松赚钱，轻松分享，集聚人脉，成就梦想!</p>
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
.aui-process-text h3 {
  font-size: 0.9rem;
  color: #de3a2b;
  font-weight: normal;
  margin-bottom: 0.3rem;
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
</style>