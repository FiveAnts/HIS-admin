<template>
  <div id="app">

    <div class="nav-left">
     <div class="logo">
       <img src="./assets/image/logo.png">
     </div>
     <div class="main-nav" >
       <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" style="margin-top:30px;">
        <router-link to='/home'>
            <el-menu-item index="1" class='icon-active'><span class='icon-img icon-home'></span>首页</el-menu-item>
        </router-link>
        <router-link to='/search' >
            <el-menu-item index="2" class='icon-active'><span class='icon-img icon-search'></span>查询</el-menu-item>
        </router-link>
        <router-link to='/scheduling'>
            <el-menu-item index="4" class='icon-active'><span class='icon-img icon-scheduling'></span>排班</el-menu-item>
        </router-link>
        <router-link to='/booking'>
            <el-menu-item index="5" class='icon-active'><span class='icon-img icon-booking'></span>预约</el-menu-item>
        </router-link>
        <router-link to='/inquiry'>
            <el-menu-item index="6" class='icon-active'><span class='icon-img icon-inquiry'></span>问诊</el-menu-item>
        </router-link>
        <router-link to='/recipe'>
            <el-menu-item index="7" class='icon-active'><span class='icon-img icon-recipe'></span>处方</el-menu-item>
        </router-link>
        <router-link to='/charge'>
            <el-menu-item index="8" class='icon-active'><span class='icon-img icon-charge'></span>收费</el-menu-item>
        </router-link>
        <router-link to='/patient'>
            <el-menu-item index="9" class='icon-active'><span class='icon-img icon-patient'></span>患者</el-menu-item>
        </router-link>
        <router-link to='/clinic'>
            <el-menu-item index="10" class='icon-active'><span class='icon-img icon-clinic'></span>诊所</el-menu-item>
        </router-link>
        <router-link to='/count'>
            <el-menu-item index="10" class='icon-active'><span class='icon-img icon-clinic'></span>统计</el-menu-item>
        </router-link>
        <router-link to='/drug'>
            <el-menu-item index="11" class='icon-active'><span class='icon-img icon-drug'></span>药品</el-menu-item>
        </router-link>
        <router-link to='/project'>
            <el-menu-item index="12" class='icon-active'><span class='icon-img icon-charge'></span>项目</el-menu-item>
        </router-link>
        <router-link to='/model'>
            <el-menu-item index="13" class='icon-active'><span class='icon-img icon-model'></span>模板</el-menu-item>
        </router-link>
        <router-link to='/power'>
            <el-menu-item index="14" class='icon-active'><span class='icon-img icon-power'></span>系统</el-menu-item>
        </router-link>          
      </el-menu>
     </div>
      
    </div>
    <div class="rightSide">
      <div class="nav-top">

         <el-menu :default-active="activeIndex2" class="el-menu-demo nav-top" mode="horizontal" @select="handleSelect">
           <span class='btn-collapse' @click='collapse'><img src="./assets/image/bars.png"></span>
           <span class="Showtime">今天 {{getMonth}}月{{getDay}}日&nbsp&nbsp{{getWeekDay}}&nbsp{{getHours}}:{{getMinutes}}</span> 
           
         
           <el-menu-item index="1">
             <span class='icon-img icon-exit'></span>退出
           </el-menu-item>
           <el-menu-item index="3"><a href="#" >
             <span class='icon-img icon-help'></span>帮助</a>
           </el-menu-item>
           <el-menu-item index="3"><a href="#" >
            <span class='icon-img icon-message'></span>消息</a>
           </el-menu-item>
           <el-submenu index="2">

             <template slot="title">
             <img class="img-account" src="./assets/image/113@2x.png" >
             账号
             </template>
             <el-menu-item index="2-1"><router-link to='/' > 个人信息</router-link></el-menu-item>
             <el-menu-item index="2-2">修改密码</el-menu-item>
           </el-submenu>
         </el-menu>
      </div>
      <div class="intro">
         <!-- <p>当前位置: {{$route.name}}{ path: '/' }</p> -->
         <el-breadcrumb separator="/">
           <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
           <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
           
         </el-breadcrumb>
      </div>
      <div class="main-content">
         <router-view></router-view>
      </div>


    </div>
    
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>

  var myDate=new Date();
  var date=myDate.getDay(); //星期几
  var weekDay=new Array('周一','周二','周三','周四','周五','周六','周日');
  export default {
  
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        getMonth:myDate.getMonth()+1,
        getDay:myDate.getDate(),
        getHours:myDate.getHours(),
        getMinutes:myDate.getMinutes(),
        getWeekDay:weekDay[date-1],
        navCollapse:'1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      //主菜单栏
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
     },
     collapse(){
        this.navCollapse=0;
     }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  margin:0;
  overflow:hidden;
}
#app .img-account{
  width: 40px;
  height: auto;
 /* display: inline-block;*/
  /*margin-right: 10px;
  margin-top: 10px;*/
  position: static;
  vertical-align: middle;
  margin-right: 8px;
  color: #97a8be;
  margin-top: -3px;
}
#app .el-breadcrumb{
  font-size: 15px;
}
#app .el-submenu.is-active .el-submenu__title {
    border-bottom-color: #fff;

}
#app .el-menu--horizontal .el-submenu .el-submenu__title {
    line-height: 52px;
    height: 50px;

}
#app .el-menu--horizontal .el-submenu .el-submenu__icon-arrow {
  display: none;
}
#app a{
  text-decoration: none;
  color: #000;
}
#app .nav-left{
/*  width: 20%;*/
  height: 800px;
  padding: 0;
  position: fixed;
  background-color: #324D56;
  border-right: 1px solid #000;
}
#app .showNav{
  width: 60px !important;
}
#app .main-nav{
  width: 100%;
  height: auto;
}
#app .logo{
  width: 194px;
  height: 100px;
  background-color: #fff;
}
#app .logo img{
  /*border: 1px solid;*/
  padding: 32px;
  width: 130px;
}
#app .rightSide{
  margin-left:195px;
  width: 86%;
  height: auto;
  /*border: #000 1px solid;*/
  float: left;
  background-color: #F1F1F1;
  padding-bottom: 15px;
}
#app .nav-top{
  width: 100%;
  height: 50px;
  border-bottom: #bbb 1px solid;
}
#app .el-menu{
  background-color: #fff;
}
#app .el-menu--horizontal .el-menu-item{
  float: right;
}
#app .el-menu--horizontal .el-submenu{
  float: right;
}

/*.icon-img{
  margin-right: 10px;
}*/
#app .main-nav .el-menu{
  background-color:#324D56;

}
#app .el-menu-item{
  height: 50px;
  font-size: 15px !important; 
  line-height: 50px;
}
/*顶部导航图标*/
#app a.router-link-active .icon-active{
  border-left: 2.5px solid #57d78c;
  background-color: #263a41 !important;
  color: #fff !important;
  box-sizing: border-box;
}
#app .icon-img{
  margin-right: 10px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  vertical-align: middle;
  position: relative;
  top: -2px;
  margin-right: 5px;
  display: inline-block;
  background-position: 0 0;
}
#app .icon-exit{
  margin-right: 20px;
  width: 25px;
  height: 25px;
  background-image: url(./assets/image/16.png);
}
#app .icon-help{
  margin-right: 20px;
  width: 25px;
  height: 25px;
  background-image: url(./assets/image/14.png);
}
#app .icon-message{
  margin-right: 20px;
  width: 25px;
  height: 25px;
  background-image: url(./assets/image/15.png);
}
#app .icon-home{
  margin-right:20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/01.png);
}
#app .icon-search{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/02.png);
}
#app .icon-scheduling{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/03.png);
}
#app .icon-booking{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/04.png);
}
#app .icon-inquiry{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/05.png);
}
#app .icon-recipe{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/06.png);
}
#app .icon-charge{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/07.png);
}
#app .icon-clinic{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/09.png);
}
#app .icon-drug{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/10.png);
}
#app .icon-model{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/11.png);
}
#app .icon-power{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/12.png);
}
#app .icon-patient{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/08.png);
}
#app .btn-collapse{
  width: 50px;
  height: 50px;
  border-right: 1px solid #bbb;
  display: inline-block;
  float: left;
  padding: 12px 12px;
  box-sizing: border-box;
  background-color: #F1F1F1;
}
#app .btn-collapse img{
  width: 25px;
  height: 25px;
}
#app .Showtime{
  font-size: 15px;
  width: 200px;
  height: 60px;
  /*border: 1px solid #bbb;*/
  display: inline-block;
  float: left;
  padding: 16px 15px;
  box-sizing: border-box;
}
#app .intro{
  font-size: 14px;
  padding:15px 15px;
  color: #bbb;
}
#app .main-content{
  margin:0 15px;
  width: 97%;
  /*border:1px solid #333;*/
}
#app table{
  padding:0;
}
</style>

