<template>

	<div>
		<!-- 小模板 -->
		<div class="effect">
			<p>红豆神奇功效 养心消水肿</p>
			<div>
				<img src="../../../../assets/img/五谷粥.png" alt="">
				<div class="info">
					<p>红豆不但养心消水肿,补血功效也是首屈一指的!今天我们就跟大家聊一聊红豆有哪些功效......</p>
					<p>
						<span>231234</span>
						次阅读
					</p>
				</div>
			</div>
		</div>
		
	</div>

</template>

<script>

export default{
	name:"food",
	data(){
		return{
			
		}
	}
}
	
</script>

<style scoped lang="less">

.effect{
	padding:24/50rem 20/50rem;
	border-bottom: 1/50rem solid #ddd;
	box-sizing: border-box;
	&>p{
		margin-bottom: 24/50rem;
		font-size: 30/50rem;
	}
	&>div{
		&>img{
			width: 232/50rem;
			height: 162/50rem;
			margin-right: 25/50rem;
		}
		.info{
			float: right;
			display: inline;
			width:450/50rem; 
			clear: both;
			&>p{
				font-size: 26/50rem;
				color:#999;
				span{
					color:#c53336;
				}
				&:nth-child(2){
					float: right;
					margin-top: 30/50rem;
				}
			}
		}
	}
}
	
</style>