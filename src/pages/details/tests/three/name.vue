<template>
<div class="wrap">
	<!-- 头部 -->
	<div class="headWrap">
		<span onclick="window.history.go(-1)">
		<i class="iconfont icon-iconfont552cc14536532"></i>
		返回
		</span>
	    姓名
	</div>
	<div class="pic1">
		<img src="../../../../assets/img/2.jpg" >
	</div>
	<div class="one">
		<p>
			<i class="iconfont icon-wode"></i>
			显示体质
			<span>
				测试与××天前
				<i class="iconfont icon-iconfontyoujiantou"></i>
			</span>
		</p>
	</div>
	<div class="two">
		<p>显示体质</p>
	</div>
	<div class="three">
		<p>重新测试体质</p>
	</div>
	<div class="four">
		<router-link :to="{path:'/select'}" class="xuanze">
			<i class="iconfont icon-jilu"></i>
			显示体质
			<span>
				已选择×项
				<i class="iconfont icon-iconfontyoujiantou"></i>
			</span>
		</router-link>
	</div>
</div>
</template>

<script>

import "../../../../assets/css/font/iconfont.css"

	export default{
		name:"people",
		data(){
			return{
				
			}
		}
	}
</script>


<style scoped lang="less">
.wrap{
	width: 100%;
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
	  	span{
	  		position: absolute;
	  		left: 30/50rem;
	  		font-size: 30/50rem;
	  	}
	  	.add{
	  		top:0;
	  		right: -580/50rem;
	  	}
	}
	.pic1{
		width: 100%;
		height: 255/50rem;
		overflow: hidden;
		background-color: #fff;
		img{
			display: block;
			width: 115/50rem;
			height: 115/50rem;
			line-height: 115/50rem;
			margin:70/50rem auto;
		}
	}
	&>div{
		background-color: #fff;
		width: 100%;
		font-size: 30/50rem;
		color:#343434;
	}
	&>.one{
		padding:0 25/50rem;
		box-sizing: border-box;
		margin-top: 20/50rem;
		line-height: 80/50rem;
		&>p{
			border-bottom: 1/50rem solid #ddd;
			&>i{
				margin-right: 8/50rem;
			}
			&>span{
				float: right;
				color:#747474;
				font-size: 26/50rem;
				&>i{
					margin-left: 4/50rem;
				}
			}
		}
	}
	&>.two, &>.three{
		padding:0 25/50rem;
		box-sizing: border-box;
		line-height: 80/50rem;
		p{
			border-bottom:1/50rem solid #ddd;
		}
	}
	&>.four{
		padding:0 25/50rem;
		box-sizing: border-box;
		line-height: 80/50rem;
		&>.xuanze{
			display: block;
			color:#343434;
			&>i{
				margin-right: 8/50rem;
			}
			&>span{
				color:#747474;
				float: right;
				font-size: 26/50rem;
				&>i{
					margin-left: 4/50rem;
				}
			}
		}
	}
}


</style>