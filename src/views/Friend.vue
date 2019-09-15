<template>
  <section class="aui-scrollView">
    <mt-header title="分享推广">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="line"></div>
    <div class="aui-flex">
      <div class="aui-flex-box">
        <h5>推荐二维码</h5>
      </div>
    </div>
    <div class="aui-share-box">
      <div class="aui-share-slide" id="thumbs">
        <div class="aui-share-img">
          <a href="javascript:;">
            <img src="../../public/img/code-001.png">
          </a>
          <img class="erwm" src="../../public/img/erweima.jpg" alt="">
        </div>
        <div class="aui-share-img">
          <a href="javascript:;">
            <img src="../../public/img/code-002.png">
          </a>
          <img class="erwm" src="../../public/img/erweima.jpg" alt="">
        </div>
        <div class="aui-share-img">
          <a href="javascript:;">
            <img src="../../public/img/code-003.png">
          </a>
          <img class="erwm" src="../../public/img/erweima.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="aui-flex">
      <div class="aui-flex-box">
        <h5>推荐链接</h5>
      </div>
    </div>
    <div class="aui-share-link">
      <h2>http://www.a-ui.cn/module/document/haitao.html</h2>
      <button>复制链接</button>
    </div>
  </section>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.aui-scrollView{
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  margin-top: 0;
  padding-bottom: 55px;
}
.aui-flex-box h5 {
  color: #333;
  font-weight: normal;
  font-size: 0.92rem;
  position: relative;
  padding-left: 0.5rem;
  height: 1.25rem;
  line-height: 1.25rem;
}
.aui-flex-box h5:after {
  content: '';
  position: absolute;
  z-index: 0;
  top: 0.2rem;
  left: 1px;
  width: 0.25rem;
  height: 75%;
  border-radius: 4px;
  background-color: #049bff;
  background: linear-gradient(#049bff, #28a9ff);
}
.aui-share-box {
  padding-left: 0;
  overflow: hidden;
  height: 28.2rem;
  padding: 0.2rem 0;
}

.aui-share-slide {
  width: auto;
  white-space: nowrap;
  overflow: auto;
  height: 30rem;
  font-size: 0;
  padding-right: 1rem;
}
.aui-share-img {
  display: inline-block;
  vertical-align: top;
  border-radius: 5px;
  padding-left: 2rem;
}
.aui-share-img {
  width: 85%;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
}
.aui-share-img .erwm{
  width: 8rem;
  height: 8rem;
  position: absolute;
  left: 33%;
  bottom: 15%;
}
.aui-share-link {
  padding: 0 1rem;
}
.aui-share-link h2 {
  background: #efefef;
  height: 2.5rem;
  line-height: 2.5rem;
  color: #585d65;
  font-size: 1rem;
  font-weight: normal;
  border: 1px solid #efefef;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  padding: 0 1rem;
  word-wrap: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: justify;
}
.aui-share-link button{
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