<template>
<div >
    <div :hidden="hidden" class="vue-notice">
        <div class="vue-notice-content" >{{text}}</div>
    </div>
</div>
</template>
<script>
export default {
name: "AnswerNotice",
  data() {
    return {
        hidden:false
    };
  },
  props:["text","duration"],
  created() {},
  methods: {},
  mounted(){
     
      setTimeout(
          ()=>{this.hidden=true},duration
      )
  }
}
</script>
<style lang="scss" scoped>
.vue-notice{
    transition-duration: 0.2s;
    height: 30px;
    max-height: 100%;
    overflow-y: auto;
    background-color: lightgreen;
    -webkit-transition: -webkit-transform .3s ease-out;
    transition: -webkit-transform .3s ease-out;
    transition: transform .3s ease-out;
    transition: transform .3s ease-out, -webkit-transform .3s ease-out;
    transition: transform .3s ease-out,-webkit-transform .3s ease-out;
    -webkit-overflow-scrolling: touch;
}
.vue-notice-content{
    box-sizing: border-box;
    
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    white-space: pre-wrap;
    text-align: center;
    word-wrap: break-word;
}
</style>
