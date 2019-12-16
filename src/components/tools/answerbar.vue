<template>
  <div class="body">

    <div>
      <div class="mask">
        <div class="top">
          <div class="item"> <img src="../../image/feiqi/right.png">
            <div style="color:#1DD1AA">0</div>
          </div>
          <div class="item"> <img src="../../image/feiqi/wrong.png">
            <div style="color:red">1</div>
          </div>
          <div class="item"><img src="../../image/feiqi/num.png">
            <div>0 / 4937</div>
          </div>
          <div style="margin-left: auto;">清空记录</div>
        </div>
        <div class="content" >
            <div :class="n==1?'round error':(n <= 2&&n!=1 ? 'round right' : (n==3)?'round selectNow':'round')" v-for=" n in 50" >
                {{n}}
            </div>
           
        </div>
      </div>
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
    data() {
      return {
        isShow: true
      }
    },
    props: {

    },
    components: {
      Popup,
      exambottombar: ExamBottomBar,
    },
    methods: {

    }
  };

</script>

<style lang="scss" scoped>
  .body {

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 1;
    z-index: 500;
    transition: opacity 400ms;

  }

  .mask {
    position: fixed;

    left: 0;
    width: 100%;
    bottom: 0;
    height: 80%;
    background: white;
    opacity: 1;
    z-index: 500;
    transition: opacity 400ms;
  }

  .top {
    display: flex;
    padding: 0.5rem 0.5rem;
    height: 2rem;
    font-size: 12px;
    align-items: center;

    // background:red;
    .item {
      width: 3.6rem;
      display: flex;
     



      align-items: center;

      :first-child {
        margin-right: 4px;
      }

    }

    img {
      width: 24px;
      height: 24px;

    }

  }

  .content {
  padding: 0.5rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  .round{
    border: 1px solid #E5E5E5;
    align-items:center;
    line-height: 2.3rem;
    font-size: 16px;
     margin:0 0.09rem 10px 0.09rem;
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 50%;
    text-align: center;
    justify-content: space-around;

  }
  }

  .error{
    border:1px solid #EF98A8 !important;
    background: #FEDCDB !important;;
    color:#EF98A8;
  }
  .right{
     border:1px solid #B6E2AF !important;
    background:  #D9F8D9 !important;
    color:#92E595;
  }
  .selectNow{
     border: 1px solid   #11DBA9 !important;
    background:  white;
    color:  #11DBA9;
  }

</style>
