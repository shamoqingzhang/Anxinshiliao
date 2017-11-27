<template>


	<div class="accountWrap">
		<div class="account">
			<p onclick="window.history.go(-1)" class="quxiao">取消</p>
			<router-link :to="{path:'/register'}" class="reg">快速注册</router-link>
		</div>
		<div class="log">
			<div>
				<img src="../../assets/img/login.png" >
			</div>
		</div>
		<div class="mag">
			<i class="iconfont icon-wode"></i>
			<i class="iconfont icon-iconfont18"></i>
			<input type="text" placeholder="账号" v-model="form.name">
			<input type="password" placeholder="密码" v-model="form.pwd">
		</div>
		<div class="loginButton">
			<button type="submit" @click="onSubmit">登 录</button>
			<router-link :to="{path:'/findpwd'}" class="find">
				<p>忘记密码?</p>
			</router-link>
		</div>
	</div>

</template>

<script>

import "../../assets/css/font/iconfont.css"

import Vue from 'vue'
import qs from "qs"
import Axios from 'axios'
Vue.prototype.$axios=Axios

	export default{
		name:"account",
		data(){
			return{
				// flag:false,
				form:{
					name:"",
					pwd:""
				}
			}
		},
		methods:{
			
			onSubmit(event){
				// 登陆处理
				this.$axios.post("http://localhost:3000/login",{
					name:this.form.name
				})
				.then(res => {
					// this.flag = false;
					console.log(res.data);
					if(res.data.length>0){
						
					}else{
						alert("登陆失败")
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
		.quxiao{
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
			width: 90%;
			height: 50/50rem;
			border:0;
			border-bottom: 1/50rem solid #43bf92;
			margin-top:40/50rem;
			padding-left: 44/50rem;
			box-sizing: border-box;
			background-color: #f1f1f1;
			outline: none;
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
	}
	.loginButton{
		width: 600/50rem;
		margin: 0 auto;
		margin-top: 86/50rem;
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
		.find{
			p{
				margin-top: 20/50rem;
				font-size: 26/50rem;
				float: right;
				color:#999;
			}
		}
		
	}
}
	
</style>