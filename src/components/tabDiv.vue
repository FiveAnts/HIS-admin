<template>
	<div  class="tabDiv">
		<div class="tabTitle"></div><div class="sjx"></div>
	</div>
</template>
<script>
	export default {
	}
</script>
<style>
    .tabDiv{
    	display: inline-block;
    	position: relative;
    }
	.tabDiv .tabTitle{
		width: 100px;
		display: inline-block;
		border: 20px solid;
		border-color:  #21D081 #21D081 #21D081 transparent;
		display: inline-block;
	}
	.tabDiv  .sjx{
		border: 20px solid;
		border-color: transparent transparent transparent #21D081 ;
		width: 0px;
		display: inline-block;
	}

</style>

