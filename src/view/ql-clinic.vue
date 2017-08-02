<template>
	<div class="ql-clinic">
		<el-tabs type="border-card">
		  <el-tab-pane label="基本信息">
			<div class="basic">
				<el-col :xs="6" :sm="6" :md="6" :lg="6">
					<div class="clinic-img">
						<div class="user-img">
							<img src="../assets/image/logo03.png">
							<div class="clinic-uploder">
								<button type="button" class="el-button filter-item el-button--priamary" style="margin-top:10px;">
									<i class="el-icon-upload2"></i>
									修改logo
								</button>
							</div>
						</div>
					</div>
				</el-col>
				<el-col :xs="18" :sm="18" :md="18" :lg="18" class="clinic-introduction">
					
						<div class="intro-header ql-intro">
							<el-col :xs="24" :sm="24" :md="24" :lg="24">
								<p>爱康口腔牙科诊所
									<span class="bianma">集团编码：10000</span>
								</p>
							</el-col>
							<el-col :xs="24" :sm="24" :md="24" :lg="24">
								<p style="color:#d1d1d1">服务有效期至
									<span style="color:#F29930">2018年3月28日</span>
								</p>
							</el-col>							
						</div>
						<div class="intro-content ql-intro">
							<el-col :xs="24" :sm="24" :md="24" :lg="24">
								<p style="color:#d1d1d1;    margin-bottom: 45px;">简介：
									<div style="color:#8391a5; padding: 10px;text-align:left;">爱康口腔自2004年开业，即采用国际著名牙科设备制造商德国西诺德（SIRONA）品牌尚未全套医疗设备，实现整体化、全数字化、低辐射尚未全面口腔诊治，达到缩短治疗时间、减低疼痛、及消除交叉感染的目的。先进的技术和服务可以帮您解决牙科各个领域的问题，提供一步到位的全面解决方案，为您的口腔健康保驾护航。
									<br />
									......
									</div>
								</p>
							</el-col>
						</div>
					
				</el-col>
				<el-col :xs="24" :sm="24" :md="24" :lg="24">
					<el-table :data="tableData" border style="width: 100%">
					    <el-table-column  prop="number" label="编号" width="70">
					    </el-table-column>
					    <el-table-column prop="name" label="门店名称" width="120">
					    </el-table-column>
					    <el-table-column prop="time" label="营业时间" width="350">
					    </el-table-column>
					    <el-table-column prop="tel" label="电话" width="150">
					    </el-table-column>
					    <el-table-column prop="address" label="地址" width="350">
					    </el-table-column>
					    <el-table-column label="操作" width="100">
					      <template scope="scope">
					        <el-button @click="handleClick" type="text" size="small" ><i class="el-icon-edit"></i>编辑</el-button>
					      </template>
					    </el-table-column>
					  </el-table>
				</el-col>
				
			</div>

				<el-pagination
				    @size-change="handleSizeChange"
				    @current-change="handleCurrentChange"
				    :current-page="currentPage4"
				    :page-sizes="[10, 20, 30, 40]"
				    :page-size="10"
				    layout="total,->,prev,pager,next,sizes,jumper"
				    :total="50">
				</el-pagination>
			
		  </el-tab-pane>
		  <el-tab-pane label="科室信息">角色管理</el-tab-pane>
		  <el-tab-pane label="人员信息">定时任务补偿</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default{	
		data:function(){
			return {
				tableData:[{
					number:'010',
					name  :'珠江新城店',
					time  :'周一至周五08:30~21:00,周末14:00~21:00',
					tel   :'020-87000000',
					address:'广州市白云区广州大道中345号'
				},{
					number:'020',
					name  :'琶洲店',
					time  :'周一至周五08:30~21:00,周末14:00~21:00',
					tel   :'020-81456564',
					address:'广州市海珠区新港东路5号'
				},{
					number:'030',
					name  :'江南新店',
					time  :'周一至周五08:30~21:00,周末14:00~21:00',
					tel   :'020-84302585',
					address:'广州市海珠区江南大道中3号'
				}],
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 4
			};
		},
		methods: {
		      handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		      },
		      handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		      }
		},
	}
</script>

<style>
.el-tabs--border-card {
    border-radius: 5px;
}
.el-tabs__header {
    box-shadow: 0px 2px 1px #dedede;
    border-radius: 5px;
}
.el-tabs__nav-scroll {
    border-radius: 5px;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    background-color: #21D081;
}
.el-tabs__item.is-active {
    color: #fff;
}
.basic{
	width: 100%;
	height: 600px;
	background: #fff
}
.clinic-img{
	background: #fff;
	height:250px;
	padding:50px 5px 0px; 
}
.clinic-img .user-img img{
	height: 100px;
    margin-bottom: 40px;
}
.el-button {
    background: #fff;
    border: 1px solid #dedede;
    color: #50bfff;
}
.ql-intro{
	overflow: hidden;
	margin-bottom: 30px
}
.ql-intro p{
	float: left;
	margin: 9px;
}

.intro-header p span{
	margin: 5px;
}
.intro-header p .bianma{
	background-color: #82B9EC;
	color:#fff;
	padding: 5px 15px;
	font-size: 10px;
	border-radius: 5px;
}
.el-button {
	background: none;
    border: 0px;
}
.el-pagination__total {
    float: left;
}
.el-pagination .btn-next {
    margin-right: 10px;
}
.el-pagination .btn-next, .el-pagination .btn-prev {
    border: 0px solid #d1dbe5;
}
.el-pager li {
    
    border: 0px;
}
.el-pager li.active {
	border-radius: 50px;
    border-color: #21D081;
    background-color: #21D081;
    color: #fff;
    cursor: default;
}
.el-pager li:last-child {
     border-right: 0px; 
}
</style>