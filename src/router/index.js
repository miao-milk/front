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
    component: Data
  }
]

const router = new VueRouter({
  routes
})

export default router
