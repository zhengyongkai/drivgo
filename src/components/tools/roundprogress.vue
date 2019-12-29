<template>
  <div >
    <van-circle
      layer-color="#ebedf0"
      v-model="currentRate"
      :rate="rate"
      :color="gradientColor"
    
      :fill="fill"
    >
     <slot name="default" >
       <div class="van-text">
          <div class="title">{{text}}</div>
          <div class="rate">0 / 222</div>
       </div>
     </slot>
    </van-circle>
    
  </div>
</template>
<style lang="scss" scoped>
  van-circle{
     }
.van-circle{
  font-size: 32px !important;
}
.van-text{
  width: 100%;
      position: absolute;
  top:50%;
  color: #323233;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    .title{
      font-size: 14px;
      margin-bottom: 4px;
    }
    .rate{
      font-size: 12px;
    }
}
</style>
<script>
import { Circle } from 'vant';
export default {
  props: {
      text:{
        type:String,
        
      },
      rate:{
        type:Number
      },
      fill:{
        type:String,
        default:"#fff"
      },
      gradientColor:{
        type:Object
      }
   
  },
  data() {
    return {
      idStr: `circle_progress_keyframes_${this.id}`,
      currentRate: 0,
      // gradientColor: {
      //   '0%': '#3fecff',
      //   '100%': '#6149f6'
      // }
    };
  },
  components:{
    "van-circle":Circle
  },
  beforeDestroy() {
   
  },
  mounted() {
    
  }
};
</script>