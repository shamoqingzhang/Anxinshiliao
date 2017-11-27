<template>
	<div class="calender">	
		<!-- 头部 -->
		<div class="headWrap">
			<!--  -->
			<a href="#" onclick="window.history.go(-1)" class="dianji">
				<span>
					<i class="iconfont icon-iconfont552cc14536532"></i>
				返回
				</span>
			</a>
		    查看
		</div>

	     <Calendar></Calendar>
	      <p><span class="iconfont icon-xindiantu"></span>身体状况<span class="iconfont icon-fanhui-copy-copy"></span></p>
		  <p><span class="iconfont icon-mubiaobazi"></span>今日目标<span class="iconfont icon-fanhui-copy-copy"></span></p>
	    <GoCart/>
	</div>
	
</template>

<script>
	import "../assets/css/font/iconfont.css";
	import GoCart from "./components/goCart"
	export default({
		name:"calendar",
		data(){
          return {
            
          }
        },
        components:{
        	GoCart
        }
      
	})
</script>

<style scoped lang="less">
 p{
 	padding:47/50rem 0  0 40/50rem;
 	position: relative;
 	font-size:36/50rem;
 	span{
 		font-size:58/50rem;
 		display: inline-block;
 		vertical-align:middle;
 		margin-right:20/50rem;
 	}
 	span:nth-of-type(2){
 		position: absolute;
 		right:40/50rem;
 	}
 }


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
 
</style>


