<template>

	<div>
		<!-- 小模板 -->
		<div class="effect" v-for="(values,index) in food">
			<p>{{values.title}}</p>
			<div>
				<img :src="values.imgurl">
				<div class="info">
					<p>{{values.text}}</p>
					<p>
						<span>已售出{{values.shuliang}}件</span>
						<span>{{values.zan}}元</span>
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
			food:[
				{
					title:"红豆薏仁水",
					imgurl:"http://www.photophoto.cn/s69/041/015/0410150038.jpg",
					text:"补血功效也是首屈一指的!",
					shuliang:560,
					zan:60
				},
				{
					title:"五谷养生粥",
					imgurl:"http://www.photophoto.cn/s69/041/015/0410150038.jpg",
					text:"补血功效也是首屈一指的!",
					shuliang:1200,
					zan:80
				},
				{
					title:"大麦荷叶茶",
					imgurl:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3887203532,307473771&fm=27&gp=0.jpg",
					text:"瘦身,美容,拥有好身材,不止一点点",
					shuliang:8902,
					zan:20
				}
			]
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
					&:nth-child(1){
						color:#aaa;
					}
					&:nth-child(2){
						color:#c53336;
						margin-left: 220/50rem;
					}
				}
				&:nth-child(2){
					float: right;
					margin-top: 100/50rem;
				}
			}
		}
	}
}
	
</style>