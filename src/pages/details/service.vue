<template>
<div class="box">
	<!-- 头部 -->
	<div class="headWrap">
		<p onclick="window.history.go(-1)">
			<span>
				<i class="iconfont icon-iconfont552cc14536532"></i>
				返回
			</span>
		</p>
	    在线客服
	    <span class="add">我的反馈</span>
	</div>
	<!--  -->
	<div class="serviceWrap">
		<div class="left">
			<img src="../../assets/img/2.jpg" alt="">
			<img src="../../assets/img/duihua.png">
		</div>
		<div class="right">
			<img src="../../assets/img/4.jpg" alt="">
			<img src="../../assets/img/duihua1.png">
		</div>
	</div>
	<div class="bottom">
		<i class="iconfont icon-yuyin"></i>	
		<i class="xian"></i>
		<i class="iconfont icon-tianjia"></i>
	</div>
</div>
	
</template>

<script>

import "../../assets/css/font/iconfont.css"


	export default{
		name:"service",
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
  	overflow: hidden;
  	position: relative;
  	p{
  		display: inline-block;
  		span{
	  		position: absolute;
	  		left: 30/50rem;
	  		top:0;
	  		font-size: 30/50rem;
	  	}
  	}
  	
  	.add{
		font-size: 30/50rem;
  		position: absolute;
  		top:0;
  		right: 40/50rem;
  	}
}

.serviceWrap{
	padding:90/50rem 20/50rem 0;
	box-sizing: border-box;
	.left{
		img{
			width: 115/50rem;
			height: 115/50rem;
			&:nth-child(2){
				width: 300/50rem;
				height: 88/50rem;
			}
		}
	}
	.right{
		margin-top: 30/50rem;
		overflow: hidden;
		img{
			width: 115/50rem;
			height: 115/50rem;
			float: right;
			&:nth-child(2){
				width: 300/50rem;
				height: 88/50rem;
				margin-top: 30/50rem;
				margin-right: 15/50rem;
			}
		}
	}
}
.bottom{
	width:100%;
	height: 100/50rem;
	background-color: #43bf92;
	margin-top: 786/50rem;
	padding:40/50rem 60/50rem;
	box-sizing: border-box;
	i{
		color:#fff;
		font-weight: 700;
	}
	.xian{
		display: inline-block;
		width: 508/50rem;
		height: 1/50rem;
		background-color: #fff;
		margin:0 18/50rem ;
		margin-bottom:2/50rem;
	}
}
	
</style>