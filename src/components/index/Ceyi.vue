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
			
			<span>1/2</span>
			<span>你一天吸烟的频率？</span>

		</div>

		<div class="nav-butan">
			
				<a>很少</a>
				<a>较多</a>
				<a>经常</a>
				<a>从不</a>
			
			<div class="nav-baca" ><router-link exact :to="{path:'/hot/Ceyi/news'}">提交</router-link></div>
		</div>
		<router-view></router-view>
		
	</div>
	
</template>

<script>
	
export default{
	name:"Ceyi",
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
	height: 1334/50rem;
	background-color: #fff;
	.nav-butan{
		text-align: center;
		width: 750/50rem;
		height: 335/50rem;
		line-height: 80/50rem;

	&>a{
		width: 560/50rem;
		height: 80/50rem;
		font-size: 30/50rem;
		color: #6c6c6c;
		display: inline-block;	
		border: 2/50rem solid #6c6c6c;
		box-sizing: border-box;
		border-radius: 50/50rem;
		margin:10/50rem 0;

		&:hover{
			background-color: #6c6c6c;
			color: #fff;		
		}
	}
			
		&>.nav-baca{
			margin: 150/50rem 0 200/50rem;
			&>a{
				font-size: 30/50rem;
				color: #fff;
				display: inline-block;
				padding: 15/50rem 260/50rem;	
				background-color: #43bf92;
				border-radius: 10/50rem;
			}
		}
	}

	.nav-header{
		width: 600/50rem;
		margin: 100/50rem auto  50/50rem;
		&>span{
			display: block;
			font-size: 28/50rem;
			margin-top: 30/50rem;
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