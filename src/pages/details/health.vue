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
	    健康详情
	</div>
	<div class="healthWrap">

		<img src="../../assets/img/2.jpg" alt="设置头像">
		
		<div>
			<router-link :to="{path:'/informate'}" class="infor">
				基础信息
				<span class="iconfont icon-iconfontyoujiantou"></span>
			</router-link>
		</div>
		<div>
			<router-link :to="{path:'/select'}" class="infor">
				体检/慢性病管理
				<span class="iconfont icon-iconfontyoujiantou"></span>
			</router-link>
		</div>
		<h5>健康测试</h5>
		<div>
			<router-link :to="{path:'/test'}" class="wei">
				我的体质: 尚未测试
				<span class="iconfont icon-iconfontyoujiantou"></span>
			</router-link>
		</div>
	</div>
</div>
</template>

<script>

import "../../assets/css/font/iconfont.css"

	export default{
		name:"health",
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

.healthWrap{
	width: 100%;
	background-color: #f1f1f1;
	text-align: center;
	img{
		width: 115/50rem;
		height: 115/50rem;
		vertical-align: middle;
		text-align: center;
		margin:30/50rem 160/50rem;
	}
	&>div{
		width: 100%;
		height: 80/50rem;
		line-height: 80/50rem;
		padding-left: 20/50rem;
		box-sizing: border-box;
		border-bottom: 1/50rem solid #e7e7e7;
		background-color: #fff;
		font-size: 26/50rem;
		font-weight: 400;
		color:#777;
		text-align: left;
		overflow: hidden;
		.infor{
			color:#777;
			span{
				float: right;
				margin-right: 40/50rem;
				font-size: 20/50rem;
			}
		}
		&>span{
			float: right;
			margin-right: 40/50rem;
		}
	}
	.wei{
		color:#777;
		span{
			float: right;
			margin-right: 40/50rem;
			font-size: 20/50rem;
		}
	}
	h5{
		font-size: 30/50rem;
		margin-top: 32/50rem;
		margin-bottom: 10/50rem;
		text-align: center;
		color:#333;
		margin-bottom: 10/50rem;
		font-weight: 400;
	}
}
	
</style>