<template>
	<div class="article1">		
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
      	<div class="box">
      		<div class="content">
				<div class="title">
					<p class="title1">每周精选餐饮</p>
					<p class="time" id="time">周周新</p>
				</div>
				<div class="article">
					<img src="https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/508370014/TB16HCHc46I8KJjy0FgXXXXzVXa_!!0-item_pic.jpg_230x230.jpg_.webp">
		      		<p class="p1">滋补养颜粥</p>
		      		<p class="p2">养颜粥</p>
				</div>
				<div class="article">
					<img src="https://img.alicdn.com/imgextra/i4/202224264/TB2y8mqXB0lpuFjSszdXXcdxFXa_!!202224264.jpg_430x430q90.jpg">
		      		<p class="p1">黑芝麻核桃粥</p>
		      		<p class="p2">芝麻，米，豆类</p>
				</div>
				<div class="article">
					<img src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i7/TB1qIzLHVXXXXXuXVXXivCf.FXX_105722.jpg_230x230.jpg_.webp">
		      		<p class="p1">红豆粥</p>
		      		<p class="p2">红豆，大米</p>
				</div>      	
      		</div>
		</div>
		
	</div>
</template>
<script type="text/javascript">
export default{
	name:'article',
	data(){
		return{

		}
	}

}
</script>
<style lang='less' scoped>
.article1{
	   overflow: hidden;
	   width: 100%;
	   height: 100%;
	   background-color:#fff;
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
	   .box{
	   		overflow: hidden;
	   		margin: 0 auto;
	   		width: 710/50rem;	   		
			   .content{
			   		overflow: hidden;
			   		margin-top: 30/50rem;
			   		width:100%;
			   		.title{
			   			.title1{
			   				font-size: 40/50rem;
			   				font-weight: bold;
			   				margin-bottom: 10/50rem;
			   			}
			   			.time{
			   				font-size: 30/50rem;
			   				color:#666;
			   			}
			   		}			   		
			   		.article{
			   			width: 710/50rem;
			   			margin: 40/50rem auto 60/50rem;
			   			border-bottom: 1px solid #ccc;
			   			img{
			   			width: 100%;
			   			height: 500/50rem;
			   			margin-bottom: 30/50rem;
			   			}
			   			.p1{
			   				font-size: 35/50rem;
							margin-bottom: 20/50rem;
			   			}
			   			.p2{
			   				color: #666;
			   				margin-bottom: 20/50rem;
			   			}
			   		}

			   }
	 }	   
}
</style>