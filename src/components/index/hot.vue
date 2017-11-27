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
		    测试
		    <span class="add">
		    	<i class="iconfont icon-fengxiang"></i>
		    </span>
		</div>

		<div class="nav-header">
			<img src="../../assets/images/fei_03.png">
		</div>

		<div class="nav-butan">
			<span><a href="#">39432</a>人参与了测试</span>
			<div class="nav-baca"><router-link exact :to="{path:'/hot/Ceyi'}">开始测试</router-link></div>
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
a{
	text-decoration: none;
	color: #fff;
}

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

.funad{
	width: 100%;
	height: 100%;
	background-color: #fff;
	overflow: hidden;
	.nav-butan{
		text-align: center;
		width: 750/50rem;
		height: 335/50rem;
		margin: 40/50rem auto;
		&>span{
			display: inline-block;
			margin-top: 115/50rem;
			font-size: 30/50rem;
			color: #6c6c6c;

			&>a{
				color: #ff0505;
				opacity: .6;
			}
		}
		&>.nav-baca{
			margin-top: 10/50rem;

			&>a{
				font-size: 36/50rem;
				color: #fff;
				display: inline-block;
				padding: 10/50rem 200/50rem;	
				background-color: #43bf92;
				border-radius: 10/50rem;
				margin-top: 60/50rem;
			}
		}

	}

	.nav-header{
		width: 750/50rem;

		&>img{
			width: 750/50rem;
		}
	}
	.nav{
		padding: 0  20/50rem;
		height: 88/50rem;
		line-height: 88/50rem;
		background-color: #43bf92;
		text-align: center;
		font-size: 36/50rem;
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