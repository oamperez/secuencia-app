import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import Play from '@/pages/Play'
import Advanced from '@/pages/Advanced'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/primary',
      name: 'Play',
      component: Play
    },
    {
      path: '/advanced',
      name: 'Advanced',
      component: Advanced
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
