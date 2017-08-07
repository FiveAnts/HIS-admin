import Vue from 'vue'   //因为vue导入的不是全局的
const Project ={
	 // 存储状态值
	state: {
		projectTab:'1',
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
		updateProjectTab (state, message) {
		    state.projectTab = message;
		},
	},
}
export default Project;