<template>
	<div class="registerApp">
		<div class="registerContainer">
			<div class="topNav">
				<div>
					<div>
						<a><i class="fa fa-user" style="padding-right:10px;"></i>返回登录</a>
					</div>
					<div>
						<a><img src="../assets/img/15.png">帮助</a>
					</div>
				</div>
			</div>
			<div class="mainContainer">
				<div>
					<div class="banner">
						<a><img src="../assets/img/98.png"></a>
						<li>注册机构</li>
					</div>

				</div>
				<div  class="tabNav" style="">

				  	<div class="tab-menu" style="display: inline-block;">
					  	<div   @click="selectTab='1'" class="tabDiv">
							<div class="tabTitle1"></div><div class="sjx"></div>
							<span class="titleSpan">服务协议</span>
						</div>
				  		<div   @click="selectTab='2'" class="tabDiv" style="left:-40px;">
							<div class="tabTitle"></div><div class="sjx greedBorder"></div>
							<span class="titleSpan">提交诊所资质</span>
						</div>
				  		<div   @click="selectTab='3'" class="tabDiv" style="left:-80px;"> 
							<div class="tabTitle"></div><div class="sjx"></div>
							<span class="titleSpan">完成诊所信息</span>
						</div>
				  		<div   @click="selectTab='4'" class="tabDiv" style="left:-120px;">
							<div class="tabTitle"></div><div class="sjx"></div>
							<span class="titleSpan">注册管理员账号</span>
						</div>
				  	</div>
				</div>
			    <div class="tabPancel" style="margin-bottom:30px;"  v-show="selectTab=='1'">
					<div class="tab-pancel-item">
						<p style="color:orange;">更新时间:2017-03-06</p>
						<div>
							<p>百慧云诊所服条款</p>
							<p>欢迎您使用百慧云诊所！</p>
							<p style="line-height:28px;">本专家医生、医技设备、住院床位是医院最紧缺的医疗服务资源之一，全院统一预约管理系统可实现人员与资源的合理分配，节约患者等待时间，推动医疗服务资源发挥最大效能，更好地辅助医院经营决策。
							专家医生、医技设备、住院床位是医院最紧缺的医疗服务资源之一，全院统一预约管理系统可实现人员与资源的合理分配，节约患者等待时间，推动医疗服务资源发挥最大效能，更好地辅助医院经营决策。
							专家医生、医技设备、住院床位是医院最紧缺的医疗服务资源之一，全院统一预约管理系统可实现人员与资源的合理分配，节约患者等待时间，推动医疗服务资源发挥最大效能，更好地辅助医院经营决策。
							专家医生、医技设备、住院床位是医院最紧缺的医疗服务资源之一，全院统一预约管理系统可实现人员与资源的合理分配，节约患者等待时间，推动医疗服务资源发挥最大效能，更好地辅助医院经营决策。
							专家医生、医技设备、住院床位是医院最紧缺的医疗服务资源之一，全院统一预约管理系统可实现人员与资源的合理分配，节约患者等待时间，推动医疗服务资源发挥最大效能，更好地辅助医院经营决策。
							专家医生、医技设备、住院床位是医院最紧缺的医疗服务资源之一，全院统一预约管理系统可实现人员与资源的合理分配，节约患者等待时间，推动医疗服务资源发挥最大效能，更好地辅助医院经营决策。
							</p>
							<p>1、账号</p>
							<p>A. 在使用本专家医生、医技设备、住院床位是医院最紧缺的医疗服务资源之一，全院统一预约管理系统可。</p>
						</div>
					</div>
					<el-checkbox class="agreeCheckbox">同意《百慧云诊所服务条款》</el-checkbox><br/>
					<button @click="confirmRead()">确定</button>
					<el-progress :text-inside="true" :stroke-width="18" v-bind:percentage="progressPercent" v-show="showProgress"></el-progress>
			    </div>
			    <div class="tabPancel2" style="margin-bottom:30px;" v-show="selectTab=='2'">
					<div class="tab-pancel-item">
						<div class="titleDiv">诊所信息</div>
						<el-form class="infoForm">
							<el-form-item label="诊所名称：">
				    			<el-input style="width:250px;"></el-input>
				  			</el-form-item>
				  			 <el-form-item label="诊所类型：" prop="type">
							    <el-radio-group v-model="ruleForm.type">
							        <el-radio label="公立"></el-radio>
							        <el-radio label="私营"></el-radio>
							    </el-radio-group>
							</el-form-item>
							<el-row>
								<el-col :span="6">
									<span>上传《医疗执业资格证》：（需清晰、完整）</span>
								</el-col>
								<el-col :span="12">
									<el-upload
									  	action="https://jsonplaceholder.typicode.com/posts/"
									  	list-type="picture-card"
									  	:on-preview="handlePictureCardPreview"
									  	:on-remove="handleRemove">
									  	<i class="el-icon-plus"></i>
									</el-upload>
									<el-dialog v-model="dialogVisible" size="tiny">
									  <img width="100%" :src="dialogImageUrl" alt="">
									</el-dialog>
									<div style="min-height:50px;line-height:50px;height:auto;">
										<span style="color:#20a0ff;font-size:16px;"><i class="fa fa-cloud-upload"></i>上传图片</span>
									 	<span style="color:#C3C3C3;font-size:14px;">(支持扩展名：.jpg .png大小不超过4MB)</span>
									</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="8" style="max-width:220px;">
									<span>《医疗执业资格证》有效期：</span>
								</el-col>
								<el-col :span="12">
									<el-form-item prop="date1">
								        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
								    </el-form-item>
								</el-col>
							</el-row>
						</el-form>
					</div>
					<button>下一步</button>
			    </div>
			     <div class="tabPancel3" style="margin-bottom:30px;" v-show="selectTab=='3'">
					<div class="tab-pancel-item">
						<div class="titleDiv">完善诊所信息</div>
						<el-form class="infoForm">
							<el-row>
								<el-col :span="6">
									<span>诊所名称:</span>
								</el-col>
								<el-col :span="12">
									<el-row><span>XXXXXXX诊所</span></el-row>
									<el-row>
										<el-upload
										  	action="https://jsonplaceholder.typicode.com/posts/"
										  	list-type="picture-card"
										  	:on-preview="handlePictureCardPreview"
										  	:on-remove="handleRemove"
										  	style="height:80px;">
										  	<i class="el-icon-plus"  style="position:relative;top:-30px;"></i>
										</el-upload>
										<el-dialog v-model="dialogVisible" size="tiny">
										  <img width="100%" :src="dialogImageUrl" alt="">
										</el-dialog>
										<div style="min-height:40px;line-height:40px;height:auto;">
											<span style="color:#20a0ff;font-size:16px;"><i class="fa fa-cloud-upload"></i>上传logo</span>
										 	<span style="color:#C3C3C3;font-size:14px;">(支持扩展名：.jpg .png大小不超过4MB)</span>
										</div>
									</el-row>
								</el-col>
							</el-row>
							<el-form-item label="集团性质：" prop="type" style="margin-bottom: 0px;">
							    <el-radio-group v-model="ruleForm.type">
							        <el-radio label="连锁集团"></el-radio>
							        <el-radio label="单体诊所"></el-radio>
							    </el-radio-group>
							</el-form-item>
							 <el-form-item label="医保定点：" prop="type">
							    <el-radio-group v-model="ruleForm.type">
							        <el-radio label="已有医保"></el-radio>
							        <el-radio label="正在申请"></el-radio>
							        <el-radio label="不会接入医保"></el-radio>
							    </el-radio-group>
							</el-form-item>
							<el-form-item label="营业时间：">
				    			<el-input style="width:250px;"></el-input>
				  			</el-form-item>
				  			<el-form-item label="诊所电话：">
				    			<el-input style="width:250px;"></el-input>
				  			</el-form-item>
				  			<el-form-item label="诊所地址">
				    			<el-select v-model="value4" clearable placeholder="请选择" stylw="width:100px;">
								    <el-option
									    v-for="item in options"
									    :key="item.value"
									    :label="item.label"
									    :value="item.value">
								    </el-option>
								</el-select>
								<el-select v-model="value4" clearable placeholder="请选择" stylw="width:100px;">
								    <el-option
									    v-for="item in options"
									    :key="item.value"
									    :label="item.label"
									    :value="item.value">
								    </el-option>
								</el-select>
								<el-input style="width:150px;"></el-input>
				  			</el-form-item>
						</el-form>
					</div>
					<button>下一步</button>
			    </div>
			    <div class="tabPancel4" style="margin-bottom:30px;" v-show="selectTab=='4'">
					<div class="tab-pancel-item">
						<div class="titleDiv">管理员登记</div>
						<el-form :label-position="left" label-width="80px" :model="formLabelAlign">
					  		<el-form-item label="真实姓名：" >
					   			<el-input placeholder="请输入您的真实姓名，以便联系"></el-input>
					  		</el-form-item>
					  		<el-form-item label="联系电话：">
					    		<el-input placeholder="请输入您常用的手机号码，以便联系"></el-input>
					  		</el-form-item>
					  		<el-form-item label="联系邮箱：">
					    		<el-input placeholder></el-input>
					  		</el-form-item>
					  		<el-form-item label="设置用户名：">
					    		<el-input placeholder="设置您的登录账号名，请使用大小写字母、数字组合"></el-input>
					  		</el-form-item>
					  		<el-form-item label="设置密码：">
					    		<el-input placeholder="设置您的登录密码，请使用6~16位大小写字母、数字组合"></el-input>
					  		</el-form-item>
					  		<el-form-item label="重复密码：">
					    		<el-input placeholder="重复输入您设置的登录密码"></el-input>
					  		</el-form-item>
						</el-form>
					</div>
					<button>完成</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	/*import tabDiv from '../components/tabDiv';*/
	export default {
 		data() {
     		return {
     			agreeItem:false,
     			showProgress:false,
     			progressPercent:0,
     			selectTab: '1',
		        ruleForm: {
		          	date1: '',
		          	type: '',
		        },
	     		rules: {
		        	date1: [
	        			{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }
	          		],
	          		 type: [
			            { required: true, message: '请选择诊所类型', trigger: 'change' }
			        ],
		        },
		        options: [
		        	{
	          			value: '选项1',
	          			label: '黄金糕'
        		   	},
        		   	{
				        value: '选项2',
				        label: '双皮奶'
    				}, 
    				{
			           value: '选项3',
			           label: '蚵仔煎'
                    }
                ],
                value: '',
	    	}
		},
		methods: {
			confirmRead(){
				this.showProgress=true;
				var data=this;
				setInterval(function(){
					if(data.progressPercent!=100)
						data.progressPercent+=10;
					else return;
				},1000)
			}
		},
		/*components:{
			tabDiv,
		}*/
	}

</script>
<style>
	.registerContainer{
		background-color: #F6F6F6;
		width:86%;
		margin: 0 auto;
	}
	.registerContainer>*,.mainContainer>*{
		margin-bottom: 30px;
	}
	.registerContainer .topNav{
		height: 40px;
		background-color: white;
		line-height: 50px;
		box-shadow:  0px -1px 0px 0px #FFFFFF,   
		            -2px 0px 1px   #FFFFFF,  
		            -2px 0px 1px   #FFFFFF,    
	                0px 1px 1px #C8C8C8;    /*下边阴影*/
	}
	.registerContainer .topNav img{
		position: relative;
		top:5px;
	}
	.registerContainer .topNav>div{
		display: inline-block;
		width: auto;
		float: right;
		padding-right: 30px;
	}
	.registerContainer .topNav>div div{
		padding-right: 20px;
		display: inline-block;
	}
	.registerContainer .mainContainer{
		background-color: #F6F6F6;
		box-shadow:  0px -1px 0px 0px #FFFFFF,   
		            -2px 0px 1px   #FFFFFF,  
		            -2px 0px 1px   #FFFFFF,    
	                0px 1px 1px   #FFFFFF,      /*下边阴影*/
	}
	.registerContainer .mainContainer>div{
		margin-right: 50px;
		margin-left: 50px;
		text-align: left;
	}
	.registerContainer .mainContainer .banner li{
		display: inline-block;
		margin-left: 30px;
		font-size: 20px;
	}
	.registerApp .mainContainer .tab-menu .tab-item{
		width: 23%;
		text-align: left;
		display: inline-block;
		color: #C7C7C7;
	}
	.registerApp .mainContainer .tabNav .tab-menu{
		width: 100%;
		min-height: 40px;
		height: auto;
		line-height: 40px;
		background-color: #EEEEEE;
	}
	.registerApp .mainContainer .triangle{
		border: 20px solid;
		border-color:  transparent  transparent transparent #000;
		width: 0;
		display: inline-block;
	}
	.registerApp .mainContainer .tab-pancel-item{
		background-color: white;
		padding-left: 20px; 
		padding-right: 20px;
		height: 450px;
		overflow: auto;
		margin-bottom: 50px;
		box-shadow:  0px -1px 0px 0px #FFFFFF,   
		            -2px 0px 1px   #FFFFFF,  
		            1px 0px 1px  #C8C8C8,  
	                0px 2px 1px #C8C8C8;    /*下边阴影*/
	}
	.registerApp button{
		width: 30%;
		max-width: 250px;
		background-color: #21D081;
		color: white;
		height: 40px;
		font-size: 16px;
		margin: 30px auto;
		display: block;
		letter-spacing: 8px;
		border: none;

	}
	.registerApp .mainContainer .el-checkbox__input.is-checked .el-checkbox__inner{
		background-color: #21D081;
		border-color:  #21D081;
	}
	.registerApp .mainContainer .titleDiv{
		height: 40px;
		line-height: 40px;
		/* border-bottom: 1px solid  #C8C8C8; */
	}
	 .el-date-table td.today:before {
		border-top: .5em solid #21D081 !important;
	}
	.el-date-table td.current:not(.disabled){
		background-color: #21D081 !important;
	}
	.registerApp .infoForm{
		width: 70%;
		margin: 0 auto;
	}
	.tabPancel3 .el-upload--picture-card{
		height: 80px;
	}
	.tabPancel4 .el-form-item__label{
		min-width: 100px;
		width: auto;
	}
	.tabPancel4 .el-form-item__content{
		width: 50%;
		max-width: 350px;
		margin-left: 100px !important;
	}
	.tabPancel4  .el-form{
		width: 80%;
		margin: 0 auto;
	}
	.registerApp .el-progress-bar__outer{
		height:  38px !important;
		width: 30%;
		max-width: 250px;
		background-color: #DBDBDB;
		margin: 30px auto;
		border-radius: 0px;
	}
	.registerApp .el-progress-bar__inner{
		background-color: #CCCCCC;
		border-radius: 0px;
	}
	 .tabDiv{
    	display: inline-block;
    	position: relative;
    	color: #C7C7C7;
    	height: 40px;
    }
	.tabDiv .tabTitle{
		width:120px;
		border: 20px solid;
		border-color:  #21D081 #21D081 #21D081 transparent;
		display: inline-block;
	}
	.tabDiv .tabTitle1{
		width: 160px;
		height: 40px;
		display: inline-block;
		background-color: #21D081;
	}
	.tabDiv  .sjx{
		border: 20px solid;
		border-color: transparent transparent transparent #21D081 ;
		width: 0px;
		display: inline-block;
	}
	.tabDiv  .titleSpan{
		position: absolute;
		z-index: 10;
		top:0px;
		left: 40px;
	}
</style>