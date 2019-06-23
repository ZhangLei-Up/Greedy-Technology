import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/Home/Home'
import Mycenter from '@/components/Mycenter/Mycenter'
import Details from '@/components/Details/Details'
import Order from '@/components/Order/Order'
import Payment from '@/components/Payment/Payment'
import Payments from '../components/Payment/Payments'
import Teacher from '../components/Teacher/Teather.vue'
import TeacherNum from '../components/Teacher/TeacherNum.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '贪心科技AI学社 首页'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '贪心科技AI学社 首页'
      }
    },
    {
      path: '/mycenter',
      name: 'mycenter',
      component: Mycenter,
      meta: {
        title: '我的'
      }
    },
    {
      path: '/details',
      name: 'details',
      component: Details,
      meta: {
        title: '机器学习特训营'
      }
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: {
        title: '订单详情'
      }
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment,
      meta: {
        title: '我的助教'
      }
    },
    {
      path: '/payments',
      name: 'payments',
      component: Payments,
      meta: {
        title: '我的助教'
      }
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: Teacher,
      meta: {
        title: '我的学习顾问'
      }
    },
    {
      path: '/teachernum',
      name: 'teachernum',
      component: TeacherNum,
      meta: {
        title: '数据统计'
      }
    },
    {
      path: '*',
      redirect: '/home',
      meta: {
        title: '贪心科技AI学社 首页'
      }
    }
    
  ]
})
