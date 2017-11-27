<template>
	<div>	
		<div class="mb" v-for="(content2,index) in sj[this.$store.state.idx].pd" :key='index'> 		
		<router-link :to="{path:'/detail/'+content2.id}">
			<img :src="content2.url">
		   <div class="mbleft">		    	
		    	<h2>{{content2.title}}</h2>
		    	<p>{{content2.content}}</p>			    	    		
			    <ul>
			    	<li class="money">{{content2.money}}</li>
			    	<li>{{content2.person}}人付款</li>
			    	<li></li>
			    </ul>
		    </div>
		    </router-link>
		    <p>{{id}}</p>
		</div>  
		<Foot/> 		
	</div>
</template>
<script type="text/javascript">

import Foot from "./index/foot.vue"

export default{
	name:'dietcontent',
	data(){
		return{			
			sj:[]
		}
	},
	components:{
		Foot
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
	},
	created(){
	    //console.log(this.$store.state.idx)
	    var curenUrl=this.HOST+"/data/mran.json"
	    this.$axios.get(curenUrl)
	    .then(res => {	
	      this.sj = res.data.content;
	      //console.log(res.data)
	    })
	    .catch(error => {
	      console.log(error);
	    })
  }
	
}

</script>
<style lang='less' scoped>
.mb{
	a{
		display:flex;
		flex-direction:row;
		margin-bottom: 20/50rem;
		border-bottom: 1px solid #ccc;
		img{
			display: block;
			width: 230/50rem;
			height:230/50rem;
		}
		.mbleft{
			width: 435/50rem;
			height: 196/50rem;
			margin: 15/50rem 25/50rem 30/50rem 20/50rem; 
			h2{
				font-size: 30/50rem;
			}
			p{
				height: 40/50rem;
				line-height: 40/50rem;
				margin: 18/50rem 0 80/50rem;
				color: #666;
			}
			ul{
				display: flex;
				flex-direction:row;
				li{
					margin-right: 50/50rem;
				}
				.money{
					color: red;
				}
			}
		}
	}
		
	}	

</style>