<template>
	<div class="home">

		<PersonalHead/>
	<!-- 日历 -->
		<div class="rili">
      <router-link class="iconfont icon-rili-" to="/calendar"></router-link>
    </div>

		<div v-for="(item,index) in items" :key="index" class='health-tag'>
	        <div class="health clearfix">	    	
	    	   <span :class="item.cl"></span>{{item.title}}<span :class="item.shang" @click="change(index)"></span>
	        </div>

	        <div class="healthContent"  v-if='item.flag'>
	    	    <label v-for="(con,idx) in item.content" :key="idx" :class="con.cls" @click="choose(idx,$event)" >
		            <span @click="choice(index)"></span><span  @click="choice(index)">{{con.title}}</span> 
	    	    </label>
	    	    <div class='clear'></div>
	    	    <span>自定义      +</span>
	        </div>
	   </div>
	   <GoCart/>
     <Foot />
	</div>

</template>

<script>
	import "../assets/css/font/iconfont.css";
	import PersonalHead from "./components/personalHead"
	import GoCart from "./components/goCart"
  import Foot from "../components/index/foot"
	export default({
		name:"home",
		data(){
			return{  
        id:1,
				items:[{
					    cl:"iconfont icon-xindiantu",
              shang:"iconfont icon-fanhui-copy",
				      title:"身体状况",
              id:0, 
              flag :true,        
				      content:[ 
                {title:"嗓子痛",cls:""},
                {title:"手脚冰冷发麻",cls:""},
                {title:"口腔溃疡",cls:""},
                {title:"脚脖子疼",cls:""},
                {title:"声音沙哑肿痛",cls:""},
                {title:"流行性感冒",cls:""},
              ]            
             			
				     },
				     {
					    cl:"iconfont icon-mubiaobazi",
				      title:"今日目标",	
              id:1 ,
              flag:false,	
              shang:"iconfont icon-xiangshangjiantou",
              content:[ 
                {title:"吃早饭",cls:""},
                {title:"早睡早起",cls:""},
                {title:"按时吃药",cls:""},              
                {title:"八杯水",cls:""},
                {title:"排便",cls:""},	
                {title:"健走3000步",cls:""}
				      ]					
				     }
				]
			}
		},
		components:{
			PersonalHead,
			GoCart ,
      Foot
		},
    methods:{
      choice(key){
          this.id=key
      },
      choose(key,event){

          var cls=this.items[this.id].content[key].cls;

          if(cls){
              this.items[this.id].content[key].cls=""
          }else{
              this.items[this.id].content[key].cls="active"
          }
      },
      change(key,event){
         this.items[key].flag=!this.items[key].flag

         this.items[key].flag ? this.items[key].shang="iconfont icon-fanhui-copy" : this.items[key].shang="iconfont icon-xiangshangjiantou"
      }
    }
	})
</script>

<style scoped lang="less">
  body{
	background:#ffffff;
  }
  .home{
  	width:100%;
  	.rili{
  		text-align: center;
  		a{
  		   color:#414141;
  		   font-size:48/50rem;
  		   &:hover{
  		   	color:#43bf92;
  		   }	
  		}
  	}
    .health-tag{
  	    margin-bottom:88/50rem;
  	    .health{ 	
  		   width:100%;
  		   padding:10/50rem 20/50rem;
  		   border-bottom:3/50rem solid #43bf92;	
  		   font-size:28/50rem;  		
  		   span{
  			   font-size:38/50rem;
  			   margin-right:20/50rem;
  			   float:left;
  			   &:nth-child(1){
  			    	line-height:26/50rem; 
  			   }  			    			  
  			   &:nth-child(2){
            color:#747474;
  				  float:right;
  			   }
  		   }
  	    }
  	    .healthContent{  		
  		    width:100%;
  		    padding:45/50rem 55/50rem 0 55/50rem;  
  		    margin-bottom:35/50rem;
  		    position: relative;	
          font-size:28/50rem; 
          .active{
             &>span:first-child{
               background:#43bf92;
             }
              &>span:nth-child(2){
                color:#ffffff;
                background:#43bf92;
                border:none
             }
          } 
  		    label{
  		 	   width:49.3%;
  		 	   display: inline-block;
  		 	   padding-left:25/50rem;
  		 	   float:left;   		 		 	
  		     margin-bottom:30/50rem;
  		 	   span:first-child{
  		 		  display:inline-block;
  		 		  width:30/50rem;
  		 		  height:30/50rem;
  		 		  border:3/50rem solid #43bf92;
  		 		  border-radius:10/50rem;
  		 	    }
  		 	    span:nth-of-type(2){
      		 		padding:10/50rem 20/50rem;
      		 		border:1/50rem solid #BABABA;
      		 		border-radius:25/50rem;
      		 		font-size:26/50rem;
      		 		margin-left:10/50rem;  
  		 	    }		 		
  		    }
  	        &>span{  
      			  padding:10/50rem 30/50rem;
      		 	  border:1/50rem solid #BABABA;
      		 	  border-radius:55/50rem;  		 	
      		 	  position: absolute;
      		 	  bottom:-75/50rem;
      		 	  left:290/50rem;  		 	
  		      }	
  	    }
    }	
}
</style>