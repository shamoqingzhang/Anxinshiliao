<template>
 <div class="adress">
 	<OrderHead :list="list"/>
 	<div class="adressInfo" v-for="(item,index) in items">
 		<p><span>{{item.uname}}</span><span>{{item.tell}}</span></p>
 		<p>{{item.adress}}</p>
 		<div class="clearfix">
 			<div class="left"><span></span><span>设为默认地址</span></div>
 			<div class="right"><span>删除</span><span>编辑</span></div>
 		</div>
 	</div>
 	<router-link class="addAdress" to="/newAdress" tag="div">新增地址</router-link>
 </div>
</template>

<script>
	import OrderHead from "./components/orderHead"
	export default{
		name:"order",
		data(){
			return{
				list:{
						left:"返回",
						back:"<",
						title:"收货地址",						
					
			  },
				items:[
				    { uname:"李馨",
				      tell:18404908540,
				      adress:"北京市海定区西三旗桥东金燕龙大厦101"
				    },
				    {
				       uname:"王淼",
				       tell:15181321992,
				       adress:"北京市海定区西三旗桥东金燕龙大厦101"
				    }
				]
					
				
				
			}
		},
		components:{
			OrderHead
		}
	}
</script>

<style scoped lang='less'>
   .adressInfo{
   	   width:100%;
   	   height:220/50rem;
   	   padding-left:40/50rem;
   	   padding-right:40/50rem;
   	   border-bottom:1/50rem solid #BABABA;
   	   padding-top:20/50rem;
       font-size:28/50rem;
       .clearfix{
        padding-bottom:3/50rem; 
       }
   	   &>p{
   	   	 margin-bottom:20/50rem;
   	   	 &>span{
   	   	 	margin-right:20/50rem;
   	   	 }
   	   }
   	   &>div{
   	  
   	     &>.left{
   	     	float:left;
   	     	width:236/50rem;    	     	  	     	   	    
   	     	&:hover span:first-child{
   	     		
   	     		background:#43BF92;
   	     	}
   	     	
   	     	&>span{
   	     		color:#43BF92;
   	     		transform: translateY(4/50rem);
   	     	}
   	     	&>span:first-child{
   	     		display: inline-block;
   	     		width:30/50rem;
   	     		height:30/50rem;
   	     		border-radius:50%;
   	     		border:1/50rem solid #43BF92;
   	     		margin-right:10/50rem;
   	     	}
   	     }
   	     &>.right{
   	     	float:right;
   	     	width:160/50rem;   	     	
   	     	&>span{
   	     		margin-right:20/50rem;
   	     		color:#BABABA;
   	     	}
   	     }
   	   }
   	
    }
    .addAdress{
    	width:510/50rem;
    	line-height:80/50rem;
    	text-align:center;
    	background:#43BF92;
    	color:#ffffff;
    	font-size:30/50rem;
    	border-radius:20/50rem; 
    	margin-top:30/50rem; 
    	margin-left:16%;
    	
    	&:hover{
    		background:#2a946d;
    	}
    	
    }
  
</style>