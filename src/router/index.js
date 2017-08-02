import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Search from '@/view/search'
import Booking from '@/view/booking'
import Inquiry from '@/view/inquiry'
import Recipe from '@/view/recipe'
import Charge from '@/view/charge'
import Patient from '@/view/patient'
import Clinic from '@/view/ql-clinic'
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
      component: Booking
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
