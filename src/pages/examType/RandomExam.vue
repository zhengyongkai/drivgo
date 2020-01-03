<template>
  <div class="body" >
    <!-- <div>这是头部</div> -->
    <div >
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
    <div class="main bscroll" ref="bscroll"  style="overflow:hidden;position:absolute;top:4rem;   ">
    
      <div class="bscroll-container" ref="bscroll" >
        <div>
        <div class="content">
        <div class="tab">判断</div>
        <div v-html="data.title" class="title"></div>
        <div class="choice">
          <!-- <img class="img" :src="data.img[0]['src']" @click="show(0)" />
          <previewer :list="data.img" ref="previewer"></previewer> -->
          <div class="items">
            <div v-for="(o, index) in data.choice" class="item" :key="index">
              <div class="itemcontent" @click="selects(index)">
                <div v-if="(choose==null||choose!=index)&&(index!=data.select||choose==null)">{{o}}</div>
                <div v-if="index==data.select&&choose!=null"><img src="../../image/correct.png" class="imgtf" /></div>
                <div v-if="index!=data.select&&choose==index"><img src="../../image/wrong.png" class="imgtf" /></div>
                <div>{{data.choices[index]}}</div>
              </div>
            </div>
          </div>
          <div class="answer" :hidden="dati">
            <span>答案：C</span>
            <span>报错</span>
          </div>
        </div>
      </div>
      <div class="jiexi" :hidden="dati">
        <div>
          <span>
            <b>|</b>
            <b>官方解析</b>
          </span>
          <span>考考朋友</span>
        </div>
        <div>{{data.answer}}</div>
      </div>
      </div>
    </div>
    <div>
      </div>

    
    </div>
      <answerBar :show='asbar' style="  overflow:hidden;" ></answerBar>
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
  Popup
} from "vux";
import Select from "../../components/Select/Select";
import loading from "../../components/Loading/loading";
import Bottom from "../../components/Tabbar/ExamBottom";
import StandardTop from "../../components/Tabbar/StandardTop";
import ExamBottomBar from "../../components/Tabbar/ExamBottomBar";
import AnswerBar from "../../components/tools/answerbar";
import BScroll from "better-scroll";
import { mockdata } from "../../config/data";
import {mapState,mapActions,mapGetters} from 'vuex';

export default {
  name: "RandomExam",
  data() {
    return {
      item: {},
      select: "",
      loadding: false,
      show1: true,
      i: 1,
      aBScroll: null,
      asbar: false,
      data: {},
      dati: true,
      choose: null
    };
  },
  components: {
    Selects: Select,
    Badge,
    Bottom,
    Previewer,
    loadings: loading,
    standardtop: StandardTop,
    Tab,
    TabItem,
    Group,
    Cell,
    exambottombar: ExamBottomBar,
    AnswerBar,
    PopupHeader,
    Popup
  },
  created() {
   // this.init();
  
  },

  computed: {
    array() {
      console.log(this.initcheckbox(this.item));
      return this.initcheckbox(this.item);
    }
  },
  mounted() {
    var that = this
    console.log("ss")
     this.update().then((res)=>{
      //  console.log(res[0]
      console.log(res)
          that.data = res[0]
          console.log(this.data[0])
    
     });
    this.$nextTick(() => {
      let bscrollDom = this.$refs.bscroll;

      this.aBScroll = new BScroll(bscrollDom, {
        click: true,
        mouseWheel: true //开启鼠标滚轮
      });
    });
  },
  watch: {},
  methods: {
    selectTab(model) {
      this.aBScroll.refresh();
      if (model == "dati") {
        this.dati = true;
      } else {
        this.dati = false;
      }
    },
    selects(index) {
      var that = this 
      if (this.choose != null) {
        return;
      }
      this.choose = index;
      this.$store.dispatch("RangeUp");
      this.update().then((res)=>{
      //  console.log(res[0]
      console.log(res)
         that.choose = null
          that.data = res[0]
          console.log(this.data[0])
    
     });
      console.log(this.$store.state.AnswerNow)

    },
    show(index) {
      this.$refs.previewer.show(index);
    },
    // init() {
    //   this.update(this.i).then(res => {
    //     this.item = res;
    //   });
    // },
    // clickHandle({ type }) {
    //   switch (type) {
    //     case "pre":
    //       setTimeout(() => {
    //         this.loadding = true;
    //       }, 500);
    //       break;
    //     case "next":
    //       this.update(this.i++).then(res => {
    //         this.item = res;
    //       });
    //       break;
    //     case "add":
    //       alert("add");
    //       break;
    //   }
    // },

    update() {
      // return new Promise((resolve, reject) => {
      //   let params = {
      //     r: Math.random(),
      //     index: problemId
      //   };
      //   let str = "";
      //   for (var key in params) {
      //     str = str + key + "=" + params[key] + "&";
      //   }
      //   str = str.substr(0, str.length - 1);
      //   axios
      //     .get("/api/get_question?" + str)
      //     .then(res => {
      //       console.log(res.data);
      //       return resolve(res.data);
      //     })
      //     .catch(err => {});
      // });
      var that = this
      return new Promise((resolve,reject)=>{
        axios.get("/getMockData").then((res)=>{
          let datas  = {};
          console.log(res.data)
          datas=  res.data.articles;
        
          resolve(res.data.articles)

        })
      })
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
.body {
  font-size: 16px;
  .bscroll {
    -webkit-backface-visibility: hidden;
  }
  .content {
    -webkit-overflow-scrolling: touch; /* ios5+ */
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
