<template>

	<div class="accountWrap">
		<div class="account">
			<p  onclick="window.history.go(-1)">取消</p>
			<router-link :to="{path:'/account'}" class="reg">登录</router-link>
		</div>
		<div class="log">
			<div>
				<img src="../../../assets/img/login.png" alt="">
			</div>
		</div>
		<div class="mag">
			<i class="iconfont icon-wode"></i>
			<i class="iconfont icon-yanzhengma"></i>
			<input type="text" placeholder="用户名" v-model="form.rename">
			<input type="password" placeholder="输入密码" v-model="form.repwd">
			<span class="yzm">获取验证码</span>
		</div>
		<label class="loginButton">
			<button @click="onSubmit">注 册</button>
			<p>
				<input type="checkbox" class="select">
				<span>我已阅读并同意</span>
				<span>《用户协议》</span>
			</p>
		</label>
	</div>

</template>

<script>

import "../../../assets/css/font/iconfont.css"

	export default{
		name:"account",
		data(){
			return{
				flag:false,
				form:{
					rename:"",
					repwd:""
				}
			}
		},
		methods:{
			
			onSubmit(event){
				// 登陆处理
				this.$axios.post("http://localhost:3000/createuser",{
					name:this.form.rename,
					pwd:this.form.repwd
				})

				.then(res => {
					this.flag = false;
					// console.log(res.data);
					if(res.data.length>0){
						// this.isLogin = true;
						// this.nick = res.data[0].rename;
					}else{
						alert("注册成功")
					}
				})
				.catch(error => {
					console.log(error);
				})
			}
		}
	}
</script>

<style scoped lang="less">

.accountWrap{
	box-sizing: border-box;
	padding:44/50rem 50/50rem;
	.account{
		height: 114/50rem;
		line-height: 114/50rem;
		p{
			color:#43bf92;
			font-size: 30/50rem;
			float: left;
		}
		.reg{
			color:#43bf92;
			font-size: 30/50rem;
			float: right;
		}
	}
	.log{
		width: 540/50rem;
		height: 260/50rem;
		margin:0 auto;
		overflow: hidden;
		&>div{
			width: 188/50rem;
			height: 174/50rem; 
			margin:43/50rem auto;
			img{
				width: 188/50rem;
				height: 174/50rem;
			}
		}
	}
	.mag{
		width: 100%;
		text-align: center;
		position: relative;
		input{
			height: 50/50rem;
			border:0;
			margin-top:40/50rem;
			padding-left: 44/50rem;
			box-sizing: border-box;
			background-color: #f1f1f1;
			outline: none;
			&:nth-child(3){
				width: 90%;
				border-bottom: 1/50rem solid #43bf92
			}
			&:nth-child(4){
				width: 90%;
				border-bottom: 1/50rem solid #43bf92
			}
		}
		i{
			color:#999;
			position: absolute;
			&:nth-child(1){
				top:45/50rem;
				left:38/50rem;
			}
			&:nth-child(2){
				top:138/50rem;
				left:38/50rem;
			}
		}
		.yzm{
			position: absolute;
			top:124/50rem;
			right:30/50rem;
			background-color: #43bf92;
			display: inline-block;
			width: 130/50rem;
			height: 55/50rem;
			font-size: 12/50rem;
			color: #fff;
			text-align: center;
			line-height: 55/50rem;
			padding:0 5/50rem;
		}
	}
	.loginButton{
		display: block;
		width: 600/50rem;
		margin: 86/50rem auto;
		clear:both;
		button{
			width: 100%;
			height: 74/50rem;
			background-color: #43bf92;
			color:#fff;
			font-size: 32/50rem;
			font-weight:700;
			border:0;
			border-radius: 10/50rem;
			outline: none;
		}
		p{
			margin-top: 30/50rem;
			font-size: 26/50rem;
			color:#999;

			input{
				vertical-align: top;
				color:#43bf92;
				background-color: #43bf92;
			}
			span{
				&:nth-child(1){
					display: inline-block;
					vertical-align: bottom;
					width: 24/50rem;
					height: 24/50rem;
					border:2/50rem solid #43bf92;
				}
			}
		}
		
	}
}
	
</style>