<template>
<div>
    <div class="simply">
    	<OrderHead :list="list"/> 
    	<div class="item" v-for="(item,index) in sj">
    		<div class="question">{{item.title}}</div>
    		<p>A.{{item.A}}</p>
    		<p>B.{{item.B}}</p>
    		<p>C.{{item.C}}</p>
    		<p>D.{{item.D}}</p>
    	</div>
    </div>
</div>
</template>

<script>
	import OrderHead from "../../../../components/orderHead"
	export default{
		name:"simply",
		data(){
			return{
					list:{
					    left:"放弃",
						back:"×",
						title:"简易版体制测试"			
			        },
			        sj:[]
			}
		},
		components:{
			OrderHead
		},
		created(){
	    //console.log(this.$store.state.id)
	    var curenUrl=this.HOST+"/data/ceshiti.json"
	     this.$axios.get(curenUrl)
	    .then(res => {	    	
	      this.sj = res.data.topic;
	      // console.log(res.data)
	    })
	    .catch(error => {
	      console.log(error);
	    })
  }
	}
</script>

<style scoped lang="less">
.simply{
	width:100%;
	&>.item{
		font-size: 30/50rem  !important;
		width:660/50rem;
		height:400/50rem;
		margin-left:40/50rem;
		border-bottom:1/50rem solid #BABABA;
		&>div{
			margin-top:50/50rem;
			margin-bottom:90/50rem;
		}
		&>p{
			margin-bottom:20/50rem;
			&:hover{
				color:#43bf92;
			}
		}
	}
}
  
</style>