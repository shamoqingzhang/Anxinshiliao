<template>
    <div class="navs-boox">
      <ul>
        <li v-for="(data,index) in diade" :key="index">
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
</template>
<script>

export default{
  name:"nav",
  data(){
    return{
      diade:[
      {
        title:'中华食疗',
        content:"中华食疗 二册 食疗养生 五谷五脏养生药膳大全 排毒减肥降脂养颜 常见病",
        url:"https://img.alicdn.com/bao/uploaded/i2/TB1j5ySLVXXXXX4XFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg",
        person:'2563'
      },
      {
        title:'五谷磨房多谷黑芝麻粉',
        content:"五谷磨房多谷黑芝麻粉 黄豆粉熟 五谷磨坊早餐代餐粉 黑豆黑米粉",
        url:"https://img.alicdn.com/imgextra/i4/202224264/TB2y8mqXB0lpuFjSszdXXcdxFXa_!!202224264.jpg_430x430q90.jpg",
        person:'3278'
      },
      {
        title:'黑芝麻核桃粉',
        content:"黑芝麻核桃粉乌发防脱纯熟现磨五谷磨坊房孕妇干吃即食可配黑豆粉",
        url:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/1128214754/TB28eYlggoQMeJjy0FpXXcTxpXa_!!1128214754.jpg_230x230.jpg_.webp",
        person:'2258'
      },
      {
        title:'百草芳',
        content:"百草芳颜营养黑芝麻核桃黑豆粉五谷杂粮粥冲泡即食早餐代餐冲饮",
        url:"https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/3357296381/TB1ekzpdtrJ8KJjSspaXXXuKpXa_!!0-item_pic.jpg_230x230.jpg_.webp",
        person:'987'
      },
      {
        title:'梦之队',
        content:"梦之队桑葚黑芝麻核桃黑豆粉五谷杂粮粉代餐粉饱腹现磨 即冲即饮",
        url:"https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/3098652592/TB1NJ5hdDnI8KJjSszbXXb4KFXa_!!0-item_pic.jpg_230x230.jpg_.webp",
        person:'3247'
      },
      {
        title:'晚桔',
        content:"晚桔 1:1黑芝麻黑豆粉 加冰糖 下单现磨代餐杂粮粉冲泡即食350g",
        url:"https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/1579499746/TB2BoV2r5AKL1JjSZFoXXagCFXa_!!1579499746.jpg_230x230.jpg_.webp",
        person:'855'
      }]
    }
  }
} 

</script>
<style scoped lang='less'>
    .navs-boox{
      width: 710/50rem;
      margin: 0 auto;

      ul{
        text-decoration: none;
        li{ 
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
                width: 213/50rem;
                height: 143/50rem;
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
</style>