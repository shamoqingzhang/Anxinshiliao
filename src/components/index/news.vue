<template>
	<div class='funad'>
		<!-- 头部 -->
		<div class="headWrap">
			<p onclick="window.history.go(-1)">
				<span>
					<i class="iconfont icon-iconfont552cc14536532"></i>
					返回
				</span>
			</p>
		    肺部测试
		    <span class="add">
		    	<i class="iconfont icon-fengxiang"></i>
		    </span>
		</div>
			
		<div class="nav-header">
			<span>测试结果</span>
			<p>高度危险！您目前属于高危阶段，需要引起重视，建议
在医生指导下定期复查或体检。在体检时建议加做胸部
低剂量螺旋CT。做到有效预防，定期筛查。</p>

			<span class="log">结果仅供参考</span>

		</div>
		
		<div class="nav-butan">
			<span>为您推荐：</span>
				
			<ul>
				<li>
					<img src="../../assets/images/images_03.png">
					<span>黑木耳</span>
				</li>
				<li>
					<img src="../../assets/images/images_05.png">
					<span>清肺汤</span>
				</li>
				<li>
					<img src="../../assets/images/images_05.png">
					<span>清肺汤</span>
				</li>
			</ul>
		</div>
		
	</div>
	
</template>

<script>
	
export default{
	name:"Test",
	data(){
		return{

		}
	}
}	

</script>
 <style scoped lang='less'>

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

a{
	text-decoration: none;
	color: #fff;
}
ol, ul {
	list-style: none;
}
.funad{
	width: 100%;
	.nav-butan{
		background-color: #fff;
		text-align: left;
		width: 750/50rem;
		border-top: 15/50rem solid #dfe0db;
		padding:25/50rem 70/50rem 40/50rem 14/50rem;
		box-sizing: border-box;
		&>span{
			font-size: 36/50rem;
			padding-left: 20/50rem;
		}

		ul{
			margin: 0 auto;
			overflow: hidden;
			margin-top: 12/50rem;
			li{
				&:nth-child(2){
					margin-left: 20/50rem;
				}
				width: 305/50rem;
				float: left;
				text-align: center;
				margin-top: 18/50rem;
				margin-bottom: 10/50rem;
				margin-left: 30/50rem;
				overflow: hidden;
				&>img{
					width: 305/50rem;
					margin-left:40/50rem;
					margin-bottom: 10/50rem;
				}
				&>span{
					display: block;
					font-size: 26/50rem;
					color: #6c6c6c;
				}
			}
		}
	}

	.nav-header{
		width: 100%;
		height: 690/50rem;
		text-align: center;
		padding:150/50rem 70/50rem 0;
		margin-top:20/50rem;
		background-color: #fff;
		box-sizing: border-box;
		.log{
			display: block;
			margin: 200/50rem 0 100/50rem;
			text-align: center;
			font-size: 28/50rem;
			background: url(../../assets/images/log_03_03.png) no-repeat;
			background-size: 600/50rem;
			background-position:10/50rem 18/50rem;
			color: #dfe0db;
		}
		&>span{
			display: block;
			text-align: center;
			font-size: 30/50rem;
			color: #000;
		}
		&>p{
			font-size: 22/50rem;
			line-height: 35/50rem;
			color: #757575;
		}
	}
	.nav{
		line-height: 88/50rem;
		background-color: #43bf92;
		text-align: center;
		font-size: 36/50rem;
		color: #fff;
		border-bottom: 15/50rem solid #dfe0db;
		box-sizing: border-box;
		span{
			display: inline-block;
			margin-left: -55/50rem;
		}	
		.nav-left{
			width: 100/50rem;
			float: left;
			font-size: 30/50rem;
			padding-left: 40/50rem;
			position: relative;
			&:after{
				content: "";
				position: absolute;
				width: 48/50rem;
				height: 48/50rem;
				left: 0;
				top:20/50rem;
				background: url(../../assets/images/guan_03.png) no-repeat;
				background-size: 36/50rem;
				background-position: 0 7/50rem;
			}
		}
		.nav-right{
			width: 50/50rem;
			float: right;
			position: relative;

			&:after{
				content: "";
				position: absolute;
				width: 48/50rem;
				height: 48/50rem;
				left: 0;
				top:20/50rem;
				background: url(../../assets/images/fan_03.png) no-repeat;
				background-size: 48/50rem;
				background-position: 0 2/50rem;
			}
		}
	}
}	
</style> 