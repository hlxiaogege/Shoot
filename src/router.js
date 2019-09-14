import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Card from './views/Card'
import Addcard from './views/Addcard'
import Carry from './views/Carry'
import Group from './views/Group'
import Page from './views/Page'


Vue.use(Router)

export default new Router({
  routes: [
    // 主页
    {path:"/",component:Index}, 
    {path:"/index",component:Index},
    // 银行卡
    {path:"/card",component:Card},
    // 添加银行卡
    {path:"/addcard",component:Addcard},
    // 提现
    {path:"/carry",component:Carry},
    // 团队
    {path:"/group",component:Group},
    // 翻页
    {path:"/page",component:Page},
  ]
})
