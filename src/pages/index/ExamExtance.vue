<template>
  <div class="body ">
       <div class="tabber">
       <tab custom-bar-width="50px"  >
            <tab-item selected>
                <router-link to="/one">科目一</router-link>

            </tab-item>
            <tab-item >
                <router-link to="/four">科目四</router-link>
            </tab-item>
        </tab>
       </div>
        <div  ref="bscroll" class="bscroll main" style="overflow:hidden;position:absolute;top:4rem; ">
            <div  >
              <router-view ></router-view>
            </div>
         
        </div>

  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
import StandardTop from '@/components/Tabbar/StandardTop'
import StandardBottom from '@/components/Tabbar/StandardBottom'
   import BScroll from 'better-scroll';
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
  },
   mounted(){
      this.$nextTick(() => {

        let bscrollDom = this.$refs.bscroll;

        this.aBScroll = new BScroll(bscrollDom, {
            click:true,
            mouseWheel: true,//开启鼠标滚轮
        })

      })
    },
};
</script>

<style lang="scss" scoped>

</style>
