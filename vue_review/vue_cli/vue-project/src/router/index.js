import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Course from '../views/Course.vue'
import Fe from '../views/Fe.vue'
import Rd from '../views/Rd.vue'
import User from '../views/User.vue'
import Details from '../views/Details.vue'
import Error from '../views/Error.vue'
import Test from '../views/Test.vue'
import Count from '../views/Count.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/course',
    name: 'Course',
    component: Course,
    children:[
      {
        path: 'fe',
        name: 'Fe',
        component: Fe
      },
      {
        path: 'rd',
        name: 'Rd',
        component: Rd
      }
    ]
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    // 起别名，可以通过这个名字访问到User页面
    alias: '/consumer'
  },
  {
    // 第三种路由传参方式
    path: '/details/:id/:price',
    name: 'Details',
    component: Details
  },
  // 页面重定向
  {
    path: '/test',
    // path: '/test/:id/:price',
    name: 'Test',
    component: Test,
    // redirect: '/'
    // redirect: '/details/:id/:price'

    // 路由的钩子函数（方式一：在配置路由时使用钩子函数）
    beforeEnter: (to, from, next) => {
      // console.log('to',to);
      // console.log('from',from);
      // console.log('next',next);
      // next()调用之后。才能实现跳转到页面
      next();
    }
  },
  {
    path: '/count',
    name: 'Count',
    component: Count
  },
  // 错误页面，一定要放在所有页面的最下面
  {
    path: '*',
    name: 'Error',
    component: Error
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
