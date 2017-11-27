<template>
	<div class="start">
		<router-link :to="{path:'/index'}">
			<img src="../assets/images/sp_03.png" class="img">
			<img src="../assets/images/logo_03.png" class="img1">
		</router-link>
	</div>
</template>
<script type="text/javascript">
export	default{
	name:'start',
	data(){
		return{

		}
	}
}
</script>
<style lang='less' scoped>
.start{
	overflow: hidden;
	width: 100%;
	background-color: #43bf92;
	.img{
		display: block;
		margin: 90/50rem auto 0;
		width: 80/50rem;
		height: 400/50rem;
	}
	.img1{
		width: 170/50rem;
		height: 155/50rem;
		margin: 0 auto;
		display: block;
		margin: 400/50rem auto 288/50rem;
	}
}
</style>