<template>
<div>
	  <div class="footWrap">
            <router-link to="/index" class="shouye"  router-link-active exact>
              <i class="iconfont icon-yezi"></i>
              首页
           </router-link>
            <router-link to="/diet" class="shiliao">
              <i class="iconfont icon-house"></i>
              食疗坊
            </router-link>
            <router-link to="/home" class="siren">
              <i class="iconfont icon-classify_zuanleishipin"></i>
              私人定制
            </router-link>
            <router-link to="/mineIndex" class="wode">
              <i class="iconfont icon-wode icon-active"></i>
              <span>我的</span>
            </router-link>
             
    </div>

</div>
 

</template>

<script>

import "../../assets/css/font/iconfont.css"

export default {
  name: 'Mine',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang="less">

.footWrap{
  width: 100%;
  height: 98/50rem;
  font-size: 28/50rem;
  text-align: center;
  background-color: #ffffff;
  overflow: hidden;
  position: fixed;
  bottom: 0; 
  left: 0;

  a{
    width: 187.5/50rem;
    height: 98/50rem;
    float: left;
    margin-top: 15/50rem;
    font-size: 28/50rem;
    color:#999;

    
    i{
      display: block;
     margin-bottom: 10/50rem;
    }
  }
}



</style>
