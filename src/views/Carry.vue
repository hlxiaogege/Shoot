<template>
  <div>
    <mt-header title="提现记录">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="line"></div>
    <div class="aui-carry-list">
      <div class="aui-carry-table">
        <table>
          <thead>
            <tr>
              <th>手机号</th>
              <th>金额</th>
              <th>状态</th>
              <th>时间</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>18801061167</td>
              <td>199.90</td>
              <td>审核中</td>
              <td>2019.09.09</td>
            </tr>
            <tr>
              <td>18801061167</td>
              <td>199.90</td>
              <td>审核中</td>
              <td>2019.09.09</td>
            </tr>
            <tr>
              <td>18801061167</td>
              <td>199.90</td>
              <td>审核中</td>
              <td>2019.09.09</td>
            </tr>
            <tr>
              <td>18801061167</td>
              <td>199.90</td>
              <td>审核中</td>
              <td>2019.09.09</td>
            </tr>
            <tr>
              <td>18801061167</td>
              <td>199.90</td>
              <td>审核中</td>
              <td>2019.09.09</td>
            </tr>
            <tr>
              <td>18801061167</td>
              <td>199.90</td>
              <td>审核中</td>
              <td>2019.09.09</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.aui-carry-table {
  width: 100%;
  margin: 0 auto;
  background: #fff;
  overflow: hidden;
}
.aui-carry-table table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
}
thead ,tbody{
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.aui-carry-table th {
  background: #e2f4ff;
  color: #898178;
  font-size: 0.85rem;
  font-weight: normal;
  text-align: center;
  padding: 0.7rem 0;
  border-bottom: 1px solid #d0e7f3;
}
.aui-carry-table td {
  background: #f5fcff;
  color: #909088;
  font-size: 0.85rem;
  font-weight: normal;
  text-align: center;
  padding: 0.9rem 0;
  position: relative;
}
.aui-carry-table td:after{
  content: '';
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #dff1fb;
  transform: scaleY(0.5);
  transform-origin: 0 100%;
}
</style>