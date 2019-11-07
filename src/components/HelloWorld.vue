<template>
  <div >
      <swiper  height="100%" :show-dots="false" :show-desc-mask="false"  @on-index-change="change" >
      <swiper-item 
      v-for="(index,i) in data"
      class="" 
       :style='select_index==i?{position: "static"}:""'  
       aspect-ratio  
       :key="i" 
      >
       
         <selects :currentInfo="index"  :option="initcheckbox(index)" :select="select"></selects>
      </swiper-item>
     
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'vux'
import {data} from '../config/data'
import Select from "../components/Select/Selects";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgList : [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
],
data:
 data
,
 item: {},
      select: "",
      loadding:false,
      i:1,
      select_index:0
    }
  },
  components:{
    Swiper,
    SwiperItem,
    Selects:Select
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
  methods:{
    init() {
      
       
      
    },
    change(h){
     
      this.select_index=h
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item{
  width:100%;}
  .copyright {
  font-size: 12px;
  color: #ccc;
  text-align: center;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}



.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.vux-indicator.custom-bottom {
  bottom: 30px;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
.swiper-demo-img img {
  width: 100%;
}
.vux-swiper-item{

}
</style>
