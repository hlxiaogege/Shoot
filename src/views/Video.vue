<template>
  <div class="main">
    <mt-header title="视频介绍">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="line"></div>
    <img src="../../public/img/default_bg.png" alt="">
     <div>
        <swiper :options="swiperOption">
          <swiper-slide class="swiper-slide">
            <img id="" class="play_btn" src="../../public/img/play_btn.png" @click="play1">
            <video id="v1" src="../../public/img/x.mp4"></video>
            <div class="video_font">主标题</div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <swiper-slide class="swiper-slide">
              <img id="" class="play_btn" src="../../public/img/play_btn.png" @click="play2">
              <video id="v2" src="../../public/img/x.mp4"></video>
              <div class="video_font">主标题</div>
            </swiper-slide>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <swiper-slide class="swiper-slide">
              <img id="" class="play_btn" src="../../public/img/play_btn.png" @click="play3">
              <video id="v3" src="../../public/img/x.mp4"></video>
              <div class="video_font">主标题</div>
            </swiper-slide>
          </swiper-slide>
            <!-- 左右箭头 --> 
          <div class="swiper-button-prev" slot="button-prev"></div> 
          <div class="swiper-button-next" slot="button-next"></div> 
        </swiper>
     </div>
     <div class="aui-swiper-text-content">
       <h2>视频（Video）泛指将一系列静态影像以电信号的方式加以捕捉、纪录、处理、储存、传送与重现的各种技术。连续的图像变化每秒超过24帧（frame）画面以上时，根据视觉暂留原理，人眼无法辨别单幅的静态画面；看上去是平滑连续的视觉效果，这样连续的画面叫做视频。视频技术最早是为了电视系统而发展</h2>
       <p>视频可以用逐行扫描或隔行扫描来传送，交错扫描是早年广播技术不发达，带宽甚低时用来改善画质的方法.</p>
     </div>
     <router-link to="/" class="video_btn">分享给好友</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption:{
        //显示分页
        // pagination: {
        //   el: '.swiper-pagination'
        // },
        //设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next', 
          prevEl: '.swiper-button-prev'
        },
      }
    }
  },
  methods: {
    play1(){
      if(v1.paused){
        v1.play();
      }else{
        v1.pause();
      }
    },
    play2(){
      if(v2.paused){
        v2.play();
      }else{
        v2.pause();
      }
    },
    play3(){
      if(v3.paused){
        v3.play();
      }else{
        v3.pause();
      }
    },
  },
}
</script>
<style scoped>
.main {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
}
.main_bg {
  width: 100%;
}
.swiper-container{
  width: 100%;
  margin-bottom: 53px;
  overflow: visible!important;
  margin-top: 20px;
  position: absolute;
  top:6rem
}
.swiper-container .swiper-wrapper .swiper-slide {
  position: relative;
  width: 100%;
  border-radius: 20px;
  text-align: center;
}
.swiper-container .swiper-wrapper .swiper-slide .play_btn {
  z-index: 99;
  position: absolute;
  width: 12%;
  height: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 12%;
  margin: auto;
}
.swiper-slide video {
  width: 80%;
  /* height: 300px; */
  border: 1px solid #3325EF;
  border-radius: 5px;
}
.swiper-button-prev, .swiper-button-next{
  width: 15px;
  height: 26px;
  background-size: 100%;
}
.video_font {
  text-align: center;
  font-size: 4vw;
  color: white;
  letter-spacing: .8vw;
}

.aui-swiper-text-content {
  position: absolute;
  top: 45%;
  padding: 1rem 2rem 4rem 2rem;
}
.aui-swiper-text-content h2 {
  color: rgba(163, 59, 173,0.99);
  font-size: 0.9rem;
  line-height: 20px;
  font-weight: normal;
}
.aui-swiper-text-content p {
  color: rgba(163, 59, 173,0.99);
  font-size: 0.9rem;
  font-weight: normal;
  margin: 1rem 0;
  line-height: 20px;
}
.video_btn{
  display: inline-block;
  position: absolute;
  bottom: 10vw;
  width: 85%;
  height: 15vw;
  line-height: 15vw;
  border-radius: 90px;
  left: 8%;
  background: #C13ED8;
  text-align: center;
  font-size: 4vw;
  color: white;
  text-decoration: none;
}
</style>