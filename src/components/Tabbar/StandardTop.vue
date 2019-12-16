<template>
  <div class="body" >
    <div class="title" :hidden=bar>
        答题酷  
    </div>
   
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
export default {
  name: "StandardTop",
  props:{
    bar:{
      type: Boolean,
      default: false

    }
  },
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
    
     
      background: #1DD1AA;

      .title{
         z-index:999;
        font-size: 16px;
        color: white;

      }
      .bar{
        display: flex;
         align-items:center;/*垂直居中*/
        justify-content: center;/*水平居中*/
        height:2rem;
       
        div{
           color: black;
          height: 30px;
          line-height: 30px;
          width: 100px;
          text-align: center;
          

        }
        :first-child{
            background-color: white;
            border-top-left-radius: 5px;
             border-bottom-left-radius: 5px;
          }

          :last-child{
             background-color: lightgray;
             border-top-right-radius: 5px;
             border-bottom-right-radius: 5px;
          }
      }
    }
</style>
