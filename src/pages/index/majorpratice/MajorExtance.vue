<template>
  <div class="body">
      <div>
        <standardtop></standardtop>
      </div>
      <div class="top">
          <div class="items"> 
              <img src="../../../image/zhangjie.png"/>
              <div>章节练习</div>
          </div>
      </div>
  </div>
</template>
<script>
import { Tab, TabItem } from 'vux'
import StandardTop from '@/components/Tabbar/StandardTop'
import StandardBottom from '@/components/Tabbar/StandardBottom'
export default {
  name: "Extance",
  data(){
      return {

      }
  },
  components:{
      Tab,
      TabItem,
      "standardtop":StandardTop,
      "standardbottom":StandardBottom
  }
};
</script>

<style lang="scss" scoped>
 .body {
    width: 100%;
    font-size: 16px;
    margin: 0;
    padding: 0;
    
  }

  .top {
    padding: 12px 8px;
    background: #fff;
  }

</style>
