<template>
  <div class="body">
       <div class="top">
          <standardtop></standardtop>
       </div>
        <div>
          <router-view v-transition></router-view>
        </div>
        <div>
            <standardbottom></standardbottom>
        </div>

  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
import StandardTop from '@/components/Tabbar/StandardTop'
import StandardBottom from '@/components/Tabbar/StandardBottom'
export default {
  name: "Index",
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

</style>
