import Vue from 'vue'
import VueRouter from 'vue-router'
import StartPage from '../views/StartPage.vue'
import TwoFive from '../views/TwoFive.vue'
import ThreeFive from '../views/ThreeFive.vue'
import TwoSix from '../views/TwoSix.vue'
import HardRandom from '../views/HardRandom.vue'
import Result from '../views/Result.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: StartPage
  },
  {
    path: '/two-five',
    name: 'TwoFive',
    component: TwoFive
  },
  {
    path: '/three-five',
    name: 'ThreeFive',
    component: ThreeFive
  },
  {
    path: '/two-six',
    name: 'TwoSix',
    component: TwoSix
  },
  {
    path: '/random',
    name: 'HardRandom',
    component: HardRandom
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
