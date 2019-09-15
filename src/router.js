import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Card from './views/Card'
import Addcard from './views/Addcard'
import Carry from './views/Carry'
import Group from './views/Group'
import Page from './views/Page'
import Video from './views/Video'
import Join from './views/Join'
import Share from './views/Share'
import Platform from './views/Platform'
import Update from './views/Update'
import Friend from './views/Friend'
import Download from './views/Download'
import Service from './views/Service'
import Login from './views/Login'
import Forget from './views/Forget'
import Reg from './views/Reg'


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
    // 视频
    {path:"/video",component:Video},
    // 加入我们
    {path:"/join",component:Join},
    // 分享
    {path:"/share",component:Share},
    // 关于平台
    {path:"/platform",component:Platform},
    // 修改密码
    {path:"/update",component:Update},
    // 分享好友
    {path:"/friend",component:Friend},
    // APP下载
    {path:"/download",component:Download},
    // 联系客服
    {path:"/service",component:Service},
    // 登录
    {path:"/login",component:Login},
    // 忘记密码
    {path:"/forget",component:Forget},
    // 立即注册
    {path:"/reg",component:Reg},
  ]
})
