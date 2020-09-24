import Vue from 'vue'
import Router from 'vue-router'
import OrdersList from '@/components/orders-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'orders-list',
      component: OrdersList
    }
  ]
})
