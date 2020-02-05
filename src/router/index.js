import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleMain from '../views/ArticleMain.vue'

import MainList from '../views/MainList.vue'

import ArticleCreate from '../views/ArticleCreate.vue'

import ModifyAriticle from '../views/ModifyAriticle.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/article/ArticleMain'
  },
  {
    path: '/article/ArticleMain',
    component: ArticleMain,
    children: [{
        path: '/article/ArticleMain/list',
        component: MainList
      },
      {
        path: '/article/ArticleMain/create',
        component: ArticleCreate
      },
      {
        path: '/article/modify/:id',
        component: ModifyAriticle
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
