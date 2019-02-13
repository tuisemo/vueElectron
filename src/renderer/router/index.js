import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/cnode'
    },
    {
      path: '/cnode',
      name: 'cnode',
      component: require('@/views/Cnode').default
    },
    {
      path: '/cnode/detail/:id',
      name: 'cnodeDetail',
      component: require('@/components/Content/detail').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
