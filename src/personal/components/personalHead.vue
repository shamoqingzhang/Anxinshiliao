<template>
	<div class="personalHead">
		<router-link to="/home"> <span class="iconfont icon-jilu"></span>日常记录</router-link>		
		<router-link to="/nurse"> <span class="iconfont icon-shiwuqimin"></span>症状调理</router-link>    
	</div>
</template>

<script>
	
</script>

<style scoped lang="less">
	a{
  		 font-size:36/50rem;
  		 display:inline-block;  		 
  		 width:49.3%;
  		 height:68/50rem;
  		 padding:10/50rem 0;
  		 line-height:68/50rem;
  		 text-align: center; 
  		 color:#414141;	
  		 margin-top:60/50rem;
  		 margin-bottom:30/50rem;
  		 span{
  		 	font-size:37/50rem;
  		 	margin-right:20/50rem;  			
  		 }
  		 &:first-child{
  			border-right:1/50rem solid #414141;
  		 };	
  		 &:hover{ 
  			color:#43bf92;
  		 }
  		
  	};
</style>