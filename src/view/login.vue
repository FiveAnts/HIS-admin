<template>
  <div class="login">
    <el-form class="login-content">
      <img class="login-img" src="../assets/img/98.png" />
      <span class="login-span">
        <img class="login-img2" src="../assets/img/99.png" />
        <el-input type="text" v-model="form.orgCode" class="login-input" placeholder="请输入机构编码"></el-input>
      </span>
      <span class="login-span">
        <img class="login-img2" src="../assets/img/101.png" />
        <el-input type="text" v-model="form.userName" class="login-input" placeholder="请输入用户名"></el-input>
      </span>
      <span class="login-span">
        <img class="login-img2" src="../assets/img/103.png"/>
        <el-input type="password" v-model="form.psd"  class="login-input" placeholder="请输入密码"></el-input>
      </span>
      <el-button class="login-btn" @click="msgalert()">登录</el-button>
    </el-form>
    <p class="login-p">Copyright © 2014-2017 Benewit. All Rights Reserved.广东百慧信息技术有限公司</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: function() {
    return {
      form: {
        "orgCode": "",
        "userName": "",
        "psd": ""
      }
    }
  },
  methods: {
    msgalert () {
      if (this.form.orgCode === "") {
        this.$message('机构编码不得为空');
      }else if(this.form.userName === ""){
        this.$message('用户名不得为空');
      }else if(this.form.psd === ""){
        this.$message('密码不得为空');
      }else if(this.form.orgCode !== "" && this.form.userName !== "" && this.form.psd !== ""){
        let current = this.form;
        let count = 0;
        // console.log("用户输入的数据", this.form);
        this.$http.get('../../../static/dataJson/login.json').then(function(res){
          for(let i = 0; i <= res.data.data.length-1; i++){
            if(current.orgCode === res.data.data[i].orgCode && current.userName === res.data.data[i].userName && current.psd === res.data.data[i].psd){
              count++;
            }
          }
          if(count == 1){
            this.$router.push({path: '/reghttp'});
          }else{
            this.$message('机构编码、用户名或者密码不正确');
            this.form.orgCode = "";
            this.form.userName = "";
            this.form.psd = "";
          }
        },function(res){
          this.$message('The Request is Failed.');
        })
      }
    }
  }
}
</script>

<style>
      body {
        margin: 0px;
      }
      
      .login {
        margin: 0px;
        padding: 0px;
        background: url("../assets/img/login01.jpg") 0% 0% / cover no-repeat;
        display: block;
        position: fixed;
        width: 100%;
        height: auto;
      }
      
      .login-content {
        height: 386px;
        width: 495px;
        background: white;
        display: block;
        padding: 35px 35px 15px 35px;
        margin: 120px auto;
        left: 0;
        right: 0;
      }
      
      .login-tip {
        background: white;
        width: 200px;
        height: 65px;
        line-height: 65px;
        margin-left: 45%;
      }
      
      .login-img {
        text-align: center;
        margin-top: 45px;
        margin-bottom: 15px;
      }
      
      .login-span {
        display: block;
        width: 350px;
        height: 47px;
        margin: 0px 70px 0px 80px;
        font-size: 28px;
        margin-bottom: 15px;
      }
      
      .login-img2 {
        display: inline-block;
        line-height: 36px;
        margin-right: 15px;
      }
      
      .login-input {
        width: 300px;
        height: 45px;
        border: none;
        display: inline-block;
        margin-top: -15px;
        line-height: 45px;
        position: relative;
      }
      
      .login-input:focus {
        border: 1px #999 solid;
      }
      
      .login-btn {
        background: #21D081;
        color: #ffffff;
        width: 354px;
        height: 47px;
        margin-top: 15px;
        border-radius: 5px;
        margin: 0px 70px 0px 80px;
      }
      
      .login-btn:hover {
        color: #4CD786;
        border: 0px;
      }
      
      .login-p {
        text-align: center;
        margin-top: -105px;
        color: #999;
        font-size: 12px;
      }

</style>