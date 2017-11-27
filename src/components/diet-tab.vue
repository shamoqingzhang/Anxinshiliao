<template>
	<div class="diet-tab" >
		<el-tabs v-model="activeName" @tab-click="handleClick">
		<p>{{idx}}</p>
		    <el-tab-pane label="排毒" name="first">

		    	<DietTabTemplate />
		    </el-tab-pane>
		    <el-tab-pane label="抗皱" name="second">
		    	
		    	<DietTabTemplate />
		    </el-tab-pane>
		    <el-tab-pane label="祛斑" name="third">
		    	
		    	<DietTabTemplate />
		    </el-tab-pane>
		    <el-tab-pane label="美白" name="fourth">
		    	
		    	<DietTabTemplate />
		    </el-tab-pane>
		    <el-tab-pane label="护发" name="five">
		    	{{idx}}
		    	<DietTabTemplate />
		    	
		    </el-tab-pane>
		    
 		</el-tabs>
	</div>


</template>
<script type="text/javascript">
import DietTabTemplate from './diet-tab-template'

export default{
	name:'diettab',
	data(){
		return{
			sj:[],
			idx1:0,
			activeName: 'first'			
		}
	},
	methods: {
      handleClick(tab, event) {
        //console.log(tab.index);
        this.idx1=tab.index;
      }
    },
	components:{
		DietTabTemplate
				
	},
	computed:{
		idx(){	
			this.$store.state.idx=this.idx1;
			//console.log(this.$store.state.idx)
			 //return this.$store.state.idx;
		}
	}
}

</script>
<style lang="less" scoped>
.diet-tab{
	width: 100%;
	.el-tabs{
		width: 710/50rem;
		margin: 0 auto;		
	}	
}


</style>