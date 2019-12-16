<template>

  <transition :name="`popup-animate-bottom-enter`">
    <div>
      <a href="#" class="body" v-if="isShow" @click="popup"></a>
      <div ref="msk" :class="isShow==false?'msk':'msk popup'">
        <div @click="popup" style="height:2rem" class="top">
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
        <div>
            <div class="content"  style="overflow-y: scroll;">
            <div :class="n==1?'round error':(n <= 2&&n!=1 ? 'round right' : (n==3)?'round selectNow':'round')" v-for=" n in 50" >
                {{n}}
            </div>
           
        </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
  import ExamBottomBar from "../../components/Tabbar/ExamBottomBar";
  import {
    Popup
  } from 'vux'
  export default {
    name: "answerbar",
    data() {
      return {
        isShow: false
      }
    },
    props: {

    },

    components: {
      Popup,
      exambottombar: ExamBottomBar,
    },
    methods: {
      popup() {
        this.isShow = !this.isShow

        if (!this.isShow) {
          console.log("ss")
          document.documentElement.style.overflow = "";
        } else {
          document.documentElement.style.overflow = "hidden"
        }
      }
    }

  };

</script>

<style lang="scss" scoped>
  .msk {
    z-index: 501;
    position: fixed;
    bottom: 0;
    height: 2rem;
    background: rgba(246, 246, 246, 1);
    width: 100%;
    left: 0;
    right: 0;
    transition: all 0.8s;
     
  }

  .body {
    display: block;
    z-index: 500;
    position: fixed;
    bottom: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    left: 0;
    right: 0;
    transition: all 0.8s;
  }

  .popup {
    height: 80%;
    bottom: 0;
    transition: all 0.8s;
     overflow: hidden;
  }

  .popup-animate-bottom-enter,
  .popup-animate-bottom-leave-active {
    transform: translate3d(0, 100%, 0);
  }

  .overflow {
    overflow: hidden;
  }
   .top {
    display: flex;
    padding: 0.5rem 0.5rem;
    height: 2rem;
    font-size: 12px;
    align-items: center;}
  
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
