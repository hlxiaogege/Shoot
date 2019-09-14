<template>
  <div>
    <mt-header title="添加银行卡">
      <router-link to="/card" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="line"></div>
    <div class="vueBox">
      <div class="msg-box b-line">
        <span class="msg-item-tit">收款银行</span>
        <div class="input-right">
          <input placeholder="请选择收款银行" readonly @focus="showBank" :value="bankContent">
          <div class="down_arrow"></div>
        </div>
      </div>
      <div class="msg-box b-line">
        <span class="msg-item-tit">收款银行支行</span>
        <div class="input-right">
          <input placeholder="请输入收款银行支行">
        </div>
      </div>
      <div class="msg-box b-line">
        <span class="msg-item-tit">银行卡</span>
        <div class="input-right">
          <input placeholder="请输入银行卡">
        </div>
      </div>
      <div class="msg-box b-line">
        <span class="msg-item-tit">收款户名</span>
        <div class="input-right">
          <input placeholder="请输入收款户名">
        </div>
      </div>
      <div class="msg-box b-line">
        <span class="msg-item-tit">收款地区</span>
        <div class="input-right">
          <input placeholder="请输入收款地区" readonly @focus="showPosition" :value="positionContent">
          <div class="down_arrow"></div>
        </div>
      </div>
      <div class="div-btn">
        <a href="javascript:;" class="btn-submit">提交</a>
      </div>
    </div>
    <!-- 银行 -->
    <mt-popup v-model="bankShow" position="bottom">
      <ul class="mint-popup-head">
        <li @click="cancel">取消</li>
        <li @click="comfirm">确认</li>
      </ul>
      <mt-picker :slots="Bslots"  @change="onBankChange"></mt-picker>
    </mt-popup>
    <!-- 位置 -->
    <mt-popup v-model="positionShow" position="bottom">
      <ul class="mint-popup-head">
        <li @click="Pcancel">取消</li>
        <li @click="Pcomfirm">确认</li>
      </ul>
      <mt-picker :slots="Pslots"  @change="onPositionChange"></mt-picker>
    </mt-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bankShow:false,
      positionShow:false,
      Bslots: [
        {
          flex: 1,
          values: ['工商银行', '农业银行', '招商银行', '建设银行', '中国银行', '平安银行', '上海银行', '光大银行', '邮政储蓄银行', '浦发银行'],
          className: 'slot1',
          textAlign: 'right'
        },
      ],
      Pslots: [
         {
          flex: 1,
          values: ['北京', '上海', '天津', '重庆', '河北', '山西'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['孝感市', '黄冈市', '咸宁市', '武汉市', '荆州市', '襄阳市'],
          className: 'slot3',
          textAlign: 'left'
        }
      ],
      bankContent:"请选择银行",
      positionContent:"请选择收款地区",
    }
  },
  methods: {
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    showBank(){
      this.bankShow=true;
    },
    onBankChange (picker, values) {
      this.bankContent=values[0];
    },
    cancel(){
      this.bankContent="",
      this.bankShow=false;
    },
    comfirm(){
      this.bankShow=false;
    },
    showPosition(){
      this.positionShow=true;
    },
    Pcancel(){
      this.positionContent="",
      this.positionShow=false;
    },
    Pcomfirm(){
      this.positionShow=false;
    },
    onPositionChange(picker, values){
      this.positionContent=values[0]+"-"+values[1];
    }
  },
}
</script>
<style>
/* mint-ui样式 */
.mint-popup{
  width: 100%;
}
.picker-item{
  text-align: center;
  font-size: .24rem;
  color: #999;
}
.picker-selected {
  font-size: 0.9rem;
}

.mint-popup-head{
  width: 100%;
  height: 2.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
}
.mint-popup-head li {
  width: 50%;
  height: 100%;
  padding: 0.8rem;
  display: flex;
  align-items: center;
}
.mint-popup-head li:last-child {
  color: #26A2FF;
  justify-content: flex-end;
}


.msg-box {
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: .35rem;
  padding-right: .24rem;
}
.b-line{
  position: relative;
}
.b-line::after{
  content: '';
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #e2e2e2;
}
.msg-item {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.msg-item-tit {
  width: auto;
  white-space: nowrap;
  font-size: 0.85rem;
  color: #2B2B2B;
  padding-left: 1rem;
}
.input-right {
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.input-right input {
  flex: 1;
  height: 100%;
  text-align: right;
  font-size: 0.85rem;
  outline: none;
  padding-right: 0.5rem;
  border: none;
}
.down_arrow {
  position: relative;
  width: 0.3rem;
  height: 0.3rem;
}
.down_arrow:after {
  content: '';
  position: absolute;
  top: 0.9rem;
  left: -0.4rem;
  border: 0.2rem solid transparent;
  border-top: 0.22rem solid #999;
}
.div-btn{
  width: 100%;
  padding-right: .3rem;
  margin-top: .8rem;
  display: flex;
  justify-content: center;
}
.btn-submit{
  background-color: #049bff;
  background: linear-gradient(#049bff, #28a9ff);
  height: 42px;
  line-height: 42px;
  border: none;
  color: #fff;
  border-radius: 2px;
  width: 92%;
  font-size: 1rem;
  box-shadow: 0 3px 9px #aedfff;
  text-align: center;
}
</style>