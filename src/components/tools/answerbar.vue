<template>
  <transition>
    <div>
      <a href="javascript:void(0);" class="body" v-if="isShow" @click="popup"></a>
      <div ref="msk" :class="isShow==false?'msk':'msk popup round'">
        <div @click="popup" class="top">
          <div class="item">
            <img src="../../image/feiqi/right.png" />
            <div style="color:#1DD1AA">0</div>
          </div>
          <div class="item">
            <img src="../../image/feiqi/wrong.png" />
            <div style="color:red">1</div>
          </div>
          <div class="item">
            <img src="../../image/feiqi/num.png" />
            <div>0 / 4937</div>
          </div>
          <div style="margin-left: auto;float:right;">清空记录</div>
        </div>
        <div
          class="bscroll main"
          ref="bscroll"
          style="   overflow: hidden; height:100%; top:2rem;   "
        >
          <div class="content bscroll-container" style="overflow-y: scroll;" ref="bscroll">
            <div
              :class="n==1?'round error':(n <= 2&&n!=1 ? 'round right' : (n==3)?'round selectNow':'round')"
              v-for=" n in 100"
              @click="change(n)"
            >{{n}}</div>
          </div>
          <!-- <div class="bscroll-container">dasddddddddddddddddddddddddddddddddddddddddddddd</div> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ExamBottomBar from "../../components/Tabbar/ExamBottomBar";
import BScroll from "better-scroll";
import { Popup, Scroller } from "vux";
export default {
  name: "answerbar",
  data() {
    return {
      isShow: false
    };
  },
  props: {},

  components: {
    Popup,
    exambottombar: ExamBottomBar,
    Scroller
  },
  mounted() {
    this.$nextTick(() => {
      let bscrollDom = this.$refs.bscroll;

      this.aBScroll = new BScroll(bscrollDom, {
        click: true,
        mouseWheel: true //开启鼠标滚轮
      });
    });
  },
  methods: {
    change(e) {
      console.log(e);
    },
    popup() {
      this.isShow = !this.isShow;

      if (!this.isShow) {
        document.documentElement.style.overflow = "";
      } else {
        document.documentElement.style.overflow = "hidden";
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
  background: white;
  width: 100%;
  left: 0;
  right: 0;
  transition: all 0.8s;
}
.round{
  border-top-left-radius:20px;
  border-top-right-radius:20px;

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

.overflow {
  overflow: hidden;
}

.top {
  position: fixed;
  display: flex;
  padding: 0.5rem 0.5rem;
  height: 2rem;
  font-size: 12px;
  align-items: center;
  width: 100%;
  border-bottom-color: #11dba9;
}

.item {
  width: 3.6rem;
  display: flex;

  align-items: center;

  :first-child {
    margin-right: 4px;
  }
}

img {
  width: 18px;
  height: 18px;
}

.content {
  padding: 0.5rem 0.5rem 2rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);

  .round {
    border: 1px solid #e5e5e5;

    align-items: center;
    line-height: 2.3rem;
    font-size: 12px;
    margin: 0 0.09rem 10px 0.09rem;
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 50%;
    text-align: center;
    justify-content: space-around;
  }
}

.error {
  border: 1px solid #ef98a8 !important;
  background: #fedcdb !important;
  color: #ef98a8;
}

.right {
  border: 1px solid #b6e2af !important;
  background: #d9f8d9 !important;
  color: #92e595;
}

.selectNow {
  border: 1px solid #11dba9 !important;
  background: white;
  color: #11dba9;
}

.bscroll {
}
</style>
