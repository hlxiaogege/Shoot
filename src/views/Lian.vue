<template>
  <div>
    <van-field readonly clickable
  label="城市" :value="value" placeholder="选择城市" @click="showPicker = true"/>
  <van-popup v-model="showPicker" position="bottom">
    <van-picker show-toolbar :columns="columns"
      @cancel="showPicker = false" @confirm="onConfirm"/>
  </van-popup>
  </div>
</template>
<script>
import AreaList from '../../public/js/area.js'
export default {
  data() {
    return {
      value: '',
      showPicker: false,
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    }
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    }
  },
  
}
</script>
<style>
  
</style>
