<template>
<div>
	<!-- 头部 -->
	<div class="headWrap">
		<!--  -->
		<a href="#" class="dianji">
			<span onclick="window.history.go(-1)">
				<i class="iconfont icon-iconfont552cc14536532"></i>
			返回
			</span>
		</a>
	    选择慢性病
	</div>

	<div class="lists">
    	<div><p>减重</p></div>
    	<div><p>痛风</p></div>
    	<div><p>血糖升高</p></div>
    	<div><p>脂肪肝</p></div>
    	<div><p>慢性肠胃炎</p></div>
    	<div><p>慢性支气管炎</p></div>
    	<div><p>血脂升高</p></div>
    	<div><p>血糖升高</p></div>
	</div>
	
</div>
</template>

<script>

import "../../../assets/css/font/iconfont.css"

	export default{
		name:"select",
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
.lists{
	width: 100%;
	margin-top: 20/50rem;
	&>div{
		width: 100%;
		height: 68/50rem;
		line-height: 68/50rem; 
		background-color: #fff;
		padding: 0 40/50rem;
		box-sizing: border-box;
		&>p{	
			border-top: 1px solid #e7e7e7;
			font-size: 30/50rem;
			color:#343434;
		}
		&:nth-child(1){
			&>p{
				border-top:0;
			}
		}
	}
}

</style>