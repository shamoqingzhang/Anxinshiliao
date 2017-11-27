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
	    家人和朋友
	    <span class="add">添加</span>
	</div>
	<div class="muban">
		<div class="info">
	    	<img src="../../../assets/img/4.jpg" alt="">
	    	<span>姐姐</span>
	    	<router-link :to="{path:'/people3'}" class="">平和质 ></router-link>
	    </div>
	    <div class="info">
	    	<img src="../../../assets/img/2.jpg" alt="">
	    	<span>我</span>
	    	<router-link :to="{path:'/name'}" class="">尚未测试 ></router-link>
	    </div>
	</div>

</div>
</template>

<script>

import "../../../assets/css/font/iconfont.css"

	export default{
		name:"people",
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

.muban{
	margin-top:30/50rem;
	padding:0 20/50rem;
	box-sizing: border-box;
	background-color: #fff;
	.info{
		height: 140/50rem;
		line-height: 140/50rem;
		font-size: 30/50rem; 
		overflow: hidden;
		color:#323232;
		border-bottom: 1/50rem solid #e7e7e7;
		img{
			width: 115/50rem;
			height: 115/50rem;
			line-height: 115/100rem;
			margin:10/50rem 20/50rem 10/50rem 0;
		}
		span{
			vertical-align: top;
		}
		a{
			color:#777;
			float: right;
		}
	}
}


</style>