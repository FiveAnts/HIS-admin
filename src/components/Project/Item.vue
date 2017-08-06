<template>
	<div class="itemContainer">
		<el-form :inline="true"  class="demo-form-inline search-nav" :model="formInline">
  			<el-form-item label="项目名称：">
    			<el-input  placeholder="请输入项目名称" v-model="formInline.name"></el-input>
  			</el-form-item>
  			<el-form-item label="项目分类：" >
    			<el-select  placeholder="请选择" v-model="formInline.classify">
      				<el-option v-for="cl in classify" v-bind:label="cl.val" v-bind:value="cl.val" :key="1">
      				</el-option>
    			</el-select>
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
   			 	<el-button @click="" class="btn-add"> <router-link to="/project/addItem">新增项目</router-link></el-button>
  			</el-form-item>
		</el-form>
		<div class="info-table" style="text-align: center;">
	    	<el-row class="tac table-title">
	    		<el-col  :span="2">
	    			序号
	    		</el-col>
	    		<el-col  :span="3">
	    			项目分类
	    		</el-col>
	    		<el-col  :span="3">
	    			项目名称
	    		</el-col>
	    		<el-col  :span="3">
	    			单位
	    		</el-col>
	    		<el-col  :span="3">
	    			单价（元）
	    		</el-col>
	    		<el-col  :span="3">
	    			执行科室
	    		</el-col>
	    		<el-col  :span="3">
	    			启用状态
	    		</el-col>
	    		<el-col  :span="4">
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
	    		<el-col  :span="3">
	    			{{item.name}}
	    		</el-col>
	    		<el-col  :span="3">
	    			{{item.unit}}
	    		</el-col>
	    		<el-col  :span="3">
	    			{{item.unitPrice}}
	    		</el-col>
	    		<el-col  :span="3">
	    			{{item.office}}
	    		</el-col>
	    		<el-col  :span="3">
	    			<span v-show="!item.state" class="forbidden-span" @click="item.state=!item.state">禁用</span>
	    			<span v-show="item.state" class="startUse-span" @click="item.state=!item.state">启用</span>
	    		</el-col>
	    		<el-col  :span="4">
	    			<el-col  :span="12">
	    				<a @click="handleEdit(scope.$index, scope.row)">
	    					<img src="../../assets/img/Project/48.png">	
   						编辑</a>
        			</el-col>
        			<el-col  :span="12">
        				<a @click="item.state=!item.state" v-show="item.state">
        				<img src="../../assets/img/Project/46.png" >启用</a>	
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
	    		selectItems: [],
	  
		    }
	    },
	    methods: {
		    handleEdit() {
		        console.log(index, row);
		    },
		    getData:function(){
				this.$store.commit('getData');
			},
			getSelectData:function(){
				console.log(this.formInline.classify);
				if(this.formInline.classify!==""){
					for(let i=0,j=0;i<this.infoItems.length;i++){
						if(this.infoItems[i].classify===this.formInline.classify){
								j++;
								this.selectItems[j]=this.infoItems[i];
						}
					}
				}
				this.infoItems=this.selectItems;

			},

        },
        computed:{
        	infoItems : {
        		get: function (){
        			return store.state.infoItems;
			    },

        	},
			classify :  function (){
        		return store.state.classify;
			},
			formInline : function(){
				return store.state.formInline;
			}

        },
        mounted:function(){
		    this.getData();
		},

    }
</script>
<style>
	.itemContainer .search-nav{
		margin-top: 15px;
	}
	.itemContainer .el-input{
		width: auto;
	}
	.itemContainer .search-nav .el-button--default{
		background-color: #21d081;
		padding:10px 10px;
		box-shadow:  0px -1px 0px 0px #FFFFFF,   
		            -1px 0px 0px 0px #FFFFFF,  
		            1px 0px 0px 0px #FFFFFF,  
	                0px 2px 1px #C8C8C8;    /*下边阴影*/
	}
	.itemContainer .search-nav .el-icon-search{
		color: white;
		border: none;
	}
	.itemContainer .search-nav .el-select,.itemContainer .el-pager .el-select{
		width: 100px;
	}
	.itemContainer .el-form--inline{
		text-align: left;
	}
	.itemContainer .el-form-item__label{
		color: #ABACAE;
	}
	.itemContainer .page-nav button,.itemContainer .page-nav li{
		background-color: rgba(255,255,255,0);
	}
	.itemContainer .el-pager li.active{
		background-color:  #21d081;
		border-color:  #21d081;
		border-radius: 50%;
	}

	.itemContainer .info-table{
		background-color: white;
		border-radius: 5px;
		margin-bottom: 50px;
		box-shadow:  0px -1px 0px 0px #FFFFFF,   
		            -2px 0px 1px   #FFFFFF,  
		            1px 0px 1px  #C8C8C8,  
	                0px 2px 1px #C8C8C8;    /*下边阴影*/
	}
	.itemContainer .info-table img{
		position: relative;
		top:5px;
	}
	.itemContainer .info-table .el-col{
		line-height: 50px;
		min-height: 50px;
		height: auto;
	}
	.itemContainer .info-table>.el-row{
		border-bottom: 1px solid #F6F6F6;
	}
	.itemContainer .forbidden-span{
		background-color: #CACACA;
	}
	.itemContainer .startUse-span{
		background-color: #ECAD00;
	}
	.itemContainer .startUse-span,.forbidden-span{
		display: block;
		width: 50px;
		height: 30px;
		line-height: 30px;
		color:white;
		font-size: 14px;
		margin: 10px auto;
		border-radius: 5px;
	}
	.itemContainer .info-table a{
		color: #B5D7F6;
		display: inline-block;
		height: 20px;
		line-height: 20px;
	}
	.itemContainer .info-table img{
		
		margin-top: 5px;
	}
	.itemContainer .info-table .table-title{
		font-weight:500;
	}
	.itemContainer .btn-add:hover,.itemContainer .btn-add a:hover{
		color: white;
		border: none;
		width: 50px；
	}
	.itemContainer .btn-add a{
		color: white;
		text-decoration: none;
	}
	.itemContainer .search-nav div:last-child{
		float: right;
	}
</style>