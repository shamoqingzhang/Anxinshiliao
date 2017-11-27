<template>
<div class="wrap">
	<!-- 头部 -->
	<div class="headWrap">
		<p onclick="window.history.go(-1)">
			<span>
				<i class="iconfont icon-iconfont552cc14536532"></i>
				返回
			</span>
		</p>
	    测试
	    <span class="add">
	    	<i class="iconfont icon-fengxiang"></i>
	    </span>
	</div>
	<!--  -->
	<div class="testWrap">
		<div class="explain">
			<h5>测试说明</h5>
			<p>本测试分为简易版和专业版,简易版可以快速测试你的身体状况,专业版可以更专业的了解你的身体状况
			</p>
		</div>
		<div class="button">
			<router-link :to="{path:'/simply'}" class="banben">简易版</router-link>
			<router-link :to="{path:'/professional'}" class="banben">专业版</router-link>
		</div>
	</div>
</div>
</template>

<script >

import "../../../assets/css/font/iconfont.css"

	export default{
		name:"test",
		data(){
			return{

			}
		}
	}
</script>

<style scoped lang="less">
.wrap{
	height: 100%;
	width: 100%;
	background-color: #fff;
}
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
  		position: absolute;
  		top:0;
  		right: 40/50rem;
  	}
}

.testWrap{
	.explain{
		width: 715/50rem;
		height: 625/50rem;
		margin:22/50rem auto;
		border:1/50rem solid #43bf92;
		padding:0 20/50rem;
		box-sizing: border-box;
		h5{
			font-size: 32/50rem;
			margin:65/50rem auto;
			text-align: center;
		}
		p{
			font-size: 26/50rem;
			line-height: 40/50rem;
		}
	}
	.button{
		width: 665/50rem;
		background-color: #fff;
		margin:190/50rem auto 315/50rem;
		.banben{
			text-align: center;
			display: inline-block;
			width: 300/50rem;
			height: 90/50rem;
			background-color: #43bf92;
			border-radius: 8/50rem;
			color:#fff;
			font-size: 30/50rem;
			letter-spacing: 3/50rem;
			line-height: 90/50rem;
			&:nth-child(1){
				margin-right: 50/50rem;
			}
		}
	}
	
}
</style>