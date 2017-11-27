<template>
	<!-- 头部 -->
	<div class="headWrap">
		<p onclick="window.history.go(-1)">
			<span>
				<i class="iconfont icon-cuowu"></i>
				{{list.left}}
			</span>
		</p>
	    {{list.title}}
	    <span class="add">{{list.right}}</span>
	</div>
</template>

<script>

import "../../assets/css/font/iconfont.css" 

	export default{
		name:"cartHead",
		data(){
			return{
				
			}
		},
		props:{
			list:{
				type:Object,
				default:function(){
					return {}
				}
				
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
</style>