import Vue from 'vue';
const item={
	 // 存储状态值
	state: {
		projectTab:'1',
		infoItems:[],
		selectItems:[],
		classify:[],
	},
	mutations: {
		getData(state){
			let k= state;
			//采用this.$http才不用导入vue
			Vue.http.get('../../../static/dataJson/Project/item.json').then(function(response){
				k.infoItems=response.data.infoItems;
				k.classify=response.data.classify;
			}, function(response){
				this.$message('请求失败.');
			})
		},
	},
};
export default item;