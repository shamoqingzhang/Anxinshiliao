<template>
	<div class="cartHead">
		<p onclick="window.history.go(-1)"><span>{{list.back}}</span>{{list.left}}</p>
		<p>{{list.title}}</p>		
	</div>
</template>

<script>
	export default{
		name:"cartHead",
		data(){
			return{
				
			}
		},
		props:{
			list:{
				type:Object,
				default:function(){
					return {}
				}
				
			}
		}
	}
</script>

<style scoped lang="less">
 .cartHead{
 	padding:0 20/50rem;
 	margin-bottom:54/50rem;
 	width:100%;
 	background:#43BF92; 	
 	line-height:88/50rem; 	
 	display:flex; 	
 	&>p{
 		color:#ffffff;
 		font-size:30/50rem;
 		flex-grow:1;
 		&:nth-of-type(2){
 		  font-size:36/50rem;
 		  flex-grow:1.5;
 		}
 		&>span{
 			font-size:38/50rem;
 			margin-right:10/50rem;
 		}
 	}
 	 
 }
</style>