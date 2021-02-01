import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import blogDetail from '../views/blogDetail.vue'
import postBlog from '../views/postBlog.vue'
import Error from '../views/error.vue'
import Regist from '../views/regist.vue'
import commentBlog from '../views/commentBlog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist
  },
  {
    path: '/blog/detail/:blogId',
    name: 'blogDetail',
    component: blogDetail
  },
  {
    path: '/blog/post',
    name: 'postBlog',
    component: postBlog
  },
  {
    path: '/blog/content/:blogId',
    name: 'commentBlog',
    component: commentBlog
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
