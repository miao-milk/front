import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menber from '../views/Menber.vue'
import Data from '../views/Data.vue'
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


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  }
]

const router = new VueRouter({
  routes
})

export default router
