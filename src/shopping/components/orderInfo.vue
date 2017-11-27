<template>
	<div class="OrderInfo">		
	  <div class="orderInfo clearfix" v-for="item in items" v-if="item.xs">
			<div class="left">					
				<img :src="item.url" alt="" />
			</div>
			<div class="right">				
				<p>{{item.title}}</p>
				<p>{{item.info}}</p>
				<p>{{item.count}}</p>
				<p>{{item.price}}</p>
				<span>x{{item.num}}</span>
			</div>
	  </div>
	    <div class="lists">
	        <div class="info clearfix" v-for="(item,index) in lists" :key="index">
	  	            <div class="left">{{item.key}}</div>
	  	            <div class="right">
	  		           <p>{{item.value1}}</p>
	  		           <p>{{item.value2}}</p>
	  	            </div>
	        </div>
        </div >
        <div class="total">
			<div></div>
			<div>合计: <span>¥{{zj}}</span></div>
			<div><router-link to="/adress">去支付</router-link></div>			
		</div>
    </div>
</template>

<script>
	export default{
		name:"orderInfo",
		data(){
			return{
				lists:[
				    {key:"配送方式",value1:"免运费",value2:"快速发货"},
				    {key:"买家留言:",value1:"",value2:""},
				    {key:"合计",value1:"¥45",value2:""},
				    {key:"商品金额",value1:"¥45",value2:""},
				    {key:"运费",value1:"+¥0.00",value2:""}
				]
				
			}
		},
		computed:{
			zj(){
				this.lists[2].value1="¥"+this.$store.state.Price;
				this.lists[3].value1="¥"+this.$store.state.Price;
				return this.$store.state.Price;
			}
			
		},		
		props:{
			items:{
				type:Array,
				default:function(){
					return []
					
				}
			}/*,
			arr:{
				type:Array,
				default:function(){
					return []
					
				}
			}*/
		}
	}
</script>

<style scoped lang="less">
.OrderInfo{
	padding-bottom:100/50rem;
}
.orderInfo{
    width:100%;
	margin-bottom:20/50rem;
	padding:10/50rem 40/50rem;	
	height:240/50rem;
	background:#ffffff;	
	    &>.left{
		  float:left;
		  width:194/50rem;
		  height:240/50rem;
		 
		    &>img{
			  width:184/50rem;
			  height:184/50rem;
		    }
	    }
	    &>.right{
		   width:476/50rem;
		   height:240/50rem;
		   float:left;
		   padding-left:20/50rem;
		   position: relative;
		   &>p{
		   	font-size:26/50rem;
		   	color:#BABABA;
		   	line-height:50/50rem;
		   	 &:first-child{
		   	 	color:#414141;
		   	 	font-size:30/50rem;
		   	 	line-height:40/50rem;
		   	 }
		   	 &:nth-of-type(4){
		   	 	color:#c53336;
		   	 	position: absolute;
		   	 	right:0;
		   	 	top:0		   	 	   	 	
		   	 }		   	 
		   	
		   }
		   &>span:last-child{
		   	   position:absolute;
		   	   right:0;
		   	   top:140/50rem;
		   	   
		   }
		
	    }
    }
   .lists{
    .info{
    	width:100%;
    	height:110/50rem;    	
    	padding-left:40/50rem;  	
    	&>.left{
    		width:590/50rem;
    		height:110/50rem;
    		line-height:110/50rem;
    		float:left;
    	}    	
    	&>.right{
    		width:120/50rem;
    		height:110/50rem;
    		line-height:110/50rem;
    		float:right;
    		&>p{
    			width:120/50rem;
    		    height:110/50rem;
    		    line-height:110/50rem;
    		}
    		
    	}   
   
    	
    }
    .info:first-child{
    	&>.right{
    		width:120/50rem;
    		height:110/50rem;
    		line-height:110/50rem;
    		float:right;
    		&>p{
    			width:120/50rem;
    		    height:55/50rem;
    		    line-height:55/50rem;
    		}
    		
    	}   
    }
    .info:nth-of-type(3){
    	&>.right{
    		&>p:first-child{
    			color:#c53336;
    		}
    	}
    }
  }
  .total{
    	width:100%;
    	line-height:100/50rem;
    	background: #ffffff;
    	position: fixed;
    	left:0;
    	bottom:0;
    	display: flex;
    	padding-left:40/50rem;
    	&>div{
    		flex-grow: 1;    		
    		&>input{
    			margin-right:10/50rem;
    			width:38/50rem;
    			height:38/50rem; 
    			transform: translateY(5/50rem);   			
    		}
    	}
    	&>div:nth-of-type(2){
    		flex-grow: 0.2;   
    		&>span{
    			font-size:30/50rem;
    			color:#c53336;
    		}
    		
    	}
    	&>div:nth-of-type(3){    	
    		text-align:center;
    		&:hover{
    			background:#c53336;
    		}
    		&:hover a{
    			color:#ffffff
    		}
    	}
    }
	
</style>