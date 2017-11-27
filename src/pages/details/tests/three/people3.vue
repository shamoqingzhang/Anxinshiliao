<template>
<div class="wrap">
	<!-- 头部 -->
	<div class="headWrap">
		<p onclick="window.history.go(-1)">
			<span >
				<i class="iconfont icon-iconfont552cc14536532"></i>
				返回
			</span>
		</p>
	    家人和朋友
	    <span class="add">修改信息</span>
	</div>
	<div class="pic">
		<img src="../../../../assets/img/4.jpg" alt="">
	</div>
	<div class="test">
		<router-link :to="{path:'/test'}" class="weizhi">
			<i class="iconfont icon-shijian"></i>
			尚未测试
			<i class="iconfont icon-iconfontyoujiantou"></i>
		</router-link>
		<router-link :to="{path:'/select'}" class="weizhi">
			<i class="iconfont icon-jilu"></i>
			慢性病
			<i class="iconfont icon-iconfontyoujiantou"></i>
		</router-link>
	</div>
</div>
</template>

<script>

import "../../../../assets/css/font/iconfont.css"

	export default{
		name:"people3",
		data(){
			return{
				
			}
		}
	}
</script>


<style scoped lang="less">
.wrap{
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
	&>.pic{
		width: 115/50rem;
		height: 115/50rem;
		margin:130/50rem auto;
		img{
			width: 115/50rem;
			height: 115/50rem;
		}
	}
	.test{
		width: 650/50rem;
		margin:0 auto;
		&>.weizhi{
			display: block;
			width: 650/50rem;
			height: 80/50rem;
			line-height: 80/50rem;
			background-color: #fff;
			font-size: 30/50rem;
			color:#747474;
			margin-bottom: 35/50rem;
			border-radius: 10/50rem;
			i{
				&:nth-child(1){
					margin:0 20/50rem;
				}
				&:nth-child(2){
					margin-right: 20/50rem;
					width: 30/50rem;
					height: 30/50rem;
					float: right;
				}
			}
		}
	}
	
}

</style>