import Vue from 'vue'
import VueRouter from 'vue-router'
import shangjialogo from '../pages/shangjialogo.vue'
import xiangqing from '../pages/xiangqing.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: resolve => require(['../pages/home'],resolve),
    meta: {
      title:'home'
    }
  },
  {
    name:"商家logo",
    path: '/shangjialogo',
    component: shangjialogo
  },
  {
    name:"商品详情",
    path: '/xiangqing',
    component: xiangqing
  }
]
export default new VueRouter({
  routes
})
