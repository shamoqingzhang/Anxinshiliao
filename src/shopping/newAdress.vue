<template>
 <div class="newAdress">
 	<OrderHead :list="list"/>
 	<div class="newAdd" v-for="(item,index) in items">
 		<span>{{item.title}}</span>
 		<input type="text" :placeholder="item.tip" />
 		<span :class="item.iconfontClass"></span>
 	</div>
 	<div class="keepAdress">保存并使用</div>
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
						title:"新增收货地址",						
					
			   },
			   items:[
			      {title:"姓名",tip:"最少两个字,最多12个字"},
			      {title:"电话",tip:"最少7位数"},
			      {title:"省份",tip:"北京",iconfontClass:"iconfont icon-fanhui-copy"},
			      {title:"城市",tip:"北京",iconfontClass:"iconfont icon-fanhui-copy"},
			      {title:"地区",tip:"海定区",iconfontClass:"iconfont icon-fanhui-copy"},
			      {title:"地址",tip:"最少两个字,最多12个字"},
			      {title:"邮编",tip:"输入6位数"}
			   ]
				
			}
		},
		components:{
			OrderHead
		}
	}
</script>

<style scoped lang='less'>

.newAdress{
	width:100%;
  height:1334/50rem;
  background: #ffffff;
  font-size:28/50rem;
	
    .newAdd{
  	     width:670/50rem;
  	     line-height:70/50rem;
  	     margin-left:40/50rem;
  	     border-bottom:1/50rem solid #BABABA;
  	     position:relative;
  	     &>span{
  	     	display: inline-block;
  	     	margin-right:20/50rem;
  	     }
  	     &>input{
  	     	border: none;
  	     }
  	      &>span:last-child{
  	      	position: absolute;
  	      	right:0;
  	      }
    }
} 
.keepAdress{
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