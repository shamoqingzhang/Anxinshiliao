<template>
<div>
	<!-- 头部 -->
	<div class="headWrap">
		<p onclick="window.history.go(-1)">
			<span>
				<i class="iconfont icon-iconfont552cc14536532"></i>
				返回
			</span>
		</p>
	    设置
	</div>

	<div class="setWrap">
		<p>用户协议</p>
		<p>关于安心食疗</p>
		<p>去评分</p>
		<p>清理缓存</p>
		<div>
			<a href="#">退出</a>
		</div>
	</div>
</div>
	
</template>

<script>

import "../../assets/css/font/iconfont.css"

	export default{
		name:"set",
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
	  		top:0rem;
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

.setWrap{
	padding:0 20/50rem;
	font-size:26/50rem;
	color:#454545;
	height: 74/50rem;
	line-height: 74/50rem;
	&>div{
		width: 510/50rem;
		height: 78/50rem;
		margin:0 auto;
		a{
			text-align: center;
			display: inline-block;
			width: 510/50rem;
			height: 78/50rem;
			background-color: #43bf92;
			font-size: 40/50rem;
			color:#fff;
			border:2px solid #43bf92;
			margin-bottom: 200/50rem;
			margin-top: 280/50rem;
			border-radius: 8/50rem;
		}
	}
}
</style>