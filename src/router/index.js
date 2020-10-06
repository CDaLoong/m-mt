import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import blankPage from '@/layout/blank'
import Index from '@/page/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [{
        path: '/',
        name: 'index',
        component: Index,
      }]
    }, {
      path: '/blank',
      name: 'blankPage',
      component: blankPage,
    }

  ]
})
