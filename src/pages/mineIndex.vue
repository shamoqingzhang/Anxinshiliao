<template>
<div>
  <!-- 头部 -->
  <div class="headWrap">
    	我
  </div>
  <!--  -->
  <div class="mineWrap">
	  
    <div class="info">
    	<img src="../assets/img/2.jpg" alt="">
    	<span>切瑞</span>
    	<router-link :to="{path:'/health'}" class="a">
    		健康详情
    		<i class="iconfont icon-iconfontyoujiantou youjiantou"></i>
    	</router-link>
    </div>
    <div class="message">
    	<i class="iconfont icon-xinfeng"></i>
    	<router-link :to="{path:'/message'}" class="">信息</router-link>
    </div>
    <div class="people">
    	<i class="iconfont icon-lianxiren"></i>
    	<router-link :to="{path:'/people'}">家人和朋友</router-link>
    </div>
    <div class="collect">
    	<i class="iconfont icon-wodexihuan"></i>
    	<router-link :to="{path:'/collect/food1'}">我的收藏</router-link>
    </div>
    <div class="order">
    	<i class="iconfont icon-wodedingdan"></i>
    	<router-link :to="{path:'/orders'}">我的订单</router-link>
    </div>
    <div class="account">
    	<i class="iconfont icon-qita"></i>
    	<router-link :to="{path:'/account'}">账号和其他</router-link>
    </div>
    <div class="service">
    	<i class="iconfont icon-zaixiankefu"></i>
    	<router-link :to="{path:'/service'}">在线客服</router-link>
    </div>
    <div class="help">
    	<i class="iconfont icon-help"></i>
    	<router-link :to="{path:'/help'}">帮助和反馈</router-link>
    </div>
    <div class="set">
    	<i class="iconfont icon-banshou"></i>
    	<router-link :to="{path:'/set'}">设置</router-link>
    </div>
  </div>

  <Foot />

 </div>
</template>

<script>

import Foot from '../components/index/foot.vue'

import "../assets/css/font/iconfont.css"

export default {
  name: 'mineIndex',
  data () {
    return {
      
    }
  },
  components:{
  	Foot
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
}

.mineWrap{
	width: 100%;
	&>div{
		width: 100%;
		height: 80/50rem;
		line-height: 80/50rem;
		padding-right:20/50rem;
		padding-left:20/50rem;
		box-sizing: border-box;
		border-bottom: 1/50rem solid #e7e7e7;
		background-color: #fff;
		font-size: 30/50rem;
		&>a{
			color:#777;
		}
		.iconfont{
			width: 38/50rem;
			height: 38/50rem;
			margin-right: 10/50rem;
			color:#323232;
			font-weight: 700;
		}
		&:nth-child(1){
			height: 140/50rem;
			line-height: 140/50rem;
			margin-top:48/50rem; 
			overflow: hidden;
			color:#323232;
			img{
				width: 115/50rem;
				height: 115/50rem;
				line-height: 115/100rem;
				margin:10/50rem 20/50rem 10/50rem 0;
			}
			span{
				vertical-align: top;
			}
			&>.a{
				color:#777;
				float: right;
				&>.youjiantou{
					color:#323232;
					font-size: 20/50rem;
				}
			}
		}
		&:nth-child(2){
			margin:20/50rem auto;
		}
	}
}

</style>