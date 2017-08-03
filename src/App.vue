<template>
  <div id="app">
<!--     <el-row>
      <el-col :xs="4" :sm="4" :md="4" :lg="4">
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
             <router-link to='patient'>
                 <el-menu-item index="9" class='icon-active'><span class='icon-img icon-patient'></span>患者</el-menu-item>
             </router-link>
             <router-link to='/clinic'>
                 <el-menu-item index="10" class='icon-active'><span class='icon-img icon-clinic'></span>诊所</el-menu-item>
             </router-link>
             <router-link to='drug'>
                 <el-menu-item index="11" class='icon-active'><span class='icon-img icon-drug'></span>药品</el-menu-item>
             </router-link>
             <router-link to='/model'>
                 <el-menu-item index="12" class='icon-active'><span class='icon-img icon-model'></span>模板</el-menu-item>
             </router-link>
             <router-link to='/power'>
                 <el-menu-item index="13" class='icon-active'><span class='icon-img icon-power'></span>系统</el-menu-item>
             </router-link>          
           </el-menu>
          </div>
           
         </div>

      </el-col>
      <el-col :xs="20" :sm="20" :md="20" :lg="20">
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
                  <template slot="title">账号</template>
                  <el-menu-item index="2-1">个人信息</el-menu-item>
                  <el-menu-item index="2-2">修改密码</el-menu-item>
                </el-submenu>
              </el-menu>
           </div>
           <div class="intro">
              <p>当前位置：首页</p>
           </div>
           <div class="main-content">
              <router-view></router-view>
           </div>


         </div>
      </el-col>
    </el-row> -->
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
             <template slot="title">账号</template>
             <el-menu-item index="2-1">个人信息</el-menu-item>
             <el-menu-item index="2-2">修改密码</el-menu-item>
           </el-submenu>
         </el-menu>
      </div>
      <div class="intro">
         <p>当前位置: {{$route.name}}</p>
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
  var date=myDate.getDate(); //星期几
  var weekDay=new Array('周一','周二','周三','周四','周五','周六','周日');
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        getMonth:myDate.getMonth(),
        getDay:myDate.getDay(),
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
.nav-left{
/*  width: 20%;*/
  height: 800px;
  padding: 0;
  position: fixed;
  background-color: #324D56;
  border-right: 1px solid #000;
}
.showNav{
  width: 60px !important;
}
.main-nav{
  width: 100%;
  height: auto;
}
.logo{
  width: 194px;
  height: 100px;
  background-color: #fff;
}
.logo img{
  /*border: 1px solid;*/
  padding: 32px;
  width: 130px;
}
.rightSide{
  margin-left:195px;
  width: 86%;
  height: auto;
  /*border: #000 1px solid;*/
  float: left;
  background-color: #F1F1F1;
  padding-bottom: 15px;
}
.nav-top{
  width: 100%;
  height: 60px;
  border-bottom: #bbb 1px solid;
}
.el-menu{
  background-color: #fff;
}
.el-menu--horizontal .el-menu-item{
  float: right;
}
.el-menu--horizontal .el-submenu{
  float: right;
}
/*.icon-img{
  margin-right: 10px;
}*/
.main-nav .el-menu{
  background-color:#324D56;

}
.el-menu-item{
  height: 45px;
  font-size: 15px !important; 
  line-height: 50px;
}
/*顶部导航图标*/
a.router-link-active .icon-active{
  border-left: 2.5px solid #57d78c;
  background-color: #263a41 !important;
  color: #fff !important;
  box-sizing: border-box;
}
.icon-img{
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
.icon-exit{
  margin-right: 20px;
  width: 25px;
  height: 25px;
  background-image: url(./assets/image/16.png);
}
.icon-help{
  margin-right: 20px;
  width: 25px;
  height: 25px;
  background-image: url(./assets/image/14.png);
}
.icon-message{
  margin-right: 20px;
  width: 25px;
  height: 25px;
  background-image: url(./assets/image/15.png);
}
.icon-home{
  margin-right:20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/01.png);
}
.icon-search{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/02.png);
}
.icon-scheduling{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/03.png);
}
.icon-booking{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/04.png);
}
.icon-inquiry{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/05.png);
}
.icon-recipe{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/06.png);
}
.icon-charge{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/07.png);
}
.icon-clinic{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/09.png);
}
.icon-drug{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/10.png);
}
.icon-model{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/11.png);
}
.icon-power{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/12.png);
}
.icon-patient{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/image/08.png);
}
.btn-collapse{
  width: 58px;
  height: 60px;
  border-right: 1px solid #bbb;
  display: inline-block;
  float: left;
  padding: 16px 15px;
  box-sizing: border-box;
  background-color: #F1F1F1;
}
.btn-collapse img{
  width: 25px;
  height: 25px;
}
.Showtime{
  font-size: 15px;
  width: 200px;
  height: 60px;
  /*border: 1px solid #bbb;*/
  display: inline-block;
  float: left;
  padding: 16px 15px;
  box-sizing: border-box;
}
.intro{
  font-size: 14px;
  padding:15px 15px;
  color: #bbb;
}
.main-content{
  margin:0 15px;
  width: 97%;
  /*border:1px solid #333;*/
}
table{
  padding:0;
}
</style>

