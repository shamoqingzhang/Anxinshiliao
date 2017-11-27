<template>
<div>
	<!-- 头部 -->
	<div class="headWrap">
		<!--  -->
		<a href="#" class="dianji" onclick="window.history.go(-1)">
			<span>
				<i class="iconfont icon-iconfont552cc14536532"></i>
			返回
			</span>
		</a>
	    我的收藏
	</div>

	<!--  -->
	<div class="setWrap">
		<div class="select">
			<router-link to="/collect/food1" class="food"> 
				话题
			</router-link>
			<i></i>
			<router-link to="/collect/food" class="food">
				商品
			</router-link>
		</div>
		<!-- 小模板 -->
		<!-- <div class="effect">
			<p>红豆神奇功效 养心消水肿</p>
			<div>
				<img src="../../assets/img/五谷粥.png" alt="">
				<div class="info">
					<p>红豆不但养心消水肿,补血功效也是首屈一指的!今天我们就跟大家聊一聊红豆有哪些功效......</p>
					<p>
						<span>231234</span>
						次阅读
					</p>
				</div>
			</div>
		</div> -->

		<router-view></router-view>
		
	</div>
</div>
	
</template>

<script>

import "../../assets/css/font/iconfont.css"

	export default{
		name:"collect",
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
	font-size: 36/50rem;
	color:#fff;
  	padding:0;
  	overflow: hidden;
  	position: relative;
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

.setWrap{
	background-color: #fff;
	width: 100%;
	.select{
		width: 100%;
		height: 70/50rem;
		line-height: 70/50rem;
		background-color: #fff;
		border-bottom: 1/50rem solid #ddd;
		margin-top: 12/50rem;
		display: flex;
		&>.food{
			flex-grow:0.5;
			font-size: 30/50rem;
			text-align: center;
		}
		i{
			width: 1/50rem;
			height: 60/50rem;
			background-color: #aaa;
			margin-top: 5/50rem;
		}
	}
}
.effect{
	padding:24/50rem 20/50rem;
	border-bottom: 1/50rem solid #ddd;
	box-sizing: border-box;
	&>p{
		margin-bottom: 24/50rem;
		font-size: 30/50rem;
	}
	&>div{
		&>img{
			width: 232/50rem;
			height: 162/50rem;
			margin-right: 25/50rem;
		}
		.info{
			float: right;
			display: inline;
			width:450/50rem; 
			clear: both;
			&>p{
				font-size: 26/50rem;
				color:#999;
				span{
					color:#c53336;
				}
				&:nth-child(2){
					float: right;
					margin-top: 30/50rem;
				}
			}
		}
	}
}
	
</style>