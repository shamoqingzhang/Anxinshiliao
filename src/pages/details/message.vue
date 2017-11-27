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
	    收到信息
	</div>

	<!-- 小模板 -->
	<div class="messageWrap">
		<div class="people">
			<router-link to="/message1" class="people1">
				<img src="../../assets/img/4.jpg" alt="">
				<p class="ming">
					<span>素而安然</span>
					<span>2016年11月22日</span>
				</p>
				<p class="pic">养生小百科</p>
			</router-link>
		</div>
	</div>
	<!-- 小模板 -->
	<div class="messageWrap">
		<div class="people">
			<router-link to="/message1" class="people1">
				<img src="../../assets/img/3.jpg" alt="">
				<p class="ming">
					<span>安然</span>
					<span>2016年11月22日</span>
				</p>
				<p class="pic">【图片】</p>
			</router-link>
		</div>
	</div>
</div>
</template>

<script>

import "../../assets/css/font/iconfont.css"

export default{
	name:"message",
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

.messageWrap{
	width: 100%;
	padding:0 30/50rem;
	box-sizing: border-box;
	.people{
		width: 100%;
		height: 100/50rem;
		border-bottom: 1/50rem solid #ddd;
		margin-top: 10/50rem;
		overflow: hidden;
		&>.people1{
			img{
				width: 85/50rem;
				height: 85/50rem;
				display: inline;
				float: left;
			}
			p{
				overflow: hidden;
				font-size: 30/50rem;
				display: block;
				color:#111;
				span{
					&:nth-child(2){
						float: right;
						font-size: 24/50rem;
						color:#a5a5a5;
					}
					&:nth-child(1){
						margin-left: 16/50rem;
					}
				}
			}
			&>.ming{
					margin-bottom: 15/50rem;
				}
			&>.pic{
				width: 200/50rem;
				font-size: 24/50rem;
				margin-left: 100/50rem;
			}
		}
	}
}
</style>