<template>
 <div>
	<div class="nurseCon " v-for="(item,index) in items" :key="index">
		<p>根据你的  <span>痰湿体质</span> 推荐</p>
		<div class="con clearfix">
			<div class="left">
				<img :src="item.url" alt="" />
			</div>
			<div class="right">
				<p>{{item.title}}</p>
				<p>{{item.functions}}</p>
				<p>{{item.price}}</p>
			</div>
		</div>
		
	</div>
 </div> 	
</template>

<script>
	export default{
		name:"nurseCon",
		data(){
			return{
				items:[
				   { url:require("../../assets/img/nurse2.png"),
				     title:"五珍粥",
				     functions:"健脾祛湿  补肾益气",
				     price:"¥36.50"				     
					
				  },
				   { url:require("../../assets/img/nurse3.png"),
				     title:"温县铁棍山药",
				     functions:"补脾养胃  生津益肺",
				     price:"¥150.00"				     
					
				  },
				   { url:require("../../assets/img/nurse4.png"),
				     title:"苓陈益中丸",
				     functions:"厨师健脾 益气和中",
				     price:"¥98.50"				     
					
				   }
				
				]
			}
		}
	}
</script>

<style scoped lang="less">
   .nurseCon{
   	 width:100%;
   	 padding:45/50rem 55/50rem 64/50rem 55/50rem;   	
   	 border-bottom:1/50rem solid #BABABA;
   	 &>p{
   	 	background:url(../../assets/img/nurse1.png) no-repeat;
   	 	padding-left:40/50rem;
   	 	background-size:38/50rem 38/50rem;
   	 	font-size:28/50rem;
   	 	padding-bottom:14/50rem;
   	 	color:#414141;
   	 	span{
   	 		font-weight:bold;
   	 		color:#000000;
   	 	}
   	 }
   	 .con{   	 	
   	 	 .left{
   	 	width:284/50rem;
   	 	height:284/50rem;
   	 	float:left;
   	 	 &>img{
   	 	 	width:284/50rem;
   	 	 	height:284/50rem;
   	 	 }
   	   };
   	   .right{
   	   	 float:left;
   	   	 margin-left:36/50rem;
   	   	 p{
   	   	 	margin-bottom:65/50rem;
   	   	 }
   	   	 p:first-child{
   	   	 	font-size:36/50rem;
   	   	 	color:#414141;
   	   	 	font-weight:bold;
   	   	 }
   	   	 p:nth-of-type(2){
   	   	 	font-size:28/50rem;
   	   	 	color:#414141;
   	   	 }
   	   	  p:nth-of-type(3){
   	   	 	font-size:28/50rem;
   	   	 	color:#ffbf92;
   	   	 	font-weight:bold;
   	   	 	margin:0;
   	   	 }
   	   }
   	   
   	 }   	
   	 
   	   
   }

</style>