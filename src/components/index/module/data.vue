<template>
	<div class='funad'>
		<div class="nav">
		
			<!-- 头部 -->
			<div class="headWrap">
				<!--  -->
				<a href="#" class="dianji">
					<span onclick="window.history.go(-1)">
						<i class="iconfont icon-iconfont552cc14536532"></i>
					</span>
				</a>
			</div>

		</div>
		<router-view></router-view>

		<div class="data-nav"llop>
			<div class="data-h3"><h3>中华食疗</h3></div>

			<div class="data-box">
				<span class="box-zuo">作者: 王岩</span>
				<div class="box-img"><img src="../../../assets/images/index_12.png"></div>
			</div>

			<div class="data-zhen">
				中华食疗 二册 食疗养生 五谷五脏养生药膳大全 排毒减肥降脂养颜 常见病中华食疗 二册 食疗养生 五谷五脏养生药膳大全 排毒减肥降脂养颜 常见病中华食疗 二册 食疗养生 五谷五脏养生药膳大全 排毒减肥降脂养颜 常见病中华食疗 二册 食疗养生 五谷五脏养生药膳大全 排毒减肥降脂养颜 常见病中华食疗 二册 食疗养生 五谷五脏养生药膳大全 排毒减肥降脂养颜 常见病中华食疗 二册 食疗养生 五谷五脏养生药膳大全 排毒减肥降脂养颜 常见病
			</div>

			<div class="data-ti">

				<div class="ti">
					<h4 class="ti_1">1、乳饮料</h4>
					<p>
							五谷磨房多谷黑芝麻粉 黄豆粉熟 五谷磨坊早餐代餐粉
						黑豆黑米粉五谷磨房多谷黑芝麻粉 黄豆粉熟 五谷磨坊早餐代餐粉 
						黑豆黑米粉五谷磨房多谷黑芝麻粉 黄豆粉熟 五谷磨坊早餐代餐粉 
						黑豆黑米粉
					</p>
				</div>
				<div class="ti">
					<h4 class="ti_2">2、乳饮料</h4>
					五谷磨房多谷黑芝麻粉 黄豆粉熟 五谷磨坊早餐代餐粉 黑豆黑米粉五谷磨房多谷黑芝麻粉 黄豆粉熟 五谷磨坊早餐代餐粉 黑豆黑米粉五谷磨房多谷黑芝麻粉 黄豆粉熟 五谷磨坊早餐代餐粉 黑豆黑米粉
				</div>
				<div class="ti">
					<h4 class="ti_3">3、乳饮料</h4>
					五谷磨房多谷黑芝麻粉 黄豆粉熟 五谷磨坊早餐代餐粉 黑豆黑米粉五谷磨房多谷黑芝麻粉 黄豆粉熟 五谷磨坊早餐代餐粉 黑豆黑米粉五谷磨房多谷黑芝麻粉 黄豆粉熟 五谷磨坊早餐代餐粉 黑豆黑米粉
				</div>
				<div class="ti">
					<h4 class="ti_4">4、乳饮料</h4>
					五谷磨房多谷黑芝麻粉 黄豆粉熟 五谷磨坊早餐代餐粉 黑豆黑米粉五谷磨房多谷黑芝麻粉 黄豆粉熟 五谷磨坊早餐代餐粉 黑豆黑米粉五谷磨房多谷黑芝麻粉 黄豆粉熟 五谷磨坊早餐代餐粉 黑豆黑米粉
				</div>
			</div>

		</div>
<!-- foot -->
		<div class="white">
				<div class="wcontent">
					<h2>加入购物车</h2>
					<div class="p1">
						<span class="sp">食谱</span>					
						<img :src="sj.url">
		
						<el-button type="text" @click="open" class="jia">
							<img src="../../../assets/jh_03.png"/>
						</el-button>						
					</div>
					<div class="p2">
						<span class="dp">单品</span>
						<img :src="sj.url2"/>
						<el-button type="text" @click="open" class="jia1"><img src="../../../assets/jh_03.png"></el-button>
						<img src="../../../assets/ym4_03.png">
							
						<el-button type="text" @click="open" class="jia2"><img src="../../../assets/jh_03.png"></el-button>			
					</div>
					<router-link to="/cart" class="gwc">
						<img src="../../../assets/gwc_03.png">
					</router-link>
				</div>
			</div>
		
	</div>

</template>

<script>
	
export default{
	name:"Funad",
	data(){
		return{
			sj:[],
			detailId:0,
			special:[
				{
					p1:'精',
					p2:'选',
					url:"../../../assets/x3_03.png",
					content:'沂蒙姑娘精选来自沂蒙地区农家种植的优质红小豆进行严格 的人工挑选拣出色泽鲜艳、颗粒饱满的豆子集中运往沂蒙姑 娘加工车间进行淘洗'
				},
				{
					p1:'现',
					p2:'磨',
					url:"../../../assets/x4_03.png",
					content:'沂蒙姑娘所有的谷物粉都是现加工现磨包装发货的，我们杜 绝存储尘粉囤货不做提前加工以确保粉的营养价值最大化我 们要做的是给每一位'
				},
				{
					p1:'美',
					p2:'包',
					url:"../../../assets/x3_03.png",
					content:'包装是对一个产品认可最直接的表达，沂蒙姑娘选择包装上 从来站在客户的角度上，怎么做到最好做到最服务我们每天 都在服务上下功夫，'
				}
			]
		}
	},
	methods: {
      open(){
        this.$alert('添加成功', '提示', {
          confirmButtonText: '确定'
        });
      }
    },
    created(){
	    var curenUrl=this.HOST+"/data/mran.json"
	     this.$axios.get(curenUrl)
	    .then(res => {	    	
	      this.sj = res.data.content[this.$store.state.idx].pd[this.$store.state.id];
	    })
	    .catch(error => {
	      console.log(error);
	    })
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

a{
	text-decoration: none;
	color: #fff;
}
.funad{
	overflow: hidden;
	width: 100%;
	background-color: #fff;
	.data-nav{
		margin-top: 30/50rem;
		overflow: hidden;
		.data-h3{
			padding-bottom: 20/50rem;
			border-bottom: 1/50rem solid #ddd;

			&>h3{
				text-align: center;
				font-size: 42/50rem;
				width: 710/50rem;
				margin: 0 auto; 
				
				color: #43bf92;
			}
		}
		.data-ti{
			width: 710/50rem;
			margin: 0 auto;
			margin-top: 20/50rem;
			
			&>div{
				font-size: 28/50rem;
				line-height: 38/50rem;
				margin-top: 25/50em;
				text-indent: 2/50rem;
				h4{
					font-size: 32/50rem;
					line-height: 38/50rem;
					margin: 15/50rem 0;
					color: #43bf92;
				}
				p{
					font-size: 28/50rem;
					line-height: 38/50rem;
					margin-top: 25/50em;
					text-indent: 2;
				}
			}
		}
		.data-zhen{
			width: 710/50rem;
			margin: 0 auto;
			font-size: 28/50rem;
			color: #43bf92;
			line-height: 38/50rem;
		}
		.data-box{
			margin:10/50rem 20/50rem 20/50rem;
			.box-zuo{
				font-size: 28/50rem;
			}
			
			.box-img{
				margin: 0 auto;
				width: 340/50rem;
				height: 125/50rem;

				&>img{
					width: 340/50rem;
					height: 125/50rem;
				}
			}		
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
		
		.nav-left{
			width: 100/50rem;
			float: left;
			font-size: 30/50rem;
			padding-left: 30/50rem;
			position: relative;

			a:after{
				content: "";
				position: absolute;
				width: 48/50rem;
				height: 48/50rem;
				left: 0;
				top:20/50rem;
				background: url(../../../assets/images/fan_04_03.png) no-repeat;
				background-size: 32/50rem;
				background-position: 0 1/50rem;
			}
		}
	}
// foot
	.white{
		border-top: 1/50rem solid #bbb;
		margin-top: 30/50rem;
		overflow: hidden;
		background-color: #fff;
		width: 100%;
		.wcontent{
			position: relative;	
			h2{
				font-size: 35/50rem;
				margin-bottom: 25/50rem;
			}			
			width: 710/50rem;
			margin: 30/50rem auto;
			.p1{	
				overflow: hidden;	
				.sp{

					text-align: center;				
					width: 110/50rem;
					height: 110/50rem;
					float: left;
					margin-top: 40/50rem;
				}				
				&>img{	
					float: left;				
					width: 295/50rem;
					height: 110/50rem;							
				}
				&>.jia{
						position: absolute;
						top:20/50rem;
						right: 270/50rem;
						img{
							width: 35/50rem;
							height: 35/50rem;
						}					
					}					
			}
			.p2{
				margin-top: 20/50rem;
				.dp{
					overflow: hidden;
					text-align: center;				
					width: 110/50rem;
					height: 110/50rem;
					float: left;
					margin-top: 40/50rem;
				}
				img{
					width: 100/50rem;
					height: 95/50rem;
					margin-right: 80/50rem;							
				}
				&>.jia1{
						position: absolute;
						top:170/50rem;
						right: 390/50rem;
						img{
							width: 35/50rem;
							height: 35/50rem;
					}					
				}
				&>.jia2{
						position: absolute;
						top:170/50rem;
						right: 200/50rem;
						img{
							width: 35/50rem;
							height: 35/50rem;
					}					
				}	
			}
			&>.gwc{
				display: inline-block;
				position: absolute;
				bottom: -20/50rem;
				right: 30/50rem;
				width: 100/50rem;
				height: 100/50rem;
				&>img{
					// position: absolute;
					// bottom: -20/50rem;
					// right: 30/50rem;
					width: 100/50rem;
					height: 100/50rem;
				}
			}
		}
	}	
}


</style>