<template>
  <div class="body">
    <!-- <div>这是头部</div> -->
    <div>
      <standardtop style="z-index:999;"></standardtop>
    </div>
    <div class="tabber">
      <tab custom-bar-width="20px">
        <tab-item selected @on-item-click="selectTab('dati')">
          <div>答题模式</div>
        </tab-item>
        <tab-item @on-item-click="selectTab('beiti')">
          <div>背题模式</div>
        </tab-item>
      </tab>
    </div>
    <div class="main bscroll" ref="bscroll" style="overflow:hidden;position:absolute;top:4rem;   ">
      <div class="bscroll-container selects" ref="bscroll">
        <div>
          <selectdt :data="data" :choose="choose" :dati="dati" v-if="model=='dt'" @selects="selects"></selectdt>
           <selectxx :data="data" :choose="choose"  v-if="model=='xx'" @selects="selects"></selectxx>
        </div>
      </div>
      <div></div>
    </div>
    <answerBar :show="asbar" style="  overflow:hidden;" @selectitem="selectitem" :total="total"></answerBar>
    <loading v-if="!loading"></loading>
  </div>
</template>
<script>
import axios from "axios";
import {
  Alert,
  Badge,
  Tab,
  TabItem,
  Previewer,
  Group,
  Cell,
  PopupHeader,
  Popup,
  Toast
} from "vux";
import Select from "../../components/Select/Select";
import Selects from "../../components/Select/Selects";
import loading from "../../components/Loading/loading";
import Bottom from "../../components/Tabbar/ExamBottom";
import StandardTop from "../../components/Tabbar/StandardTop";
import ExamBottomBar from "../../components/Tabbar/ExamBottomBar";
import AnswerBar from "../../components/tools/answerbar";
import BScroll from "better-scroll";
import { mockdata } from "../../config/data";
import { mapState, mapActions, mapGetters } from "vuex";
import { getRequest } from "../../util/Global";
import {
  convert2Array,
  convert2Arrays,
  touchStart,
  touchMove,
  touchEnd
} from "../../util/util";
import AnswerNotice from "../../components/Notice/AnswerNotice";
import { Notify } from "vant";
export default {
  name: "RandomExam",
  data() {
    return {
      item: {},
      select: "",
      loading: false,
      show1: true,
      i: 1,
      aBScroll: null,
      asbar: false,
      data: {},
      dati: true,
      choose: null,
      current: [],
      state: [],
      autoincrement: 0,
      currents: null,
      total: 0,
      model:"dt"
    };
  },
  components: {
    selectdt: Select,
    selectxx:Selects,
    Badge,
    Bottom,
    Previewer,
    loading: loading,
    standardtop: StandardTop,
    Tab,
    TabItem,
    Group,
    Cell,
    exambottombar: ExamBottomBar,
    AnswerBar,
    PopupHeader,
    Popup,
    answernotice: AnswerNotice
  },
  created() {
    // this.init();
  },
  computed: {
    array() {
      return this.initcheckbox(this.item);
    }
  },
  mounted() {
    var that = this;
    let current = localStorage.getItem("sqp_current"), //答题的熟
      sqpstates = localStorage.getItem("sqp_states"); //答案的对应的index
    if (current) {
      that.currents = parseInt(current);
      this.$vux.toast.text("已回到上次答题位置", "top");
    } else {
      localStorage.setItem("sqp_current", 1);
      that.currents = 1;
    }
    that.update(that.currents);
    this.$store.state.AnswerNow = that.currents;
    that.init();
    that.$nextTick(() => {
      document
        .getElementsByClassName("selects")[0]
        .addEventListener("touchstart", touchStart.bind(that));
      document
        .getElementsByClassName("selects")[0]
        .addEventListener("touchmove", touchMove.bind(that));
      document
        .getElementsByClassName("selects")[0]
        .addEventListener("touchend", touchEnd.bind(that));
      let bscrollDom = that.$refs.bscroll;
      that.aBScroll = new BScroll(bscrollDom, {
        click: true,
        mouseWheel: true //开启鼠标滚轮
      });
    });
  },
  created() {
    
  },
  destroyed() {
     document
        .getElementsByClassName("selects")[0]
        .removeEventListener("touchstart", touchStart.bind(this));
      document
        .getElementsByClassName("selects")[0]
        .removeEventListener("touchmove", touchMove.bind(this));
      document
        .getElementsByClassName("selects")[0]
        .removeEventListener("touchend", touchEnd.bind(this));
  },
  watch: {
    currents: function(old, newValue) {
      this.$store.state.AnswerNow = this.currents;
  
      localStorage.setItem("sqp_current", this.currents);
    }
  },
  //答案结果集
  methods: {
    init() {
       let result = localStorage.getItem("sq_choose");
       let right = 0;
       let error = 0;
       for(let i of convert2Arrays(result)){
         if(i.choose == i.index){
            right++;
         }else{
            error++;
         }
       } 
       //console.log(right)
      this.$store.state.AnswerRight = right;
      this.$store.state.AnswerError = error;
      this.$store.state.AnswerResult = convert2Arrays(result)
    },
    selectTab(model) {
      this.aBScroll.refresh();
      if (model == "dati") {
        this.model = "dt";
      } else {
        this.model = "xx";
      }
    },
    selectitem(id) {
      var that = this;
      that.currents = id;
      this.update(id);
    },
    selects(index, answer, id) {
      var that = this;
      //自增
      that.autoincrement++;
      let error = localStorage.getItem("sq_choose");
      if (!error) {
        localStorage.setItem("sq_choose", JSON.stringify(new Array()));
      }
      let arr = convert2Arrays(error);
      if (this.choose != null) {
        return;
      }
      if (answer instanceof Array) {
      } else {
        let json = {
          current: that.currents,
          choose: answer
        };
        if (arr == null) {
          arr = [];
        }
        try {
          arr.push({
            current: that.currents,
            index: index,
            choose: answer
          });
        } catch (error) {
          //console.log(error);
        }
        localStorage.setItem("sq_choose", JSON.stringify(arr));
       
        this.choose = index;
        if (index !== answer) {
           this.$store.state.AnswerError++;
           this.dati=false

        } else {
           this.$store.state.AnswerRight++;
          // localStorage.setItem("sqp_current",  this.currents);
            this.currents = this.currents + 1;
      localStorage.setItem("sqp_current", that.currents);
      this.$store.dispatch("RangeUp");
      this.update(that.currents);
        }
        //  this.currents =  this.currents+1
      
      }
      console.log(this.dati)
     
    
      
    },
    show(index) {
      this.$refs.previewer.show(index);
    },
    update(id) {
      var that = this;
      this.loading = false;
      getRequest
        .request({
          url: "/getMockData",
          methods: "GET",
          data: {
            id: id
          }
        })
        .then(res => {
          //console.log(res);
          this.loading = true;
          let error = localStorage.getItem("sq_choose");
          let arr = convert2Arrays(error) || [];
          for (let items of arr) {
            if (items.current === that.currents) {
              //console.log("我有了", "");
              that.choose = items.choose;
              that.dati=false
              break;
            }
            this.dati=true
            that.choose = null;
          }
          //console.log(error);
          if (convert2Arrays(error) == null) {
            //console.log("???????");
            that.choose = null;
          }
          //console.log("choose", that.choose);
          that.data = res.articles[0];
          that.total = res.total;
        });
    },
    initcheckbox(json) {
      let option = [];
      if (json["Type"] === "1") {
        option = [
          {
            label: "对",
            value: "1",
            index: "A"
          },
          {
            label: "错",
            value: "2",
            index: "B"
          }
        ];
      } else {
        option = [
          {
            label: `${json.a}`,
            value: "1",
            index: "A"
          },
          {
            label: `${json.b}`,
            value: "2",
            index: "B"
          },
          {
            label: `${json.c}`,
            value: "3",
            index: "C"
          },
          {
            label: `${json.d}`,
            value: "4",
            index: "D"
          }
        ];
      }
      return option;
    }
  }
};
</script>
<style lang="scss" scoped>
body,
html {
  color: #fff !important;
}
.body {
  font-size: 16px;
  .bscroll {
    -webkit-backface-visibility: hidden;
  }
  .content {
    -webkit-overflow-scrolling: touch;
    /* ios5+ */
    height: 100%;
    background: #fff;
    padding: 12px 8px;
    .tab {
      min-width: 60px;
      float: left;
      margin-right: 10px;
      background: #1dd1aa;
      border-radius: 5px;
      text-align: center;
      color: white;
    }
    .title {
      line-height: 25px;
    }
    .img {
      width: 100%;
      height: 10rem;
    }
    .item {
      .itemcontent {
        display: flex;
        div:first-child {
          width: 30px;
          height: 30px;
          line-height: 30px;
          border-radius: 100%;
          text-align: center;
          background: white;
          margin: 10px 10px;
          box-shadow: 0 0 5px #57535324;
          font-weight: bold;
        }
        .imgtf {
          width: 30px;
          height: 30px;
          line-height: 30px;
          border-radius: 100%;
          text-align: center;
          background: white;
          font-weight: bold;
        }
        div:last-child {
          height: 30px;
          line-height: 30px;
          margin: 10px 10px;
        }
      }
    }
    .answer {
      padding: 10px;
      margin: 10px 0;
      width: 100%;
      background: #f7f9fa;
      :last-child {
        float: right;
        color: #a7a7a7;
      }
    }
  }
  .jiexi {
    padding: 12px 8px;
    margin: 10px 0;
    background: #fff;
    b:first-child {
      color: #1dd1aa;
    }
    span:last-child {
      float: right;
    }
    div:first-child {
      margin-bottom: 16px;
    }
    div:last-child {
      text-indent: 16px;
      width: 100%;
    }
  }
}
</style>
