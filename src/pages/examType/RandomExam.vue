<template>
  <div class="body">
    <!-- <div>这是头部</div> -->
    <div>
      <selects :currentInfo="item" :option="array" :select="select"></selects>
    </div>
    <div class="explain">
      <div>
        <b>标准答案：</b>
        {{array[item.ta].index}}
      </div>
      <div>
        <b>解析：</b>
        <span v-html="item.bestanswer"></span>
      </div>
    </div>
    <div>
        <bottom @click="clickHandle" class="bottom"></bottom>
    </div>
    <loadings v-if="loadding"></loadings>
  </div>
</template>

<script>
import axios from "axios";
import {  Alert, Badge } from "vux";
import Select from "../../components/Select/Select";
import loading from '../../components/Loading/loading'
import Bottom from '../../components/Tabbar/ExamBottom'
export default {
  name: "RandomExam",
  data() {
    return {
      item: {},
      select: "",
      loadding:false,
      i:1
    };
  },
  components: {
    Selects: Select,
    Badge,
    Bottom,
    loadings:loading
  },
  created() {
    this.init();
  },
  computed: {
    array() {
      console.log(this.initcheckbox(this.item));
      return this.initcheckbox(this.item);
    }
  },
  watch:{
    
  },
  methods: {
    init() {
      this.update(this.i).then(res => {
        this.item = res;
      });
    },
     clickHandle ({type}) {
        switch (type) {
          case 'pre': setTimeout(()=>{this.loadding=true},500); break;
          case 'next':
             this.update(this.i++).then(res => {
            this.item = res;
          });; break;
          case 'add': alert("add"); break;
        }
      },

    update(problemId) {
      return new Promise((resolve, reject) => {
        let params = {
          r: Math.random(),
          index: problemId
        };
        let str = "";
        for (var key in params) {
          str = str + key + "=" + params[key] + "&";
        }
        str = str.substr(0, str.length - 1);
        axios
          .get("/api/get_question?" + str)
          .then(res => {
            console.log(res.data);
            return resolve(res.data);
          })
          .catch(err => {});
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
  background: #fff ;
}

.explain {
  background: #fff;
  font-size: 18px;
  padding: 1rem 1rem;
  margin-top: 1rem;
  div {
    margin-bottom: 0.3rem;
  }
}
.bottom{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-top: 20px
}
</style>
