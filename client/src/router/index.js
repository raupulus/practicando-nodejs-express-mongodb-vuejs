import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail/Detail'
import CreateRecipe from '@/components/CreateRecipe/CreateRecipe'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
      props: true
    },
    {
      path: '/create',
      name: 'create',
      component: CreateRecipe,
      props: true
    }
  ]
})
