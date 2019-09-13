import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'

Vue.use(Router)

export default new Router({
  routes: [
    // 主页
    {path:"/",component:Index}, 
    {path:"/index",component:Index},
  ]
})
