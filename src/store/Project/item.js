import Vue from 'vue'   //因为vue导入的不是全局的
export default {
	 // 存储状态值
	state: {
		infoItems:[],
		selectItems:[],
		classify:[],
		formInline: {
  			classify: "",
  			state: "",
  			name:""
		}
	},
	mutations: {
		getData(state){
			let k= state;
			//采用this.$http才不用导入vue
			Vue.http.get('../../../static/dataJson/Project/item.json').then(function(response){
				k.infoItems=response.data.infoItems;
				k.classify=response.data.classify;
			}, function(response){
				alert("请求失败了")
			})
		},
		/*getSelectData(state){

			let k= state;
			console.log("cccccc"+k.formInline.classify);
			//采用this.$http才不用导入vue
			Vue.http.get('../../../static/dataJson/Project/item.json').then(function(response){
				if(k.formInline.classify!==""){
					for(let i=0,j=0;i<response.data.infoItems.length;i++){
						if(response.data.infoItems[i].classify===k.formInline.classify){
							j++;
							k.selectItems[j]=response.data.infoItems[i];
						}
					}
					k.infoItems=k.selectItems;
					console.log(k.infoItems);
				}
			}, function(response){
				alert("请求失败了")
			})
		}*/
	},
}