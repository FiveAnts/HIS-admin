<template>
	<div id="yy-details" class="yyDetails">
		<el-row>
		  <el-col :xs="8" :sm="6" :md="4" :lg="5">
		  	<div class="grid-content">
		  		<el-card class="box-card">
		  		  <img src="../assets/yy/1.png">
		  		  <p style="margin: 10px 0;"> {{ patientData.ptName }} </p>
		  		  <div class="ptSexAge">
					<div class="sex"><span> 性别：</span> {{ patientData.ptSex }} </div>
					<div class="age"><span> 年龄：</span> {{ patientData.ptAge }} </div>
					<div class="tel"><span style="margin-left: -29px;margin-right: 8px;"> 电话：</span> {{ patientData.ptTel }}</div>
		  		  </div>
		  		</el-card>

		  	</div>
		  </el-col>
		  <el-col :xs="4" :sm="6" :md="16" :lg="18" style="margin-left: 25px;">
		  	<div class="grid-content">
		  		<div class="ptBook">
					<div class="ptTitle"> 预约信息 </div>
					<div class="ptCommon ptOrder"><span>订单号:</span>  {{ ptBooking.order }} </div>
					<div class="ptCommon ptOrderTime"><span>订单生成时间:</span> {{ ptBooking.orderTime }} </div>
					<div class="ptCommon ptBookChannel"><span>预约渠道:</span> {{ ptBooking.bookChannel }} </div>
					<div class="ptCommon ptSellChannel"><span>销售渠道:</span> {{ ptBooking.sellChannel }} </div>
		  		</div>
		  	</div>
		  </el-col>
		  <el-col :xs="8" :sm="6" :md="4" :lg="5">
		  	<div class="grid-content">
		  		<div class="ptBook">
					<div class="ptTitle"> 最新测量信息 </div>
					<div class="ptCommon ptOrder"><span>身高:</span>  {{ ptBooking.order }} </div>
					<div class="ptCommon ptOrderTime"><span>体重:</span> {{ ptBooking.orderTime }} </div>
					<div class="ptCommon ptBookChannel"><span>体温:</span> {{ ptBooking.bookChannel }} </div>
					<div class="ptCommon ptSellChannel"><span>血压:</span> {{ ptBooking.sellChannel }} </div>
					<div class="ptCommon ptSellChannel"><span>心率:</span> {{ ptBooking.sellChannel }} </div>
		  		</div>
		  	</div>
		  </el-col>
		  <el-col :xs="8" :sm="6" :md="4" :lg="3">
		  	<div class="grid-content">
		  		
		  	</div>
		  </el-col>
		</el-row>



	</div>
</template>

<style>
	#yy-details{
/*		width: 80%;
		margin:0 auto;*/
		font-family: "微软雅黑";
	}
	ul{
	  list-style: none;
	  padding-left: 0px;
	}

	.yyDetails .box-card {
	    width: 100%;
	    font-size: 14px;
	}
	.yyDetails .el-card__body {
	    padding: 0;
	    text-align: center;
	    margin-top: 20px;
	}
	.ptSexAge span{
		color: #BEBEBE;
	}
	.ptSexAge .sex{
		float: left;
		border-top: 1px solid #ECECEC;
		width: 49%;
		border-right: 1px solid #ECECEC;
		width: 50%;
		height: 40px;
		line-height: 40px;
	}
	.ptSexAge .age{
		float: left;
		border-top: 1px solid #ECECEC;
		width: 49%;
		line-height: 40px;
	}
	.ptSexAge .tel{
		clear: both;
		border-top: 1px solid #ECECEC;
		line-height: 40px;
	}
	.ptBook{
		text-align: left;
		box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
		border-radius: 7px;
		background: white;
	}
	.ptTitle{
		padding-left: 10px;
		border-bottom: 1px solid #F6F6F6;
		height: 40px;
		line-height: 40px;
	}
	.ptCommon{
		border-bottom: 1px solid #F6F6F6;
		height: 52px;
		line-height: 52px;
		padding-left: 10px;
		font-size: 14px;
		border-radius: 7px;
	}
	.ptCommon span{
		padding-right: 10px;
		color: #BCBCBC;
	}

	.text {
	  font-size: 14px;
	}

	.item {
	  padding: 18px 0;
	}

	.grid-content {
	  border-radius: 4px;
	}

</style>

<script>
	import Vue from 'vue' 
	export default {
	    data() {
	      return {
	        patientData: [{
	        	ptName: '',
	        	ptSex: '',
	        	ptAge:'',
	        	ptTel: '13012345678',
	        	ptTime: '',
	        	ptType: '',
	        	ptDoctor: '',
	        	ptComplain: '',
	        }],
	        ptBooking: [{
        		order: '',
        		orderTime: '',
        		bookChannel: '',
        		sellChannel: ''
        	}],
        	
	      };
	    },
	    methods: {
	    	getData:function(){
	    		let re = this;
	    		Vue.http.get('../static/json/yy-appointment.json').then(function(response){
	    			re.patientData = response.data.appointment.patientData[0];
	    			re.ptBooking = response.data.appointment.patientData[0].ptBooking[0];
	    			// re.patientData.ptBooking = response.data.appointment.patientData.ptBooking[0];
	    			// console.log("哈哈哈",re.patientData.ptBooking[0].order)
	    			// console.log(re.patientData.ptBooking)
	    		},function(){
	    			alert('申请失败！');
	    		})
	    	}
	    },
	    mounted: function (){
	    	var vm = this;
	    	vm.getData();
	    }
	}
</script>
