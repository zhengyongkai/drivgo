<template>
  <div class="body ">
       <div class="van-tabbar" >
       <van-tabs v-model="active" swipeable>
        <van-tab title="标签 1">
               <one></one>    
        </van-tab>
        <van-tab title="标签 2">
            <four></four>
        </van-tab>
      
        </van-tabs>
        
       </div>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
import StandardTop from '@/components/Tabbar/StandardTop'
import StandardBottom from '@/components/Tabbar/StandardBottom'
   import BScroll from 'better-scroll';
   import SubjectOne from '@/pages/index/SubjectOne'
      import SubjectFour from '@/pages/index/SubjectFour'
export default {
  name: "Index",
  data(){
      return {

      }
  },
  components:{
       "van-tab":Tab,
      "van-tabs":Tabs,
      "standardtop":StandardTop,
      "standardbottom":StandardBottom,
      "one":SubjectOne,
      "four":SubjectFour
  },
   mounted(){
      
    },
};
</script>

<style lang="scss" scoped>
  a{
    width: 100%;
  }
  .van-tabbar {
   
  position: fixed;
  width: 100%;

  top: 2rem;
  z-index: 999;
  

}
</style>
