<template>
    <div class="professonal">
    	<OrderHead :list="list"/> 
    	<div class="item" v-for="(item,index) in sj">
    		<div class="question"  @click="toggleShow(index,$event)">{{item.title}}</div>
    		<div v-if="item.flag" class="answers">
    		<p class="clearfix"> <span>A.{{item.A}}</span> <span>B.{{item.B}}</span></p>
    		<p class="clearfix"> <span>C.{{item.C}}</span> <span>D.{{item.D}}</span></p>
    		</div>
    	</div>
    </div>
</template>

<script>
	import OrderHead from "../../../../components/orderHead"
	export default{
		name:"professonal",
		data(){
			return{
				    
					list:{
					    left:"放弃",
						back:"×",
						title:"专业版体制测试"			
			        }, 
				sj:[]
			}
		},
		methods:{
			toggleShow(key,event){
				this.sj[key].flag=!this.sj[key].flag				
			}
		},
		components:{
			OrderHead
		},
		created(){
		    var curenUrl=this.HOST+"/data/ceshiti.json"
		     this.$axios.get(curenUrl)
		    .then(res => {	    	
		      this.sj = res.data.topic;
		    })
		    .catch(error => {
		      console.log(error);
		    })
		}
	}
</script>

<style scoped lang="less">
.professonal{
	width:100%;
	.item{
		&>div{
			font-size: 30/50rem;
			margin-top:40/50rem;
			margin-bottom:20/50rem;
		}
		&>div:nth-of-type(2)>p{
			margin-bottom:20/50rem;	
			&>span{				
				width:330/50rem;
				float:left;
				&:hover{
					color:#43BF92
				}
			}
		}
		width:660/50rem;		
		margin-left:40/50rem;
		border-bottom:1/50rem solid #BABABA;
	}
}
  
</style>