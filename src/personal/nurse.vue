<template>
	<div class="nurse">		
		<PersonalHead/>
		<NurseCon/>
		<GoCart/>
		<Foot/>
    </div>
	
</template>

<script>

	import PersonalHead from "./components/personalHead"
	import NurseCon from "./components/nurseCon"
	import GoCart from "./components/goCart"
	import Foot from "../components/index/foot"
	export default({
		name:"nurse",
		data(){
			return{
				
			}
		},
		components:{
			PersonalHead,
			NurseCon,
			GoCart,
			Foot
		}
	})
</script>

<style scoped lang="less">
 
</style>