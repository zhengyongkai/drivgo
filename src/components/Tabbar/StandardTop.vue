<template>
  <div class="body">
    <div class="title">
        答题酷  
    </div>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
export default {
  name: "StandardTop",
  data(){
      return {

      }
  },
  components:{
      Tab,
      TabItem
  }
};
</script>

<style lang="scss" scoped>
    .body{
      height: 2rem;
      text-align: center;
      line-height: 2rem;
      background: #1BD0AD;
     

      .title{
        font-size: 16px;
        color: white;

      }
    }
</style>
