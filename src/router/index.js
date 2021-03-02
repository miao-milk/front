import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Menber from '../views/Menber.vue'
import Data from '../views/Data.vue'
import Backstage from '../views/Backstage'
import Strategy from '../views/Strategy'
import MenblePortrait from '../components/Menber/MenberPortrait'
import MenberList from '../components/Menber/MenberList'
import MenberLabel from '../components/Menber/MenberLabel'
import MenberGrade from '../components/Menber/MenberGrade'
import MenberGroup from '../components/Menber/MenberGroup'
import Group from '../components/Group'
import ActionAnalysis from '../components/Analysis/ActionAnalysis.vue'
import GoodsAnalysis from '../components/Analysis/GoodsAnalysis'
import MenberAnalysis from '../components/Analysis/MenberAnalysis'
import RAnalysis from '../components/Analysis/RAnalysis'
import FAnalysis from '../components/Analysis/FAnalysis'
import MAnalysis from '../components/Analysis/MAnalysis'
import StrategyList from '../components/Backstage/StrategyList'
import MessageList from '../components/Backstage/MessageList'
import information from '../components/Backstage/information'
import ChartAnalysis from '../components/Strategy/ChartAnalysis'
import Message from '../components/Strategy/Message'
import sendMessage from '../components/sendMessage/send-message'
import MessageAnalysis from '../components/Strategy/MessageAnalysis'

Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/sendMessage',
    name: 'sendMessage',
    component: sendMessage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Group',
    name: 'Group',
    component: Group
  },
  {
    path: '/menber',
    name: 'Menber',
    component: Menber,
    children: [
      {
        path: '/menberList',
        name: 'menberList',
        component: MenberList
      },
      {
        path: '/menberGrade',
        name: 'menberGrade',
        component: MenberGrade
      },
      {
        path: '/menberLabel',
        name: 'menberLabel',
        component: MenberLabel
      },
      {
        path: '/menberGroup',
        name: 'menberGroup',
        component: MenberGroup
      },
      {
        path: '/menberPortrait',
        name: 'menberPortrait',
        component: MenblePortrait
      }
    ]
  },
  {
    path: '/Strategy',
    name: 'Strategy',
    component: Strategy,
    children: [
      {
        path: '/ChartAnalysis',
        name: 'ChartAnalysis',
        component: ChartAnalysis
      },
      {
        path: '/Message',
        name: 'Message',
        component: Message
      },
      {
        path: '/MessageAnalysis',
        name: 'MessageAnalysis',
        component: MessageAnalysis
      }
    ]
  },
  {
    path: '/data',
    name: 'Data',
    component: Data,
    children: [
      {
        path: '/ActionAnalysis',
        name: 'ActionAnalysis',
        component: ActionAnalysis
      },
      {
        path: '/GoodsAnalysis',
        name: 'GoodsAnalysis',
        component: GoodsAnalysis
      },
      {
        path: '/MenberAnalysis',
        name: 'MenberAnalysis',
        component: MenberAnalysis
      },
      {
        path: '/RAnalysis',
        name: 'RAnalysis',
        component: RAnalysis
      },
      {
        path: '/FAnalysis',
        name: 'FAnalysis',
        component: FAnalysis
      },
      {
        path: '/MAnalysis',
        name: 'MAnalysis',
        component: MAnalysis
      }
    ]
  },
  {
    path: '/Backstage',
    name: 'Backstage',
    component: Backstage,
    children: [
      {
        path: '/StrategyList',
        name: 'StrategyList',
        component: StrategyList
      },
      {
        path: '/MessageList',
        name: 'MessageList',
        component: MessageList
      },
      {
        path: '/information',
        name: 'information',
        component: information
      },
      {
        path: '/RAnalysis',
        name: 'RAnalysis',
        component: RAnalysis
      },
      {
        path: '/FAnalysis',
        name: 'FAnalysis',
        component: FAnalysis
      },
      {
        path: '/MAnalysis',
        name: 'MAnalysis',
        component: MAnalysis
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


// 导航守卫
// 参数1 : to 目标路由对象
// 参数2 : from 来源路由对象
// 参数3 : next() 下一步
router.beforeEach((to, from, next) => {
  // 1. 判断是不是登录页面
  // 是登录页面
  if(to.path === '/login') {
    next()
  } else {
    // 不是登录页面
    // 2. 判断 是否登录过
    let token = localStorage.getItem('userToken')
    token ? next() : next('/login')
  }
})

export default router
