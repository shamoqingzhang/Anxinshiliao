<template>
  <div class="goCart">
    <router-link class="iconfont icon-gouwuche" to="/cart"></router-link>
  </div>
</template>

<script>
	import "../../assets/css/font/iconfont.css"
	export default{
		name:"goCart",
		data(){
			return{
				
			}
		}
		
	}
</script>

<style scoped lang="less">
	.goCart{
		position:fixed;		
		bottom:120/50rem;
		right:40/50rem;
		width:86/50rem;
		height:86/50rem;
		border:3/50rem solid #43BF92;
		border-radius:50%;
		text-align: center;
		line-height:86/50rem;
		&>a{
			color:#43BF92;
			font-size:48/50rem;
		}   
		
	}
</style>