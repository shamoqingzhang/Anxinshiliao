<template>
 <div class="order">
 	<OrderHead :list="list"/>
 	<div onclick=window.history.go(-1)  @click="clear" class="button"></div>
 	<div class="uname clearfix">
 		<div class="map">
 		<img src="../assets/img/orderMap.png" alt="" />
 		</div>
 		<div class="unameInfo">
 			<p>
 			    姓名:<span>王淼</span>
 			 	<span>1581321992</span>
 			</p>
 			<p>
 			      地址:<span>北京市海定区西三旗桥东金燕龙大厦101</span>
 			</p>
 		</div>
 		<div >
 			<span class="iconfont icon-fanhui-copy-copy"></span>
 		</div>
 	</div>
 	<OrderInfo :items="items"/>
 </div>
</template>

<script>
	import "../assets/css/font/iconfont.css"
	import OrderHead from "./components/orderHead"
	import OrderInfo from "./components/orderInfo"
	export default{
		name:"order",
		data(){
			return{	
				/*nowPrice:0,*/
			    itemss:[],
				list:{
						left:"返回",
						back:"<",
						title:"购物订单",						
					
			    }/*,
			    items:[{
			   	   url:require("../assets/img/cart1.png"),
			   	   title:"东北有机红谷黄小米",
			   	   info:"2016秋收新东北有机红谷黄小米粒",
			   	   count:"2750g(5.5斤) 特产杂粮小米包邮",
			   	   price:'¥45'			   	   
			   	   
			   	 }],
			   	 num:1
				*/
			}
		},
		methods:{
			clear(){
			/*	console.log(this.$store.state.Price)*/
				for(var i=0;i<this.itemss.length;i++){
					
					this.$store.state.items[i].num=1;
					this.$store.state.items[i].choose=false;
					
				}
			}
		},
		computed:{
			
			items(){
				this.itemss=this.$store.state.items;
				return this.$store.state.items
			},
			Price(){
				return this.$store.state.Price
			}
			/*,
			arr(){
				return this.$store.state.arr
			}*/
		},
		components:{
			OrderHead,
			OrderInfo
		}
	}
</script>

<style scoped lang='less'>
.order{
	position: relative;
	&>.button{
		width:110/50rem;
		height:40/50rem;
		position: absolute;		
		top:28/50rem;
		left:18/50rem;
	}
}
.uname{
	width:100%;
	border-bottom:1/50rem solid #BABABA;
	margin-bottom:60/50rem;
	padding:20/50rem 0;
	&>div{
		float:left;
		height:156/50rem;
		font-size:30/50rem;		
	}
	
	&>.map{
		padding-left:40/50rem;
		width:100/50rem;
		line-height:136/50rem;	
		&>img{
			width:38/50rem;
			height:38/50rem;
		}
	}
	&>.unameInfo{
		width:560/50rem;		
		&>p{			
			height:78/50rem;
			line-height:39/50rem;
			&:nth-child(1){

			}
		}	
	}
	&>div:last-child{
		width:70/50rem;
		height:156/50rem;
		line-height:126/50rem;
		padding-left:5/50rem;
	}
}
  
</style>