<template>
<div class="wrap">
	<!-- 头部 -->
	<div class="headWrap">
		<!--  -->
		<span onclick="window.history.go(-1)">
			<i class="iconfont icon-iconfont552cc14536532"></i>
			返回
		</span>
	    订单详情
	</div>

	<div class="address">
		<i class="iconfont icon-dingwei"></i>
		<div>
			<p>
				<span>姓名: 朱青青</span>
				<span>15256286440</span>
			</p>
			<p>地址: 北京市海淀区西三旗桥东金燕龙大厦</p>
		</div>
	</div>
	<p>
		<span>订单号： 830179046666</span>
		<span>下单时间： 2016-12-13</span>
	</p>
	<div class="priceWrap">
		<img src="../../../assets/img/五谷粥.png" alt="">
		<div class="price">
			<p>
				<span>精品粥道</span>
				<span>¥88</span>
			</p>
			<p>
				<span>大小: 大盒； 包装: 盒装</span>
				<span>×1</span>
			</p>
		</div>
		<p>
			<span>数量: 1</span>
			<span>价格: ¥88</span>
		</p>
	</div>
	<p class="wuliu">物流跟踪</p>
	<div class="msg">
		<i class="iconfont icon-yuandianshixin"></i>
		<div class="time">
			<p>您的订单已完成</p>
			<p>
				<span>2016-12-13</span>
				<span>12:13</span>
			</p>
		</div>
	</div>
	<div class="msg msg1">
		<i class="iconfont icon-yuandianshixin"></i>
		<div class="time">
			<p>您的订单已完成</p>
			<p>
				<span>2016-12-13</span>
				<span>12:13</span>
			</p>
		</div>
	</div>
	<div class="msg msg1">
		<i class="iconfont icon-yuandianshixin"></i>
		<div class="time">
			<p>您的订单已完成</p>
			<p>
				<span>2016-12-13</span>
				<span>12:13</span>
			</p>
		</div>
	</div>
</div>
</template>

<script>

import "../../../assets/css/font/iconfont.css"

	export default{
		name:"orderdetail",
		data(){
			return{

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

	span{
		position: absolute;
		left:30/50rem;
  		font-size: 30/50rem;
  		box-sizing: border-box;
  	}
}

.address{
	width: 100%;
	height: 265/50rem;
	background-color: #fff;
	color:#4b4b4b;
	clear:both;
	i{
	color: #43bf92;
	display: inline-block;
	margin:0 40/50rem;
	float: left;
	line-height: 265/50rem;
	}
	&>div{
		width: 600/50rem;
		height: 92/50rem;
		display: inline-block;
		text-align: left;
		margin-top: 60/50rem;
		&>p{
			display: inline-block;
			height: 60/50rem;
			line-height: 60/50rem;
			font-size: 30/50rem;
			&:nth-child(1){
				span{
					&:nth-child(1){
						margin-right: 190/50rem;
					}
				}
			}
		}
	}
}
.wrap{
	&>p{
		font-size: 26/50rem;
		text-align: left;
		margin:40/50rem 20/50rem 10/50rem;
		color:#4b4b4b;
		clear:both;
		span{
			&:nth-child(2){
				float: right;
			}
		}
	}
}
.priceWrap{
	background-color: #fff;
	padding:20/50rem;
	box-sizing: border-box;
	&>img{
		width: 115/50rem;
		height: 100/50rem;
		display: inline-block;
	}
	&>.price{
		width: 580/50rem;
		height: 75/50rem;
		vertical-align: top;
		display: inline-block;
		clear:both;
		p{
			margin-left: 10/50rem;
			line-height: 40/50rem;
			font-size: 26/50rem;
			text-align: left;
			&:nth-child(1){
				color:#3e3e3e;
				font-size:26/50rem;
				span{
					&:nth-child(2){
						float: right;
					}
				}
			}
			&:nth-child(2){
				color:#7e7e7e;
				span{
					&:nth-child(2){
						float: right;
					}
				}
			}
		}
		
	}
	&>p{
		font-size: 26/50rem;
		text-align: right;
		color:#757575;
		span{
			&:nth-child(1){
				margin-right: 25/50rem;
			}
		}
	}
}

.wrap{
	&>.wuliu{
		margin:82/50rem 20/50rem 20/50rem;
		font-size: 26/50rem;
		text-align: left; 
		color:#4b4b4b;
	}
}
.msg{
	width: 100%;
	height: 120/50rem;
	background-color: #fff;
	border-bottom:1/50rem solid #9d9c9c;
	box-sizing: border-box;
	clear:both;
	i{
		margin:0 20/50rem;
		float: left;
		line-height:120/50rem;
		display: inline-block;
		color:#43bf92;
	}
	.time{

		width: 260/50rem;
		height: 50/50rem;
		display: inline-block;
		font-size: 26/50rem;
		line-height: 40/50rem;
		color:#43bf92;
		margin:20/50rem auto;
		text-align: left;
		p{
			display: inline-block;	
			margin-left: 20/50rem;
			&:nth-child(2){
				span{
					&:nth-child(1){
						margin-right: 20/50rem;
					}
				}
			}
		}
	}
}
.msg1{
	i{
		color:#818181;
	}
	&>.time{
		color:#9d9c9c;
	}
}
	
</style>