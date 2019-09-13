import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//1.引入第三方的组件库 mint-ui
// 1.1 完成引入所有组件
import MintUI from 'mint-ui'
// 1.2 单引入mint-ui样式组件
import "mint-ui/lib/style.css"
// 1.3 将mint-ui 注册
Vue.use(MintUI);
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 页头全局组件
import HeadList from './components/Head_list'

Vue.config.productionTip = false

// 注册全局组件
Vue.component("head-list",HeadList);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
