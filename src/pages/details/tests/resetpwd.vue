<template>
	<div class="resetpwd">	
		<!-- 头部 -->
      <div class="headWrap">
         <!--  -->
         <p onclick="window.history.go(-1)" class="dianji">
            <span>
               <i class="iconfont icon-iconfont552cc14536532"></i>
               返回
            </span>
         </p>
          重置密码
      </div>
      <div class="box">
			<div class="content">
				<input type="text" placeholder="请输入新密码"><br>
				<input type="text" placeholder="确认密码">
            <label>
               <input type="text" placeholder="验证码" class="three">
               <span class="yzm">验证码</span>
               <span class="change">换一张，看不清</span>
            </label>				
				<button>完成</button>
			</div>
		</div>
		
	</div>
</template>
<script type="text/javascript">
export default{
	name:'findpwd',
	data(){
		return{

		}
	}
}
</script>
<style scoped lang='less'>
.resetpwd{
	width: 100%;
   height:1334/50rem;
   background-color: #fff;	

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

   	.nav{
   		width: 100%;
   		background-color: #43bf92;
	   	margin: 0 auto;
	      height: 88 / 50rem;      
	      display: flex;
	      color:#fff;
			line-height: 88/50rem;
	      font-size: 36/50rem;
	      span{
				font-size: 30/50rem;
				margin-left: 20/50rem;
	      }
	      p{
	      	margin-left: 205/50rem;
      	}
   	}
   	.box{
   		width: 100%;
   		overflow: hidden;
   		.content{
   			width: 610/50rem;
   			margin: 2rem auto 0;
            position: relative;
   			overflow: hidden;
   			input{
   				width: 610/50rem;
   				border: none;
   				outline: none;
   				border-bottom:1px solid #43bf92;
               margin-bottom: 85/50rem;
   			}
            .three{
               width: 280/50rem;
            }
            .change{
               font-size: 26/50rem;
               color:#5b5a5a;
               float: right;
               line-height: 90/50rem;
            }
   			.yzm{
   				background-color: #43bf92;
   				display: inline-block;
   				width: 130/50rem;
   				height: 55/50rem;
   				font-size: 12/50rem;
   				color: #fff;
   				text-align: center;
   				line-height: 55/50rem;
               position: absolute;
               bottom:190/50rem;
               left:270/50rem;
   			}
   			button{
   				background-color: #43bf92;
   				width: 610/50rem;
   				height: 70/50rem;
   				border: none;
   				margin-top: 35/50rem;
   				color: #fff;
   				border-radius: 10/50rem;
   			}
   		}
   	}  
}
</style>