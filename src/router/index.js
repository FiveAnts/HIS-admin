import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Search from '@/view/search'
import Booking from '@/view/yy-appointment'
import yydDetails from '@/view/yy-details'
import Inquiry from '@/view/inquiry'
import Recipe from '@/view/recipe'
import Charge from '@/view/charge'
import Patient from '@/view/patient'
import Clinic from '@/view/ql-clinic'
import Drug from '@/view/drug'
import Model from '@/view/model'
import Power from '@/view/power'
import Scheduling from '@/view/scheduling'
import Project from '@/view/project'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name:'首页',
      component: Home
    },
    {
      path: '/search',
      name:'查询',
      component: Search
    },
    {
      path: '/booking',
      name:' 预约',
      component: Booking
    },
    {
        path:'/booking/details',
        name:' 预约 / 预约详情',
        component: yydDetails
    },
    {
      path: '/inquiry',
      name:'问诊',
      component: Inquiry
    },
    {
      path: '/recipe',
      name:'处方',
      component: Recipe
    },
    {
      path: '/charge',
      name:'收费',
      component: Charge
    },
    {
      path: '/patient',
      name:'病人',
      component: Patient
    },
    {
      path: '/clinic',
      name:'诊所',
      component: Clinic
    },
    {
      path: '/drug',
      name:'药品',
      component: Drug
    },
    {
      path: '/model',
      name:'模块',
      component: Model
    },
    {
      path: '/power',
      name:'系统权限',
      component: Power
    },
    {
      path: '/scheduling',
      name:'排班',
      component: Scheduling
    },
    {
      path: '/project',
      name:'项目',
      component: Project
    } 
  ]
})
