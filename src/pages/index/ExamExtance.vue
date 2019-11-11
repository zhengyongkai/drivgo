<template>
  <div class="body">
       <tab custom-bar-width="50px">
            <tab-item selected>
                <router-link to="/one">科目一</router-link>

            </tab-item>
            <tab-item >
                <router-link to="/four">科目二</router-link>
            </tab-item>
        </tab>
        <div>
          <router-view></router-view>
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
