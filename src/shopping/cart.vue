<template>
	<div class="cart">
		<CartHead :list="list"/>
		<div v-for="(item,index) in items" class="con">
		  <div class="edit" @click="getNum(index)" v-if="item.show">编辑</div> 	  	
	
		  <div class="cartCon clearfix" @click="personPrice(index)">
			<div class="left">
				<input type="checkbox" v-model="item.choose" @click="choose(index)"/>
				<img :src="item.url" alt="" />
			</div>			
			<div class="right" v-if="item.flag">
				<p>{{item.title}}</p>
				<p>{{item.info}}</p>
				<p>{{item.count}}</p>
				<p>¥{{item.price}}<span>x{{item.num}}</span></p>
			</div>
			<div class="right" v-if="!item.flag">
				<div class="num clearfix">
					<span @click="minus(index)" >-</span>
					<input type="text" v-model="item.num"/>
					<span @click="add(index)" >+</span>
					<span @click="total(index)">完成</span>
				</div>
			</div>
			
		  </div>
		</div>			
		<div class="total">
			<div><input type="checkbox" @click="both" v-model="bothShow"/>全选</div>
			<div><span>合计:</span>  <span>¥{{Price}}</span>  <span>不含运费</span></div>
			<div><router-link to="/order">结算   ({{Price}})</router-link></div>			
		</div>
		{{zj}}{{id}}
	</div>
</template>

<script>
	import CartHead from "./components/cartHead"	
	export default{
		name:"cart",
		data(){
			return{
				Id:"",
			    Price:0,
			    bothShow:false,
			    num:0,			  
			    list:{
						left:"关闭",
						wrong:"×",
						title:"购物车",
						right:"编辑"
					
			   }/*,
			   items:[{
			   	   url:require("../assets/img/cart1.png"),
			   	   title:"东北有机红谷黄小米",
			   	   info:"",
			   	   count:"",
			   	   price:45,			   	   
			   	   num:1,
			   	   total:0,
			   	   flag:true,
			   	   show:true
			   	   
			    },{
			   	   url:require("../assets/img/cart2.png"),
			   	   title:"东北有机养生黑米",
			   	   info:"2016秋收新东北有机养生黑米粒",
			   	   count:"2750g(5.5斤) 特产杂粮黑米包邮",
			   	   price:45,			   	   
			   	   num:1,
			   	   total:0,
			   	   flag:true,
			   	   show:true
			     }
			   
			   ]
			   */
				
			}
		},
		methods:{
			add(key){
				/*console.log(key)*/				
				this.items[key].num++;
				if(this.items[key].num>10){
					this.items[key].num=10
				}	
/*	   this.Add=this.items[key].num*this.items[key].price;*/
							
				
			},
			minus(key){
				/*console.log(key)*/				
				this.items[key].num--;
				if(this.items[key].num<1){
					this.items[key].num=1
				}
		/*this.Minus=this.items[key].num*this.items[key].price;
							*/
							
				
			},
			getNum(key){
			
				this.items[key].flag=false;
/*				console.log(this.items[key].flag)*/
				this.items[key].show=false;
			},
		
			total(key){
								
				if((/^1[0]$/).test(this.items[key].num)||(/^\d$/).test(this.items[key].num)){
					this.items[key].flag=true;
				    this.items[key].show=true;
				}else{
					this.items[key].num=10
				}
				
			/*	this.items[key].total=this.items[key].num*this.items[key].price;	*/		
				    this.Price=0;
					if(this.items[key].choose){					
					this.items[key].total=this.items[key].num*this.items[key].price;
					 for(var i=0;i<this.items.length;i++){
			
					   this.Price+=this.items[i].total
		
				  } 
				}
			/*	for(var i=0;i<this.items.length;i++){
			
					this.Price+=this.items[i].total
		
				}			*/
			        this.Id=key;
			        /*console.log(this.Id)*/
					
				
			   
				
				
			},
			personPrice(key){
			/*	console.log(this.items[key].choose)		*/	
				this.Price=0;
		/*		if(this.items[key].choose){*/
					this.items[key].total=this.items[key].num*this.items[key].price;
					for(var i=0;i<this.items.length;i++){
			        if(this.items[i].choose){
			        	this.Price+=this.items[i].total
			        }
		
				 } 
			/*	}*/
				this.Id=key;			
		
			        
			},
			choose(key){
				this.items[key].choose=!this.items[key].choose;
				if(!this.items[key].choose){
					this.bothShow=false;
				}
				if(this.items[key].choose){				
					this.items[key].id=key;
					if(this.items[key].id){
					     this.num++
				    }else if(this.items[key].id=="0"){
					     this.num++
				    }else{
					    return
				    }				
				}else{
					this.items[key].id=""
					this.num--
				};
  			/*     console.log("数量"+this.num)
				 console.log("长度"+this.items.length)*/
				 if(this.num==this.items.length){
				 	this.bothShow=true;
				 }
			
			},
			both(event){
				this.Price=0;
				this.bothShow=!this.bothShow;
				if(this.bothShow){
					for(var i=0;i<this.items.length;i++){			
			         this.items[i].xs=true;
					
					  this.items[i].choose=true;			
				       if(this.items[i].choose){				   	
					      this.items[i].total=this.items[i].num*this.items[i].price;
					      this.Price+=this.items[i].total;					  
					   }			
					
				  }
				}else{
					 for(var i=0;i<this.items.length;i++){	
					  this.items[i].choose=false;				
				  }
				}
				
			}
			
		},
		computed:{
			zj(){
				this.$store.state.Price=this.Price
			},
			items(){
				return this.$store.state.items
			},			
			id(){	
		/*		console.log(this.Id)
				console.log(this.$store.state.items[this.Id])*/
				if(this.Id){
/*					console.log(this.Id)
					console.log(this.$store.state.items[this.Id].choose)*/
					if(this.$store.state.items[this.Id].choose){
						this.$store.state.items[this.Id].xs=true;
					}else{
						this.$store.state.items[this.Id].xs=false;
					}
					
				}else if(this.Id=="0"){
					if(this.$store.state.items[0].choose){
						this.$store.state.items[0].xs=true;
					}else{
						this.$store.state.items[0].xs=false;
					}
				}else{
					this.num=0;
					for(var i=0;i<this.$store.state.items.length;i++){
						this.$store.state.items[i].xs=false
					}
				}
								
				
			}
		},		
		components:{
			CartHead
		}
	}
</script>

<style scoped lang="less">
.con{
	position: relative;
	.edit{
		position: absolute;
		right:32/50rem;
		top:10/50rem;
		font-size:28/50rem;
		z-index:999;
	}
	
}
.cart{	
	width:100%;
	height:1334/50rem;
	background:#f1f1f1;	
	.cartCon{
    width:100%;
	margin-bottom:20/50rem;
	padding:10/50rem 40/50rem;	
	height:240/50rem;
	background:#ffffff;	
	    &>.left{
		  float:left;
		  width:240/50rem;
		  height:240/50rem;
		  &>input{
		  	transform: translateY(-65/50rem);		  
		  	width:38/50rem;
		  	height:38/50rem;
		  }
		    &>img{
			  width:184/50rem;
			  height:184/50rem;
		    }
	    }
	    &>.right{
		   width:430/50rem;
		   height:240/50rem;		
		   float:left;
		   padding-left:20/50rem;
		   position: relative;
		   &>div{
		   	width:430/50rem;
		    height:80/50rem;
		    padding-top:10/50rem;
		    position: absolute;
		    top:35%;
		    left:0;
		    &>span:first-child{
		    	font-size:50/50rem;
		    }
		   	&>span{
		   		display:inline-block;
		   		width:70/50rem;
		   		height:70/50rem;
		   		text-align: center;
		   		line-height:60/50rem;
		   		float:left;
		   		font-size:40/50rem;
		   	}
		   	&>span:last-child{		   		
		   		position: absolute;
		   		width:200/50rem;		        
		   		right:0/50rem;
		   		top:5/50rem;
		   		font-size:30/50rem;
		   		background:#43BF92;
		   		color:#fff;
		   	}
		   	&>input{
		   		display:inline-block;
		   		width:60/50rem;
		   		height:60/50rem;
		   		margin:0 5/50rem;
		   		font-size:35/50rem;
		   		float:left;
		   		text-align: center;
		   	
		   	}
		   }
		   &>p{
		   	font-size:26/50rem;
		   	color:#BABABA;
		   	line-height:50/50rem;
		   	 &:first-child{
		   	 	color:#414141;
		   	 	font-size:30/50rem;
		   	 	line-height:40/50rem;
		   	 }
		   	 &:last-child{
		   	 	color:#c53336;
		   	 	position: absolute;
		   	 	bottom:42/50rem;
		   	 	&>span{
		   	 		position:absolute;
		   	 		right:-370/50rem;
		   	 		color:#414141;		   	 	
		   	 	}		   	 	
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
    			font-size:22/50rem;
    		}
    		&>span:nth-of-type(2){
    			color:#43BF92
    		}
    		&>span:last-child{
    			color:#BABABA
    		}
    	}
    	&>div:nth-of-type(3){    	
    		text-align:center;
    		&:hover{
    			background:#43BF92;
    		}
    		&:hover a{
    			color:#ffffff
    		}
    	}
    }
	
}

</style>