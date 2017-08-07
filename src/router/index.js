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
import Drug from '@/view/drug'
import Model from '@/view/model'
import Power from '@/view/power'
import Scheduling from '@/view/scheduling'
import Project from '@/view/project'
import PersonalInfo from '@/view/personalInfo'
/*2017/8/5*/
import Register from '@/view/register'
import Login from '@/view/login'

/*2017/8/3-----lxy*/
import Item from '@/view/Project/Item'
import Meal from '@/view/Project/Meal'
import regFee from '@/view/Project/regFee'
import addItem from '@/view/Project/addItem'
import addMeal from '@/view/Project/addMeal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'个人信息',
      component: PersonalInfo
    },
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
      path: '/count',
      name:'诊所',
      component: Count
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
    
   /*2017/8/3-----lxy*/
    {
      path: '/project', 
      component: Project ,
      children: [
        { path: '/project/item', component: Item, name:'项目' }, 
        { path: '/project/meal', component: Meal, name:'套餐'},
        { path: '/project/regFee', component: regFee, name:'挂号费'}, 
      ]
    },
    { path: '/project/addItem', component: addItem, name:'新增项目'}, 
    { path: '/project/addMeal', component: addMeal, name:'新增套餐'}, 
    { path: '/register', component: Register, name:'注册'},
    { path: '/login', component: Login, name:'登录'},
  ]
})