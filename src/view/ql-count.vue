<template>
	<div class="ql-count">
		<el-tabs type="border-card">
			<el-tab-pane label="财务报表">
				<div class="caiwu">
					<el-tabs>
						<el-tab-pane label="营收报表">
							<div class="yingshou">
								<el-tabs type="border-card">
									<el-tab-pane>
										<span slot="label"><i class="el-icon-date"></i> 图表</span>
										<div class="yingshou-tubiao">
											
											<div id="ys-tb"  :style="{
											width:'1000px',
											height:'400px',
											margin:'0 85px',
											border:'1px soild #dedede'
											 }"></div>

											<div id="ys-tb2"  :style="{width:'800px',height:'400px', margin:'0 85px' }"></div>
										</div>

									</el-tab-pane>

									<el-tab-pane>
										<span slot="label"><i class="el-icon-date"></i> 汇总表</span>
									</el-tab-pane>

									<el-tab-pane>
										<span slot="label"><i class="el-icon-date"></i> 明细表</span>
									</el-tab-pane>
								</el-tabs>
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>
			</el-tab-pane>
			<el-tab-pane label="医疗报表">
				<div class="yiliao">
					<el-tabs>
						<el-tab-pane label="病人来源">
							
						</el-tab-pane>

						<el-tab-pane label="医生出诊">
							
						</el-tab-pane>
					</el-tabs>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
import echart from "../../static/echarts.common.min.js"
 export default{
        data (){
            return {
                msg:"123"
            }
        },
        mounted (){
        	var theme = {
        	    color: [
        	        '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
        	        '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
        	        '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
        	    ],
        	};
            var myChart = echart.init(document.getElementById('ys-tb'),theme );
            myChart.setOption({
                title: { text: '收入汇总表',x:'center' },
                // tooltip: {
                // 	trigger:'axis'
                // },
                calculable : true,
                xAxis: {
                	type : 'category',
                	boundaryGap : false,
                    data: ["06","07","08","09","10","11","12","01","02","03","04","05"]
                },
                yAxis: {
                	type : 'value',
                	axisLabel : {
                	                formatter: '{value} '
                	            },
                	// data: ["10,000","20,000","30,000","40,000","50,000","60,000","70,000","80,000","90,000"]
                },
                series: [{
                    type:'line',
                    itemStyle : {  
                    	normal : {
                    		color:'#1FCA7E',
                            lineStyle:{  
                                color:'#1FCA7E', 
                                
                            }  
                        }  
                    },  
                    data: [48000,50000,53000,52000,49500, 65000, 69000, 67000,64000,72000,81000, 82000]
                }]
            });
			var myChart2 = echart.init(document.getElementById('ys-tb2'),theme );
			myChart2.setOption({
			    title: { text: '收入汇总表',x:'center' },
			    // tooltip: {
			    // 	trigger:'axis'
			    // },
			    calculable : true,
			    xAxis: {
			    	type : 'category',
			    	boundaryGap : false,
			        data: ["06","07","08","09","10","11","12","01","02","03","04","05"]
			    },
			    yAxis: {
			    	type : 'value',
			    	axisLabel : {
			    	                formatter: '{value} '
			    	            },
			    	// data: ["10,000","20,000","30,000","40,000","50,000","60,000","70,000","80,000","90,000"]
			    },
			    series: [{
			        type:'line',
			        itemStyle : {  
			        	normal : {
			        		color:'#1FCA7E',
			                lineStyle:{  
			                    color:'#1FCA7E', 
			                    
			                }  
			            }  
			        },  
			        data: [48000,50000,53000,52000,49500, 65000, 69000, 67000,64000,72000,81000, 82000]
			    }]
			});
        }

    }
</script>

<style>
.ql-count .el-tabs--border-card {
    border-radius: 5px;
}
.ql-count .el-tabs__header {
    box-shadow: 0px 2px 1px #dedede;
    border-radius: 5px;
}
.ql-count .el-tabs__nav-scroll {
    border-radius: 5px;
    background: #fff;
}
.ql-count .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    background-color: #21D081;
}
.ql-count .el-tabs__item.is-active {
    color: #fff;
}
.ql-count .caiwu .el-tabs__item.is-active, .ql-count .yiliao .el-tabs__item.is-active {
    color: #000;
} {
    color: #000;
}
.ql-count .yingshou .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    background-color: #fff;
        padding: 0 10px;
    border: 2px solid;
    border-radius: 5px;
}

.ql-count .el-tabs__active-bar {
    background-color: #21D081;
}
.ql-count .el-tabs--border-card>.el-tabs__content {
     padding: 10px 0; 
}
.ql-count .yingshou .el-tabs--border-card>.el-tabs__content {
     border: none;
}
.ql-count .yingshou .el-tabs__item.is-active {
    color: #34c562;
}
.ql-count .yingshou .el-tabs__header {
    box-shadow: none;
}
.yingshou .el-tabs--border-card {
	border:none;
}
</style>