<template>
  <div class="navs-header">
    <div class="navs-lun">
      <swiper :options="swiperOption">
            <swiper-slide>
             <img src="../../assets/images/index_02.png"alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/images/images_03.png" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/images/images_05.png" alt="">
            </swiper-slide>
             <swiper-slide>
              <img src="../../assets/images/images_09.png" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
          
        </swiper>
    </div>
    <div class='navs-health'>
      <div class="health-left">
        <router-link exact :to="{path:'/hot'}">
          <img src="../../assets/images/index_05.png">
          <span>每日一测</span>
        </router-link>
      </div>
        <div class="health-right">
          <router-link class='secai' :to="{path:'/navs'}">
            <img src="../../assets/images/index_07.png">
              <span>每日食谱</span>
          </router-link>
        </div>
    </div>
    <div class="navs-boox">
      <ul class="muban">
        <!-- 模板 -->
        <li v-for="(data,index) in sj" :key="index">
          <router-link exact :to="{path:'/Data'}">
            <p class="biaot"> {{ data.title }} </p>
             <div class="nai">
               <div>
                 <img :src=" data.url ">
               </div>
               <div class="ringbt">
                 <p>{{ data.content }}</p>
                 <p class="rindd"><span>{{ data.person }}</span>次阅读</p>
               </div>
             </div>
          </router-link>
       </li>
      </ul>
    </div>
         <Foot></Foot>
  </div>
</template>
<script>
// import "../../assets/css/font/iconfont.css"
import Foot from './foot'
export default{

  name:"nav",
  data(){
    return{
      sj:[],
      
      swiperOption: {
            // swiper options 所有的配置同swiper官方api配置
            autoplay: 3000,
            grabCursor: true,
            setWrapperSize: true,
            autoHeight: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            // mousewheelControl: true,
            observeParents: true,
            loop:true
      }
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
        this.sj = res.data.content[this.$store.state.idx].pd;
        //console.log(res.data)
      })
      .catch(error => {
        console.log(error);
      })
  }
} 

</script>
<style scoped lang='less'>
a{
  text-decoration: none;
  color: #b3b3b3;
}
*{
  margin: 0;
  padding: 0;
  .navs-header{
    width: 100%;
    background-color: #fff;
    .navs-lun{
      width: 100%;

      & img{
        width:  750/50rem;
        height: 378/50rem; 
      }
    }
    .navs-boox{
      width: 710/50rem;
      margin: 0 auto;

      ul{
        margin-bottom:100/50rem; 
        li{ 
          border-bottom: 1/50rem solid #d4d4d4;
          padding-bottom: 20/50rem;
          box-sizing: border-box;
          margin-bottom: 24/50rem;
          &:last-child{
            margin-bottom: 0;
          }
          .biaot{
            font-size: 32/50rem;
            color: #6c6c6c;
          }
          .nai{
            overflow: hidden;
            margin-top: 15/50rem;
            
            &>div{
              float: left;

              &>img{
                width: 210/50rem;
                height: 140/50rem;
              }
            }

            .ringbt{
                width: 480/50rem;
                float: right;
                font-size: 26/50rem;
                
                p{
                  line-height: 50/50rem;
                  color: #b3b3b3;
                }
                .rindd{
                  text-align: right;

                  span{
                    color: red;
                    opacity: .5;
                  }
                }
              }
          }
        }
      }
    }
    .navs-health{
      overflow: hidden;
      padding:30/50rem 40/50rem;
      box-sizing: border-box;
      text-align: center;
      color: #b3b3b3;

      & img{
        width:305/50rem;
        height:186/50rem;
        margin-bottom: 15/50rem; 
      }

      .health-left{
        width:305/50rem;
        height:260/50rem;
        float: left;
        &>span{
          font-size: 28/50rem;
        }
      }

      .health-right{
        width:305/50rem;
        height:260/50rem;
        float: right;

        &>span{
          font-size: 28/50rem;
        }
      }   
    }
  }
}

</style>