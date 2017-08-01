<template>
	<div>
	    <div>
	    	<div class="today-booking">
	    		<div class='booking-title'>
	    		   <span style="font-weight:bold;">今日预约</span>
	    		   <a class="more">更多</a>
	    		</div>
	    		<table>
	    			<tr>
	    			   <td>08:00~09:00</td>
	    			   <td>李女士,13512345678</td>
	    			   <td>预约:王医生</td>
	    			   <td><a href='#'>查看</a></td>
	    			</tr>
	    			<tr>
	    			   <td>08:00~09:00</td>
	    			   <td>李女士,13512345678</td>
	    			   <td>预约:王医生</td>
	    			   <td><a href='#'>查看</a></td>
	    			</tr>
	    			<tr>
	    			   <td>08:00~09:00</td>
	    			   <td>李女士,13512345678</td>
	    			   <td>预约:王医生</td>
	    			   <td><a href='#'>查看</a></td>
	    			</tr>

	    		</table>
	    	</div>
	    	<div class="today-scheduling gap">
	    		<div class='booking-title'>
	    		   <span style="font-weight:bold;">今日排班</span>
	    		   <a class="more">更多</a>
	    		</div>
	    		<table>
	    			<tr>
	    			   <td>08:00~09:00</td>
	    			   <td>李女士,13512345678</td>
	    			</tr>
	    			<tr>
	    			   <td>08:00~09:00</td>
	    			   <td>李女士,13512345678</td>
	    			</tr>
	    			<tr>
	    			   <td>08:00~09:00</td>
	    			   <td>李女士,13512345678</td>
	    			</tr>

	    		</table>
	    	</div>
	    	<div class="today-booking gap-y">
	    		<div class='booking-title'>
	    		   <span style="font-weight:bold;">月度统计(过去三十天)</span>
	    		   <a class="more">更多</a>
	    		</div>
	    		
	    	</div>
	    	<div class="today-scheduling gap gap-y">
	    		<div class='booking-title'>
	    		   <span style="font-weight:bold;">今日排班</span>
	    		   <a class="more">更多</a>
	    		</div>
	    		<table>
	    			<tr>
	    			   <td>08:00~09:00</td>
	    			   <td>李女士,13512345678</td>
	    			</tr>
	    			<tr>
	    			   <td>08:00~09:00</td>
	    			   <td>李女士,13512345678</td>
	    			</tr>
	    			<tr>
	    			   <td>08:00~09:00</td>
	    			   <td>李女士,13512345678</td>
	    			</tr>

	    		</table>
	    	</div>

	    </div>
		
	</div>
</template>
<script type="text/javascript">
	export default{
		data: function(){
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>
<style>
.gap{
	margin-left: 18px;
}
.gap-y{
	margin-top: 20px;
}
 .today-booking{
 	width: 63%;
 	height: 400px;
 	background-color: #fff;
 	box-shadow: 2px 1px 1px 1px #eaeaea;
 	float: left;
 }
 .today-scheduling{
 	width: 35%;
 	height: 400px;
 	background-color: #fff;
 	box-shadow: 2px 1px 1px 1px #eaeaea;
 	float: left;
 }
 .booking-title{
 	font-size: 16px;
 	/*font-weight: bold;*/
 	padding: 8px 16px;
 	letter-spacing: 1px;
 	border-bottom: 1px solid #F1F1F1;
 	background-color: #FBFBFB;
/* 	font-family: '微软雅黑';*/
 }
 .more{
    color: #77d0a4;
    text-decoration: none;
    float: right;
    font-size: 14px;
 }
 table{
 	padding:18px 16px;
 }
 tr{

 	height: 40px;
 }
 td{
   width: 23%;
   /*border:1px solid #000;*/
 }
table a{
   color: #77d0a4;
   text-decoration: none;
 }
	
</style>