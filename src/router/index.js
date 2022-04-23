import Vue from 'vue'
import VueRouter from 'vue-router'
import StartPage from '../views/StartPage.vue'
import TeamRandom from '../views/TeamRandom.vue'
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
    path: '/team-random',
    name: 'TeamRandom',
    component: TeamRandom
  },
  {
    path: '/hard-random',
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
