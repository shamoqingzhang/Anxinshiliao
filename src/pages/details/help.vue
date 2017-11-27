<template>
<div>
<!-- 头部 -->
	<div class="headWrap">
		<p onclick="window.history.go(-1)">
			<span>
				<i class="iconfont icon-iconfont552cc14536532"></i>
				返回
			</span>
		</p>
	    在线客服
	    <span class="add">我的反馈</span>
	</div>
	<div class="search">
         <input type="text" placeholder="搜索">
         <i class="iconfont icon-sousuo"></i>
     </div>
     <div class="q">
		<p class="one">
	    	<a href="#">常见问题</a>
    	</p>
	</div>
	<div class="q">
		<p>
	    	<a href="#">*安心食疗的特色是什么?</a>
	    	<span class="iconfont icon-iconfontyoujiantou"></span>
    	</p>
	</div>
	<div class="q">
		<p>
	    	<a href="#">*对于不感兴趣或质量较差的文章应该如何反馈?</a>
	    	<span class="iconfont icon-iconfontyoujiantou"></span>
    	</p>
	</div>
	<div class="q">
		<p>
	    	<a href="#">*如何联系你们?</a>
	    	<span class="iconfont icon-iconfontyoujiantou"></span>
    	</p>
	</div>
</div>
</template>

<script>

import "../../assets/css/font/iconfont.css"

	export default{
		name:"help",
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

.search{      
      width: 100%;
      overflow: hidden;
      position: relative;
      input{
         display: block;
         width: 710/50rem;
         margin: 30/50rem auto;
         border: 1/50rem solid #aaa;
         height: 60/50rem;
         background-color: #f1f1f1;
         border-radius: 30/50rem;
         font-size: 36/50rem;
         line-height: 60/50rem; 
         outline:medium; 
         color: #ccc; 
         text-align: center;       
      }
      i{           
            display: block;
            width: 43/50rem;
            height: 43/50rem;
            position: absolute;
            top: 44/50rem;
            right: 30/50rem;
        }
   }
.q{
	width: 100%;
	height: 68/50rem;
	line-height: 68/50rem; 
	background-color: #fff;
	text-align: center;
	padding: 0 40/50rem;
	box-sizing: border-box;
	&>.one{
		border-top: none;
	}
	&>p{	
		border-top: 1px solid #e7e7e7;
		a{
			float: left;
			color:#343434;
			font-size: 30/50rem;
		}
		span{
			float: right;
			font-size: 20/50rem;
			color:#979797;
		}
	}
}

	
</style>