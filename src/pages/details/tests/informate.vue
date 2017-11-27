<template>
<div class="wrap">
<!-- 头部 -->
	<div class="headWrap">
		<p onclick="window.history.go(-1)">
			<span>
				<i class="iconfont icon-iconfont552cc14536532"></i>
				返回
			</span>
		</p>
	    基础信息
	    <span class="add">完成</span>
	</div>
	<div class="name">
			<p>
		    	<a href="#">名字</a>
		    	<span>输入</span>
	    	</p>
   	</div>
	<div class="sex">
		<p>
	    	<a href="#">性别</a>
	    	<span class="nv">女</span>
	    	<span class="nan">男</span>
		</p>
	</div>
	<div class="birthday">
		<p>
	    	<a href="#">生日</a>
	    	<span class="iconfont icon-iconfontyoujiantou"></span>
		</p>
	</div>
	<div class="city">
		<p>
	    	<a href="#">城市</a>
	    	<span class="iconfont icon-iconfontyoujiantou"></span>
    	</p>
	</div>
</div>
</template>

<script>

import "../../../assets/css/font/iconfont.css"

	export default{
		name:"informate",
		data(){
			return{
				str:"点击输入"
			}
		},
		methods:{
			
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

.name,.sex,.birthday,.city{
	width: 100%;
	height: 68/50rem;
	line-height: 68/50rem; 
	background-color: #fff;
	text-align: center;
	padding: 0 40/50rem;
	box-sizing: border-box;
	&>p{	
		border-bottom: 1px solid #e7e7e7;
		a{
			float: left;
			color:#343434;
			font-size: 30/50rem;
		}
		span{
			float: right;
			color:#979797;
		}
	}
	&:nth-child(1){
		width: 100%;
		height: 320/50rem;
		padding-top: 20/50rem;
		margin-bottom: 24/50rem;
		box-sizing: border-box;
		p{
			font-size: 26/50rem;
			color:#333;
			line-height: 40/50rem;
			margin-bottom: 20/50rem;
			border-bottom: 0;
		}
		img{
			width: 100/50rem;
			height: 100/50rem;
		}
		&>a{
			width: 150/50rem;
			line-height: 50/50rem;
			display:block;
			border:2/50rem solid #888;
			border-radius: 6/50rem;
			box-sizing: border-box;
			color:#333;
			background-color: #fff;
			margin-bottom: 20/50rem;
			margin-left:268/50rem;
			font-size: 30/50rem;
		}
	}
	&:nth-child(3){
		p{
			span{
				display: inline;
				width: 60/50rem;
				height: 36/50rem;
				border-radius: 24/50rem;
				margin-top: 15/50rem;
				border:1/50rem solid #979797;
				color:#979797;
				line-height: 36/50rem;
				text-align: center;
				font-size: 20/50rem;
			}
		}
	}
}
.birthday,.city{
	p{
		span{
			font-size: 20/50rem;
		}
	}
}
.name{
	margin-top: 20/50rem;
	p{
		border-bottom:0;
	}
}
.sex{
	&>p{
		
		.nan{	
				border:1px solid #43bf92;
				color:#43bf92;
				line-height: 36/50rem;
				text-align: center;
				margin-right: 5/50rem;
				&:hover{
					color:#43bf92;
					border:1/50rem solid #43bf92;
				}
			}
		.nv{	
			border:1px solid #979797;
			color:#979797;
			line-height: 36/50rem;
			text-align: center;
			&:hover{
					color:#43bf92;
					border:1/50rem solid #43bf92;
			}
		}
		
	}
}

</style>