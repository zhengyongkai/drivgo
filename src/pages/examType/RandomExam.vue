<template>
  <div class="body">
    <!-- <div>这是头部</div> -->
    <div>
        <standardtop :bar=true></standardtop>
    </div>
    <div class="content">
        <div class="tab">判断</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {  Alert, Badge } from "vux";
import Select from "../../components/Select/Select";
import loading from '../../components/Loading/loading'
import Bottom from '../../components/Tabbar/ExamBottom'
import StandardTop from '../../components/Tabbar/StandardTop'
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
    loadings:loading,
    "standardtop":StandardTop
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
.body,
html {
   
    font-size: 16px;

    .content{
      padding: 12px 8px;

      .tab{
        width: 60px;
        border: 1px solid red;
        text-align: center;
      }
    }
}

</style>
