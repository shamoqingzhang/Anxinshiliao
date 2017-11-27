<template>
<div>
	<!-- 头部 -->
	<div class="headWrap">
		<!--  -->
		<p onclick="window.history.go(-1)" class="dianji">
			<span>
				<i class="iconfont icon-iconfont552cc14536532"></i>
				返回
			</span>
		</p>
	    我的订单
	</div>
	<div class="orderWrap el-tabs__nav-wrap is-scrollable">
		<div class="orderNav el-tabs__item el-tabs__item_wrap">
			<el-tabs @tab-click="handleClick" class="el-tabs__item" v-model="activeName">

			    <el-tab-pane label="待收货" name="first" class="el-tabs__item">

			    	<!-- 这儿要做成模板 -->
			    	<div class="all">
			    		<div class="shop">安心食疗店</div>
			    		<div class="food">
			    			<img src="../../assets/img/五谷粥.png" alt="五谷粥">
			    			<div class="info">
			    				<h5>五谷粥</h5>
			    				<p>增进食欲,促进消化</p>
			    				<span>七天退换</span>
			    			</div>
			    			<div class="price">
			    				<span>¥26.00</span>
			    				<span><del>¥30.00</del></span>
			    				<span>×1</span>
			    			</div>
			    		</div>
			    		<div class="comfirm">
			    			<div>
			    				<span>共1件商品</span>
			    				<span>合计</span>
			    				<span>¥26.00</span>
			    				<span>(含运费 ¥ 0.00)</span>
			    			</div>
			    			<div>
			    				<span>延长收货</span>
			    				<router-link :to="{path:'/orderdetail'}" class="look">
			    					<span>查看物流</span>
			    				</router-link>
			    				<span>确认收货</span>
			    			</div>
			    		</div>
			    	</div>

			    	<!-- 这儿要做成模板 -->
			    	<div class="all">
			    		<div class="shop">安心食疗店</div>
			    		<div class="food">
			    			<img src="../../assets/img/五谷粥.png" alt="五谷粥">
			    			<div class="info">
			    				<h5>五谷粥</h5>
			    				<p>增进食欲,促进消化</p>
			    				<span>七天退换</span>
			    			</div>
			    			<div class="price">
			    				<span>¥30.00</span>
			    				<span><del>¥30.00</del></span>
			    				<span>×1</span>
			    			</div>
			    		</div>
			    		<div class="comfirm">
			    			<div>
			    				<span>共1件商品</span>
			    				<span>合计</span>
			    				<span>¥30.00</span>
			    				<span>(含运费 ¥ 0.00)</span>
			    			</div>
			    			<div>
			    				<span>延长收货</span>
			    				<router-link :to="{path:'/orderdetail'}" class="look">
			    					<span>查看物流</span>
			    				</router-link>
			    				<span>确认收货</span>
			    			</div>
			    		</div>
			    	</div>
			    	
				</el-tab-pane>
			    <el-tab-pane label="待付款" name="second">
			    	
					<div class="all all1">
			    		<div class="shop">
				    		<span>安心食疗店</span>
				    		<span class="span2">等待买家付款</span>
				    	</div>
			    		
			    		<div class="food">
			    			<img src="../../assets/img/五谷粥.png" height="131" width="149" alt="五谷粥">
			    			<div class="info">
			    				<h5>五谷粥</h5>
			    				<p>增进食欲,促进消化</p>
			    				<span>七天退换</span>
			    			</div>
			    			<div class="price">
			    				<span>¥26.00</span>
			    				<span><del>¥30.00</del></span>
			    				<span>×1</span>
			    			</div>
			    		</div>
			    		<div class="comfirm">
			    			<div>
			    				<span>共1件商品</span>
			    				<span>合计</span>
			    				<span>¥26.00</span>
			    				<span>(含运费 ¥ 3.00)</span>
			    			</div>
			    			<div>
			    				<span>联系卖家</span>
			    				<a href="#" class="look">
			    					<span class="quxiao">取消订单</span>
			    				</a>
			    				<span class="pay">付款</span>
			    			</div>
			    		</div>
			    	</div>

			    </el-tab-pane>
			    <el-tab-pane label="待发货" name="third" class="el-tabs__item">
			    	<div class="send">
				    	<p>您还没有相关的订单</p>
				    	<router-link to="/index" class="tiaozhuan">
					    	可以去看看有哪些想买的
					    </router-link>
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="待评价" name="fivith" class="el-tabs__item">
			    	<div class="send">
				    	<p>您还没有相关的订单</p>
				    	<router-link to="/index" class="tiaozhuan">
					    	可以去看看有哪些想买的
					    </router-link>
			    	</div>
			    </el-tab-pane>
			</el-tabs>
		</div>

	</div>
</div>
</template>

<script>

import "../../assets/css/font/iconfont.css"

	export default{
		name:"order",
		data(){
			return{
				activeName: 'first'
			}
		},
	    methods: {
	      handleClick(tab, event) {
	      
	      }
	    }
	}
</script>

<style scoped lang="less">


/*头部样式*/
.headWrap{
	width: 100%;
	height: 88/50rem;
	line-height: 88/50rem;
	text-align:center;
	background-color: #43bf92;
	font-size: 36 / 50rem;
	color:#fff;
  	padding:0;
  	&>.dianji{
		color:#fff;
		span{
			position: absolute;
			left:30/50rem;
	  		font-size: 30/50rem;
	  		box-sizing: border-box;
	  	}
	}
}


.el-tabs__item{
	padding:0 !important;
	background-color: #fff;
	width: 100%;
	margin-top: 10/50rem;
	.all{
		color:#747474;
		font-size: 30/50rem;
		margin-top: 15/50rem;
		&>.shop{
			width: 100%;
			height: 70/50rem;
			background-color: #fff;
			padding:0 28/50rem;
			box-sizing: border-box;
			overflow: hidden;
			&>.span2{
				color:#ff9940;
				float: right;
			}
		}
		.food{
			padding:15/50rem 28/50rem;
			box-sizing: border-box;
			overflow: hidden;
			img{
				width: 150/50rem;
				height: 130/50rem;
				margin-right: 34/50rem;
				float: left;
			}
			&>div{
				float: left;
			}
			.info{
				width: 250/50rem;
				height: 130/50rem;
				line-height:45/50rem;
				font-size: 30/50rem;
				p{
					font-size: 26/50rem;
				}
				span{
					color:#c53336;
					border:2/50rem solid #c53336;
					font-weight: bold;
					border-radius: 8/50rem;
					font-size: 28/50rem;
					padding:0 5/50rem;
					box-sizing: border-box;
				}
			}
			.price{
				float: right;
				width: 80/50rem;
				height: 130/50rem;
				line-height: 45/50rem;
				text-align: right;
			}
		}
		.comfirm{
			padding:15/50rem 28/50rem;
			box-sizing: border-box;
			background-color: #fff;
			&>div{
				&:nth-child(1){
					border-bottom: 1/50rem solid #dcdcdc;
					box-sizing: border-box;
					text-align: right;
					span{
						font-size:26/50rem;
						margin-left: 10/50rem;
					}
				}
				&:nth-child(2){
					text-align: right;
					span{
						font-size: 28/50rem;
						border:1/50rem solid #999;
						border-radius: 8/50rem;
						padding:4/50rem 16/50rem;
						box-sizing: border-box;
						margin-left: 12/50rem;
						&:nth-child(3){
							color:#fff;
							background-color: #43bf92;
							border:1/50rem solid #43bf92;
						}
					}
					.pay{
						color:#747474;
						background-color: #fff;

					}
					&>.look{
						// color:#ff9940;
						// border:1/50rem solid #ff9940;
						&>.quxiao{
							color:#ff9940;
							border:1/50rem solid #ff9940;
						}
					}
				}
			}
		}
	}
	.send{
		text-align: center;
		padding:0 20/50rem;
		background-color: #fff;
		border:1/50rem solid #ddd;
		p{
			color:#aaa;
			font-size: 40/50rem;
			color:#656565;
			
		}
		&>.tiaozhuan{
			color:#aaa;
			font-size:30/50rem;
		}
	}
}
</style>