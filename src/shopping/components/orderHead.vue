<template>
	<!-- 头部 -->
	<div class="headWrap">
		<!--  -->
		<p onclick="window.history.go(-1)" class="dianji">
			<span>
				<i class="iconfont icon-iconfont552cc14536532"></i>
				{{list.left}}
			</span>
		</p>
	    {{list.title}}
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
</style>