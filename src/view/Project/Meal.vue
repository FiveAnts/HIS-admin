<template>
	<div class="mealContainer">
		<el-form :inline="true"  class="demo-form-inline search-nav" :model="formInline">
  			<el-form-item label="套餐分类：" >
    			<el-select  placeholder="请选择" v-model="formInline.classify">
      				<el-option v-for="cl in classify" v-bind:label="cl.val" v-bind:value="cl.val" :key="1">
      				</el-option>
    			</el-select>
  			</el-form-item>
  			<el-form-item label="套餐名称">
    			<el-input  placeholder="请输入套餐名称" v-model="formInline.name"></el-input>
  			</el-form-item>
  			<el-form-item label="启用状态： ">
    			<el-select placeholder="请选择" v-model="formInline.state">
     				<el-option label="警用" value="forbidden"></el-option>
     				<el-option label="启用" value="startUse"></el-option>
    			</el-select>
  			</el-form-item>
  			<el-form-item>
   			 	<el-button  icon="search" @click="getSelectData"></el-button>
  			</el-form-item>
  			<el-form-item>
   			 	<el-button @click="" class="btn-add"><router-link to="/project/addMeal">新增套餐</router-link></el-button>
  			</el-form-item>
		</el-form>
		<div class="info-table" style="text-align: center;">
	    	<el-row class="tac table-title">
	    		<el-col  :span="2">
	    			序号
	    		</el-col>
	    		<el-col  :span="3">
	    			套餐分类
	    		</el-col>
	    		<el-col  :span="4">
	    			套餐名称
	    		</el-col>
	    		<el-col  :span="4">
	    			关联的项目
	    		</el-col>
	    		<el-col  :span="3">
	    			执行地点
	    		</el-col>
	    		<el-col  :span="3">
	    			启用状态
	    		</el-col>
	    		<el-col  :span="5" >
	    			操作
	    			      				
	    		</el-col>
	    	</el-row>
	    	<el-row class="tac" v-for="(item,index) in infoItems" :key="index">
	    		<el-col  :span="2">
	    			{{index+1}}
	    		</el-col>
	    		<el-col  :span="3">
	    			{{item.classify}}
	    		</el-col>
	    		<el-col  :span="4">
	    			{{item.name}}
	    		</el-col>
	    		<el-col  :span="4"  > 
	    		<!--mark <el-col  :span="4"  v-popover:popover1>  :不生效 -->
      				<img src="../../assets/img/Project/62.png">
      				<!-- <div>88
	      				<el-popover ref="popover1" placement="bottom" title="标题" width="200" trigger="hover" >
	      					<p>姓名: </p>
	   						<p>住址:</p>
						</el-popover>
      				</div> -->
      				
	    		</el-col>
	    		<el-col  :span="3">
	    			{{item.location}}
	    		</el-col>
	    		<el-col  :span="3">
	    			<span v-show="!item.state" class="forbidden-span" @click="item.state=!item.state">禁用</span>
	    			<span v-show="item.state" class="startUse-span" @click="item.state=!item.state">启用</span>
	    		</el-col>
	    		<el-col  :span="5">
	    			<el-col  :span="12">
	    				<a @click="handleEdit(scope.$index, scope.row)">
	    					<img src="../../assets/img/Project/48.png">	
   						编辑</a>
        			</el-col>
        			<el-col  :span="12">
        				<a @click="item.state=!item.state" v-show="item.state">
        				<img src="../../assets/img/Project/46.png">启用</a>	
        				<a @click="item.state=!item.state" v-show="!item.state">
        				<img src="../../assets/img/Project/47.png">禁用</a>	
        			</el-col>
	    		</el-col>
	    	</el-row>
				
		</div>
		<el-pagination small layout="prev, pager, next,sizes,jumper" :total="100" class="page-nav" :page-sizes="[10, 20, 30, 40]" >
        </el-pagination>
	</div>
</template>
<script type="text/javascript">
    import store from '../../store/Project/item.js'
	export default {
		data: function () {
	    	return {
	    		 
		    }
	    },
	    computed:{
        	infoItems :  function (){
        		return store.state.infoItems;
			},
			classify :  function (){
        		return store.state.classify;
			},
			formInline : function(){
				return store.state.formInline;
			}
        },
	    methods: {
		    handleEdit() {
		        console.log(index, row);
		    },
		    getData:function(){
				this.$store.commit('getData')
			},
			getSelectData:function(){
				/*this.$store.commit('getSelectData')*/
			},

        },
        mounted:function(){
			//mounted是在vue实例化完成后，执行。相当于jq中的ready
				//$(document).ready(function(){ })
		    this.getData();
		},


    }
</script>
<style>
	.mealContainer .search-nav{
		margin-top: 15px;
	}
	.mealContainer .el-input{
		width: auto;
	}
	.mealContainer .search-nav .el-button--default{
		background-color: #21d081;
		padding:10px 10px;
		box-shadow:  0px -1px 0px 0px #FFFFFF,   
		            -1px 0px 0px 0px #FFFFFF,  
		            1px 0px 0px 0px #FFFFFF,  
	                0px 2px 1px #C8C8C8;    /*下边阴影*/
	}
	.mealContainer .search-nav .el-icon-search{
		color: white;
		border: none;
	}
	.mealContainer .search-nav .el-select,.mealContainer .el-pager .el-select{
		width: 100px;
	}
	.mealContainer .el-form--inline{
		text-align: left;
	}
	.mealContainer .el-form-item__label{
		color: #ABACAE;
	}
	.mealContainer .page-nav button,.mealContainer .page-nav li{
		background-color: rgba(255,255,255,0);
	}
	.mealContainer .el-pager li.active{
		background-color:  #21d081;
		border-color:  #21d081;
		border-radius: 50%;
	}

	.mealContainer .info-table{
		background-color: white;
		border-radius: 5px;
		margin-bottom: 50px;
		box-shadow:  0px -1px 0px 0px #FFFFFF,   
		            -2px 0px 1px   #FFFFFF,  
		            1px 0px 1px  #C8C8C8,  
	                0px 2px 1px #C8C8C8;    /*下边阴影*/

	}
	.mealContainer .info-table img{
		position: relative;
		top:5px;
	}
	.mealContainer .info-table .el-col{
		line-height: 50px;
		min-height: 50px;
		height: auto;
	}
	.mealContainer .info-table>.el-row{
		border-bottom: 1px solid #F6F6F6;
	}
	.mealContainer .forbidden-span{
		background-color: #CACACA;
	}
	.mealContainer .startUse-span{
		background-color: #ECAD00;
	}
	.mealContainer .startUse-span,.mealContainer .forbidden-span{
		display: block;
		width: 50px;
		height: 30px;
		line-height: 30px;
		color:white;
		font-size: 14px;
		margin: 10px auto;
		border-radius: 5px;
	}
	.mealContainer .info-table a{
		color: #B5D7F6;
		display: inline-block;
		height: 20px;
		line-height: 20px;
	}
	.mealContainer .info-table img{
		margin-top: 5px;
	}
	.mealContainer .info-table .table-title{
		font-weight:500;
	}
	.mealContainer .btn-add:hover,.mealContainer .btn-add a:hover{
		color: white;
		border: none;
	}
	.mealContainer .btn-add a{
		color: white !important;
		text-decoration: none;
	}
	.mealContainer .search-nav div:last-child{
		float: right;
	}
	.mealContainer .el-popover{
		background-color: #F8F9E7;
	}






	
</style>