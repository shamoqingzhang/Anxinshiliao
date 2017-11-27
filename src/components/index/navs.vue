<template>
	<div class='funad'>
		<!-- 头部 -->
	<div class="headWrap">
		<!--  -->
		<a href="#" class="dianji">
			<span onclick="window.history.go(-1)">
				<i class="iconfont icon-iconfont552cc14536532"></i>
			返回
			</span>
		</a>
	    每日食谱
	</div>
		
		<div class="nav-pardon">
			<div class="nav-header">
				<router-link to="/name" class="people">爸爸</router-link>
				<p>
					<a href=""><a href="">早餐</a></a>
					<a href=""><a href="">午餐</a></a>
					<a href=""><a href="">晚餐</a></a>
				</p>
			</div>

			<div class="nav-butan">
				<router-link to="/name" class="people">妈妈</router-link>
				<p>
					<a href=""><a href="">早餐</a></a>
					<a href=""><a href="">午餐</a></a>
					<a href=""><a href="">晚餐</a></a>
				</p>
			</div>

			<div class="nav-butan">
				<router-link to="/name" class="people">姐姐</router-link>
				<p>
					<a href=""><a href="">早餐</a></a>
					<a href=""><a href="">午餐</a></a>
					<a href=""><a href="">晚餐</a></a>
				</p>
			</div>
		</div>
		<router-view></router-view>
		
	</div>
	
</template>

<script>
	
export default{
	name:"Funad",
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

a{
	text-decoration: none;
	color: #fff;
}
p{
	margin: 0;
	padding: 0;
}
.funad{
	width: 100%;
	height: 100%;
	background-color: #fff;
	.nav-pardon{
		width: 640/50rem;
		margin:20/50rem auto;
		.nav-butan{
			margin:40/50rem auto;
			&>.people{
				font-size: 26/50rem;
				padding: 10/50rem 30/50rem;
				box-sizing: border-box;
				border-radius: 30/50rem;
				background-color: #43bf92;
				color: #f1f1f1;
			}
			&>p{
				text-align: center;

				&>a{
					display: block;
					width: 640/50rem;
					height: 150/50rem;
					margin-top: 20/50rem;
					background:url(../../assets/images/shi_03.png) no-repeat;
					background-size:  640/50rem;

					&>a{
						display: block;
						width: 640/50rem;
						height: 150/50rem;
						line-height: 150/50rem;
						background-color: rgba(0,0,0,.5);
						font-size: 36/50rem;
						color: #fff;
					}

					&:nth-child(2){
						background:url(../../assets/images/shi_06.png) no-repeat;
					background-size:  640/50rem;
					}

					&:nth-child(3){
						background:url(../../assets/images/shi_08.png) no-repeat;
					background-size:  640/50rem;
					}

				}

			}

		}

		.nav-header{

			&>.people{
				font-size: 26/50rem;
				padding: 10/50rem 30/50rem;
				border-radius: 30/50rem;
				background-color: #43bf92;
				color: #f1f1f1;

			}

			p{
				text-align: center;

				&>a{
					display: block;
					width: 640/50rem;
					height: 150/50rem;
					line-height: 150/50rem;
					margin-top: 20/50rem;
					background:url(../../assets/images/shi_03.png) no-repeat;
					background-size:  640/50rem;

					&>a{
						display: block;
						width: 640/50rem;
						height: 150/50rem;
						line-height: 150/50rem;
						background-color: rgba(0,0,0,.5);
						font-size: 36/50rem;
						color: #fff;
					}

					&:nth-child(2){
						background:url(../../assets/images/shi_06.png) no-repeat;
					background-size:  640/50rem;
					}

					&:nth-child(3){
						background:url(../../assets/images/shi_08.png) no-repeat;
					background-size:  640/50rem;
					}

				}

			}

		}

	}
	

	.nav{
		padding: 0  20/50rem;
		height: 88/50rem;
		line-height: 88/50rem;
		background-color: #43bf92;
		text-align: center;
		font-size: 30/50rem;
		color: #fff;
		
		span{
			display: inline-block;
			margin-left: -55/50rem;
		}

		.nav-left{
			width: 100/50rem;
			float: left;
			font-size: 30/50rem;
			padding-left: 30/50rem;
			position: relative;

			&:after{
				content: "";
				position: absolute;
				width: 48/50rem;
				height: 48/50rem;
				left: 0;
				top:20/50rem;
				background: url(../../assets/images/fan_04_03.png) no-repeat;
				background-size: 32/50rem;
				background-position: 0 1/50rem;
			}

		}

	}

}


</style>