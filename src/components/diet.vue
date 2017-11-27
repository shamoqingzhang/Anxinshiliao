<template>
  <div class="diet">
      <div class="nav">
         <p>食疗坊</p>
      </div>
      <div class="search">

         <input type="text" placeholder="搜索食谱"  v-model="str" @keyup="getInfo" >
         <span></span>

         <div class="sousuo" v-if="flag">
            <ul>
               <li v-for="(values,index) in data"> {{values[0]}} </li>
            </ul>
         </div>

      </div>
      <div class="more more1">
         <ul>

            <li v-for='list in list' :list='list'><router-link :to="{path:'/article'}"><img :src="list.url"></router-link>{{list.title}}</li>
         </ul>
      </div>   
      <div class='more more2'> 
         <ul>  
            <li v-for='list1 in list1'><router-link :to="{path:'/article'}"><img :src="list1.url"></router-link>{{list1.title}}</li>
         </ul>
      </div>
      <DietTab />  
  </div>
</template>

<script>

import DietTab from './diet-tab'

export default {
  name: 'diet',
  data () {
    return {
      str:"",
      data:[],
      flag:false,
      list:[
      {
         url:require('../assets/01_03.png'),
         title:'美容养颜',
         id:0,
         p1:'滋补养颜粥',
         p2:"养颜粥"
      },
      {
         url:require('../assets/02_03.png'),
         title:'保健调养',
         id:1
      },
      {
         url:require('../assets/03_03.png'),
         title:'补养',
         id:2
      },
      {
         url:require('../assets/04_03.png'),
         title:'减肥',
         id:3
      },
      {
         url:require('../assets/05_03.png'),
         title:'母婴',
         id:4
      }],
      list1:[
      {
         url:require('../assets/06_03.png'),
         title:'节气',
         id:0
      },
      {
         url:require('../assets/07_03.png'),
         title:'常见食疗',
         id:1
      },
      {
         url:require('../assets/08_07.png'),
         title:'人群功效',
         id:2
      },
      {
         url:require('../assets/09_03.png'),
         title:'维生素',
         id:3
      },
      {
         url:require('../assets/10_03.png'),
         title:'其他',
         id:4
      }]
      
    }
  },
  components:{
   DietTab
  },
  methods:{

      getInfo(){
         // 键盘抬起获取数据
         this.flag=true
          var currentUrl=this.HOST2+'/sug?q='+this.str+"&code=utf-8&area=c2c&nick=&sid=null";
            this.$axios.get(currentUrl)
            .then(res => {    
               this.data=res.data.result
               // console.log(res.data.result)
            })
            .catch(error => {
               console.log(error);
            })
      }
  }
   
  

}
</script>

<style scoped lang="less">
.diet{
   // overflow: hidden;
   width: 100%;
   height: 100%;
   background-color:#fff;
   .nav{
      width: 100%;
      height: 88 / 50rem;
      background-color: #43bf92;
      p{
         text-align: center;
         line-height: 88/50rem;
         font-size: 36/50rem;
         color: #ffffff;
      }
   }
   .search{      
      width: 100%;
      position: relative;
      input{
         display: block;
         background-color: #e7e7e7;
         width: 710/50rem;
         margin: 11/50rem auto;
         border: none;
         height: 60/50rem;
         padding-left: 20/50rem;
         border-radius: 10px;
         font-size: 36/50rem;
         line-height: 60/50rem; 
         outline: medium; 
         color: #a3a3a3;        
      }
      span{           
         display: block;
         width: 43/50rem;
         height: 43/50rem;
         background: url('../assets/so_03.png') no-repeat;
         background-size: 43/50rem;
         position: absolute;
         top: 8/50rem;
         right: 40/50rem;
      }
      &>.sousuo{
         width: 100%;
         background-color: #fff;
         position: absolute;
         top:70/50rem;
         left:0;
         padding:0 20/50rem;
         box-sizing: border-box;
         z-index: 66;
         ul{

            li{
               width: 100%;
               height: 60/50rem;
               line-height: 60/50rem;
               border-bottom:1/50rem solid #ddd;
            }
         }
      }
   }
   .more1{
      margin-top: 20/50rem;
   }
   .more{
      margin-bottom: 40/50rem;
      width: 100%;
      ul{
         margin: 0 auto;
         width: 710/50rem;
         display: flex;
         flex-direction: row;

         li{
            width: 710/5/50rem;
            height: 100/50rem;
            text-align: center;
            font-size: 26/50rem;
            color: #777;
            a{
               display: block;
               width: 710/5/50rem;
               margin-bottom: 10/50rem;
               img{
               display: block;
               width: 75/50rem;
               height: 75/50rem;
               margin: 0 auto;
            }
         }
            
      }

      }
   }
 

}

</style>
