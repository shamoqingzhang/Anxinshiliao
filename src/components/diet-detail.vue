<template>
	<div class="detail">
	<div >
			{{id}}
		<div class="head">
			<span class="fh" onclick="window.history.go(-1)">< 返回</span>
			<img :src="sj.url">
			<el-dropdown>
			  <span class="el-dropdown-link">
			    <i class="icon iconfont icon-fengxiang"></i>
			  </span>
			  <el-dropdown-menu slot="dropdown" style='margin-top: -25px'>
			    <el-dropdown-item>分享到QQ</el-dropdown-item>
			    <el-dropdown-item>分享到微信</el-dropdown-item>
			    <el-dropdown-item>分享到微博</el-dropdown-item>			   
			  </el-dropdown-menu>
			</el-dropdown>			
			<p>
				<span>{{sj.title}}</span>
				<span class="red">{{sj.money}}</span>
			</p>			
		</div>
		<div class="xq">
			<h2>商品详情</h2>
			<img :src="sj.url3">
		</div>
		<div class="special">
			<h2>产品特点</h2>
			<div class="jx" v-for="(item,index) in special">
				<p>{{item.p1}}</p>
				<p>{{item.p2}}</p>
				<img :src="sj.url2">
				<h3>{{item.content}}</h3>
			</div>
			<div class="main">
				<p>粉粉的主要食材</p>
				<div>
					<img :src="sj.url1" alt="" class="first">
					<img :src="sj.url2" alt="">
					<img :src="sj.url3" alt="" class="first">
				</div>
			</div>
			<div class="ct">
				<p>
					<span>传统工艺</span>
					<span>精细研磨</span>
					<h3>TRADITIONAL PROCESS FINE GRINDING</h3>
				</p>				
				<div class="left">
					<img :src="sj.url3">
					<h3>低温烘焙，瞬间熟化工艺</h3>
				</div>
				<div class="right">
					<img :src="sj.url1">
					<h5>研磨成粉</h5>
				</div>
			</div>
		</div>
		<div class="white">
			<div class="wcontent">
				<h2>加入购物车</h2>
				<div class="p1">
					<span class="sp">食谱</span>					
					<img :src="sj.url">
					<!-- <span class="jia"><img src="../assets/jh_03.png"></span> -->
					<el-button type="text" @click="open" class="jia" @click.once='count+=1'>
						<img src="../assets/jh_03.png">
					</el-button>						
				</div>
				<div class="p2">
					<span class="dp">单品</span>
					<img :src="sj.url2">
					<!-- <span class="jia1"><img src="../assets/jh_03.png"></span> -->
					<el-button type="text" @click="open" class="jia1" @click.once='count+=1'><img src="../assets/jh_03.png"></el-button>
					<img src="../assets/ym4_03.png">
					<!-- <span class="jia2"><img src="../assets/jh_03.png"></span> -->	
					<el-button type="text" @click="open" class="jia2" @click.once='count+=1'><img src="../assets/jh_03.png"></el-button>			
				</div>
				<router-link to="/cart" class="gwc">
					<img src="../assets/gwc_03.png">
					<span>{{count}}</span>
				</router-link>
			</div>
		</div>
	</div>
	
	</div>
</template>
<script type="text/javascript">
import "../assets/css/font/iconfont.css"
export default{
	name:'detail',
	data(){
		return{
			count:0,
			sj:[],
			detailId:0,
			special:[
				{
					p1:'精',
					p2:'选',
					url:"../assets/x3_03.png",
					content:'沂蒙姑娘精选来自沂蒙地区农家种植的优质红小豆进行严格 的人工挑选拣出色泽鲜艳、颗粒饱满的豆子集中运往沂蒙姑 娘加工车间进行淘洗'
				},
				{
					p1:'现',
					p2:'磨',
					url:"../assets/x4_03.png",
					content:'沂蒙姑娘所有的谷物粉都是现加工现磨包装发货的，我们杜 绝存储尘粉囤货不做提前加工以确保粉的营养价值最大化我 们要做的是给每一位'
				},
				{
					p1:'美',
					p2:'包',
					url:"../assets/x3_03.png",
					content:'包装是对一个产品认可最直接的表达，沂蒙姑娘选择包装上 从来站在客户的角度上，怎么做到最好做到最服务我们每天 都在服务上下功夫，'
				}
			]
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
  },
   methods: {
      open(){
        this.$alert('添加成功', '提示', {
          confirmButtonText: '确定'
          // callback: action => {
          //   this.$message({
          //     type: 'info',
          //     message: `action: ${ action }`
          //   });
          // }
        });
      }
    },
	computed:{		
		idx(){
			return this.$store.state.idx;
		},
		id(){
			var id = this.$route.path.split('/').slice(2,3)+'';			
			this.$store.state.id = id;
			//return this.$store.state.id;
		}
	}
}
</script>
<style lang='less' scoped>
.detail{
	background-color: #F0EFEF;
	width: 100%;
	.head{
		position: relative;
			.fh{
				display: block;
				position: absolute;				
				width: 90/50rem;
				height: 90/50rem;
				font-size: 25/50rem;
				top: 30/50rem;
				left:20/50rem;
				color:#fff;
			}
		.el-dropdown{
				position:absolute;
				display: block;
				color: #fff;
				width: 100/50rem;
				height: 100/50rem;
				font-size: 30/50rem;
				text-align: center;
				top: 20/50rem;
				right: 0;
			}
		img{
			display: block;
			width: 100%;
			height: 360/50rem;
		}
		p{
			width: 710/50rem;
			display: flex;
			margin:25/50rem auto; 
			span{
				flex-grow:1;
				font-size: 40/50rem;			
			}
			.red{
				color: red;
				text-align: right;
			}
		}	
	}
	.xq{
		width: 100%;
		font-size: 40/50rem;
		h2{
			text-align: center;
			margin-top: 65/50rem;
		}
		img{
			width: 100%;
			height: 470/50rem;
			margin-top: 30/50rem;
		}
	}
	.special{
		width: 710/50rem;
		margin: 0 auto;
		text-align: center;
		h2{
			font-size: 40/50rem;
			margin-top: 70/50rem;
		}
		.jx{
			background: url("../assets/s1_03.png") no-repeat;
			background-size: 470/50rem 270/50rem;
			background-position: 60/50rem 0;
			width: 530/50rem;
			margin: 0 auto;
			position: relative;
			margin-top:140/50rem;
			p{
				position: absolute;
				font-size: 60/50rem;
				font-weight: bold;
				top:0;
				left: 50/50rem;
				&:nth-child(2){
					position: absolute;
					top:70/50rem;
					left: 50/50rem;
				}
			}
			img{
				width: 160/50rem;
				height: 160/50rem;
				border-radius: 50%;
			}
			h3{
				text-align: left;
				margin-top: 30/50rem;
				line-height: 50/50rem;
			}
		}
	}
	.main{
		overflow: hidden;
		width: 710/50rem;
		margin: 110/50rem auto 0;
		p{
			margin: 0 auto;
			width: 135/50rem;
			height: 1rem;
			font-size: 30/50rem;
			line-height: 1rem;
		}
		div{
			.first{
				border-radius: 50%;
			}
			margin-top: 2rem;
			height: 330/50rem;
			line-height: 330/50rem;
			img{
				width: 165/50rem;
				height: 165/50rem;
			}
			img:nth-child(2){
				width: 210/50rem;
				height: 250/50rem;
				margin: 0 70/50rem;
			}
		}
		
	}
	.ct{
		overflow: hidden;
		margin-top: 150/50rem;
		p{
			font-size: 45/50rem;
			text-align: center;
			span{
				margin-right: 30/50rem;
			}
			h5{
				display: block;
				width: 290/50rem;
				font-size: 12/50rem;
			}
		}
		.left,.right{
			margin-bottom: 120/50rem;
			margin-top: 30/50rem;
			width: 50%;
			float: left;
		}
		.left{
			img{
				width: 235/50rem;
				height: 235/50rem;
				border-radius: 50%;
			}	
		}
		.right{
			img{
				width: 356/50rem;
				height: 250/50rem;
			}	
		}
	}
	.white{
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
				span{
					display: block;
					width: 40/50rem;
					height: 40/50rem;
					position: absolute;
					right: 10/50rem;
					bottom: 84/50rem;
					text-align: center;
					background-color: red;
					color: #fff;
					border-radius: 50%;
					padding: 5/50rem;
					box-sizing: border-box;
				}

			}
		}
	}
}	
</style>