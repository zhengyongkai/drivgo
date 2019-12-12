<template>
  <div class="body" @click="showModal($event)">
      
      
          <div ref="msk">
                sdasddasdasdasd
            </div>
      
    
  </div>
</template>

<script>
 import ExamBottomBar from "../../components/Tabbar/ExamBottomBar";
  import {
    Popup
  } from 'vux'
  export default {
    name: "VideoImg",
    data(){
        return {
            isShow:true
        }
    },
    props: {

    },
    components: {
      Popup,
       exambottombar: ExamBottomBar,
    },
    methods(){
        
    }
  };

</script>

<style lang="scss" scoped>
    .body{
        display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            z-index: 500;
            transition: opacity 400ms;
        
    }
</style>
