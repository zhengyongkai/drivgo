<template>
  <div class="body">
    <div class="content">
      <div class="items">
        <div class="item type">
          <img src="../../image/6.png" />
          <div class="text">随机练习</div>
        </div>
        <div class="item item-round">
          <roundprogress :text="'顺序答题'" :rate="70" :gradientColor="sxdt"/>
         
        </div>
        <div class="item type">
          <img src="../../image/8.png" />
          <div class="text">错题·收藏</div>
        </div>
      </div>

      <div class="items">
        <div class="item type">
          <img src="../../image/5.png" />
          <div class="text"><router-link to="/exam" >专项练习</router-link></div>
        </div>
        <div class="item item-round">
          <roundprogress
           :text="'模拟考试'"
           :rate="20"
           :gradientColor="mndt"
          />
        </div>
        <div class="item type">
          <img src="../../image/7.png" />
          <div class="text">我的收藏</div>
        </div>
         
      </div>
      <div class="text textcenter tips">神器在手，驾照我有</div>
     
    </div>
    <div>
         <group>
             <cell title="我的答题统计" is-link>
                <img slot="icon" width="20" style="display:block;margin:0  15px 0 8px;" cell-font-size='10px' src="../../image/pratice.png">
            </cell>
             <cell title="新手教程" is-link>
                <img slot="icon" width="20" style="display:block;margin:0  15px 0 8px;" cell-font-size='10px' src="../../image/newsoul.png">
            </cell>
         </group>
    </div>
    <Loading :hidden="loading"></Loading>
  </div>
</template><script>
import { Tab, TabItem, Group, Cell } from "vux";
import { Badge } from "vux";
import roundprogress from "@/components/tools/roundprogress";
import Loading from "@/components/Loading/loading";
import StandardTop from "@/components/Tabbar/StandardTop";

export default {
  name: "SubjectOne",
  data() {
    return {
      isDurationModel: true, // 是否打开持续缓动模式
      isShow: true,
      width: 100,
      radius: 2,
      progress: 70,
      duration: 1000,
      delay: 20,
      text: "顺序练习",
      
      backgroundColor: "white",
      timeFunction: "cubic-bezier(0.99, 0.01, 0.22, 0.94)",
      intervalTimer: null, // 持续模式，循环计时器
      currentTime: 0, // 当前时间
      durationTime: 60, // 持续模式总时长,
      loading: true,
      sxdt:{
         '0%': '#f6d365',
        '100%': '#fda085'
      },
      mndt:{
        '0%': '#3fecff',
        '100%': '#6149f6'
      }
    };
  },
  mounted(){

  },
  components: {
    Tab,
    TabItem,
    Badge,
    standardtop: StandardTop,
    roundprogress: roundprogress,
    Loading: Loading,
    Group,
    Cell
  }
};
</script><style lang="scss"scoped>
.body {
  font-size: 16px;

  .content {
    background: #fff;
  }
  .items {
    padding: 0.8rem 1rem;

    display: flex;
    flex-wrap: nowrap;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .item-round {
      background: #fff;
      flex: 30%;
      width: 2rem;
     
    }
    .type {
      
      padding: 10% 0;

      
    }
    .item {
      flex: 20%;
      text-align: center;

    

      img {
        width: 30px;
        height: 30px;
      }

      .text {
      }
    }
  }

  .tips {
    padding: 0.2rem 0;
    color: #b599b5;
    font-size: 12px;
  }

  .vux-label {
    font-size: 2px;
  }
}

.textcenter {
  text-align: center;
}
</style>
