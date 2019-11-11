<template>
  <div class="body">
       <div class="top">
          <standardtop></standardtop>
       </div>
       <tab custom-bar-width="50px">
            <tab-item selected>
                <router-link to="/home/one">科目一</router-link>

            </tab-item>
            <tab-item >科目二</tab-item>
        </tab>
        <div>
          <router-view></router-view>
        </div>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
import StandardTop from '@/components/Tabbar/StandardTop'
export default {
  name: "Index",
  data(){
      return {

      }
  },
  components:{
      Tab,
      TabItem,
      "standardtop":StandardTop
  }
};
</script>

<style lang="scss" scoped>

</style>
