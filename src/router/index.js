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
import Count from '@/view/ql-count'
import countTubiao1  from '@/view/count/yiliao-bingren-tubiao'
import countHz1  from '@/view/count/yiliao-br-huizong'
import countMx1  from '@/view/count/yiliao-br-mingxi'
import Drug from '@/view/drug'
import Model from '@/view/model'
import Power from '@/view/power'
import Scheduling from '@/view/scheduling'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/search',
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
      component: Inquiry
    },
    {
      path: '/recipe',
      component: Recipe
    },
    {
      path: '/charge',
      component: Charge
    },
    {
      path: '/patient',
      component: Patient
    },
    {
      path: '/clinic',
      component: Clinic
    },
    {
      path: '/count',
      component: Count,
      children:[
      {
        path:'/yiliao-bingren-tubiao',
        component: countTubiao1
      },{
        path:'/yiliao-bingren-huizong',
        component: countHz1
      },{
        path:'/yiliao-bingren-mingxi',
        component: countMx1
      }]
    },
    {
      path: '/drug',
      component: Drug
    },
    {
      path: '/model',
      component: Model
    },
    {
      path: '/power',
      component: Power
    },
    {
      path: '/scheduling',
      component: Scheduling
    } 
    
  ]
})
