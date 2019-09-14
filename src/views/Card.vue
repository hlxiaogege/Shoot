<template>
  <div>
    <mt-header title="银行卡管理">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="line"></div>
    <div class="aui-cash-list">
      <a href="javascript:;" class="aui-card-coll">
        <div class="aui-flex">
          <div class="aui-cash-logo">
            <img src="../../public/img/card-001.png">
          </div>
          <div class="aui-flex-box">
            <h2>中信银行储蓄卡</h2>
          </div>
          <span class="aui-signing">
            <i class="icon icon-delete"></i>
          </span>
        </div>
        <div class="aui-palace">
          <div class="aui-palace-grid">
            <div class="aui-palace-grid-text">
              <h2>
                <i class="icon icon-more"></i>
              </h2>
            </div>
          </div>
          <div class="aui-palace-grid">
            <div class="aui-palace-grid-text">
              <h2>
                <i class="icon icon-more"></i>
              </h2>
            </div>
          </div>
          <div class="aui-palace-grid">
            <div class="aui-palace-grid-text">
              <h2>
                <i class="icon icon-more"></i>
              </h2>
            </div>
          </div>
           <div class="aui-palace-grid">
            <div class="aui-palace-grid-text">
              <h2 class="number">
                <span>7899</span>
              </h2>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </a>
      <a href="javascript:;" class="aui-card-coll">
        <div class="aui-flex">
          <div class="aui-cash-logo">
            <img src="../../public/img/card-002.png">
          </div>
          <div class="aui-flex-box">
            <h2>中国工商银行储蓄卡</h2>
          </div>
          <span class="aui-signing">
            <i class="icon icon-delete"></i>
          </span>
        </div>
        <div class="aui-palace">
          <div class="aui-palace-grid">
            <div class="aui-palace-grid-text">
              <h2>
                <i class="icon icon-more"></i>
              </h2>
            </div>
          </div>
          <div class="aui-palace-grid">
            <div class="aui-palace-grid-text">
              <h2>
                <i class="icon icon-more"></i>
              </h2>
            </div>
          </div>
          <div class="aui-palace-grid">
            <div class="aui-palace-grid-text">
              <h2>
                <i class="icon icon-more"></i>
              </h2>
            </div>
          </div>
           <div class="aui-palace-grid">
            <div class="aui-palace-grid-text">
              <h2 class="number">
                <span>2872</span>
              </h2>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </a>
      <a href="javascript:;" class="aui-card-coll">
        <div class="aui-flex">
          <div class="aui-cash-logo">
            <img src="../../public/img/card-003.png">
          </div>
          <div class="aui-flex-box">
            <h2>农业银行储蓄卡</h2>
          </div>
          <span class="aui-signing">
            <i class="icon icon-delete"></i>
          </span>
        </div>
        <div class="aui-palace">
          <div class="aui-palace-grid">
            <div class="aui-palace-grid-text">
              <h2>
                <i class="icon icon-more"></i>
              </h2>
            </div>
          </div>
          <div class="aui-palace-grid">
            <div class="aui-palace-grid-text">
              <h2>
                <i class="icon icon-more"></i>
              </h2>
            </div>
          </div>
          <div class="aui-palace-grid">
            <div class="aui-palace-grid-text">
              <h2>
                <i class="icon icon-more"></i>
              </h2>
            </div>
          </div>
           <div class="aui-palace-grid">
            <div class="aui-palace-grid-text">
              <h2 class="number">
                <span>2693</span>
              </h2>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </a>
      <div class="aui-code-btn">
        <router-link to="/addcard">添加银行卡</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.mint-header{
  background: #fff !important;
  color: #333 !important;
  height: 2.8rem !important;
  font-size: 0.95rem !important;
}
.line{
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #e2e2e2;
}
img {
  border: 0;
  width: 100%;
  height: auto;
  display: block;
}
.aui-cash-list {
  padding: 1rem;
}
.aui-cash-list .aui-card-coll {
  background-color: #ff7840;
  background: linear-gradient(to right, #fe5244 , #ff7840);
  box-shadow: 0 3px 9px #ffbb9e;
  border-radius: 5px;
  padding: 1rem 1rem;
  margin-bottom: 0.8rem;
  display: block;
}
.aui-cash-list .aui-card-coll .aui-flex {
  padding: 0;
}
.aui-flex {
  display: flex;
  align-items: center;
  padding: 0.8rem;
  position: relative;
}
.aui-cash-list .aui-cash-logo {
  width: 30px;
  height: 30px;
  border: 3px solid rgba(255, 255, 255, 1);
  border-radius: 100%;
  overflow: hidden;
  margin-right: 0.5rem;
  box-sizing: border-box;
}
.aui-flex-box {
  flex: 1;
  min-width: 0;
  font-size: 14px;
  color: #333;
}
.aui-cash-list .aui-flex-box h2 {
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 0;
  font-weight: normal;
}
.aui-signing {
  color: white;
  font-size: 0.8rem;
  position: absolute;
  top: 0.4rem;
  right: 0.1rem;
}
.icon-delete {
  background-image: url(../../public/img/delete.png);
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
.aui-cash-list .aui-card-coll .aui-palace {
  padding: 0;
}
.clearfix{
  height: 0;
  clear: both;
}
.aui-palace-grid {
  position: relative;
  float: left;
  width: 25%;
  box-sizing: border-box;
}
.aui-cash-list .aui-card-coll .aui-palace-grid {
  background: none;
  padding: 0.2rem 0;
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
.aui-cash-list .aui-card-coll .aui-palace-grid-text h2 {
  text-align: center;
}
.aui-cash-list .aui-card-coll h2 {
  color: #fff;
  font-size: 1.2rem;
}
.aui-cash-list .number{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 2rem;
}
.icon-more {
  background-image: url(../../public/img/more.png);
  width: 40px;
  height: 30px !important;
  background-size: 40px;
}
.icon {
  display: block;
  border: none;
  float: left;
  background-repeat: no-repeat;
}

/* 添加银行卡 */
.aui-code-btn {
  padding: 1rem 0 0.5rem 0;
}
.aui-code-btn a{
  display: block;
  text-align: center;
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