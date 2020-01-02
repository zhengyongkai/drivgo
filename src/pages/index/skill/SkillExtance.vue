<template>
  <div class="body">
    <div class="tabber">
       <tab custom-bar-width="50px" >
         
             <tab-item >
                <router-link to="/skill/two">科目二</router-link>

            </tab-item>
            <tab-item >
                <router-link to="/skill/three">科目三</router-link>

            </tab-item>
           
        </tab>
    </div>
         <div ref="bscroll" class="bscroll main" style="position:absolute;top:4rem; " >
           <div  class="bscroll-container" >
             <router-view ></router-view>
           </div>
        </div>
  </div>
</template>

<script>
   import BScroll from 'better-scroll';
import { Tab, TabItem } from 'vux'
export default {
  name: "SubjectTwo",
  data(){
    return {

    }
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
  components:{
    Tab,
    TabItem
  }
  
};
</script>

<style lang="scss" scoped>

.body{
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
