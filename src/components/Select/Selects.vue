<template>
  <div class="body">
    <div class="content">
      <img src />
       <div class="top">
      <div class="type">
        <span v-if="currentInfo.Type==2">单选</span>
        <span v-else>判断</span>
      </div>
      <div class="title">{{currentInfo.question}}</div>
    </div>
    <img v-if="currentInfo.sinaimg" src="../../image/logo.png" class="image">
    <div class="answer">
      <div v-for="(o, index) in option" class="item"  :key="index">
      <div v-show="1==2">{{o.index}}</div>
      <img src="../../image/correct.png" alt="" >
       <img src="../../image/wrong.png" alt="" >
      <!-- <img src="../../image/wrong.png" alt="" > --> 
      <div>{{o.label}}</div>
    </div>
    </div>
    </div>
    <div class="explain">
      <div>
        <b>标准答案：</b>
        {{currentInfo[currentInfo.ta]}}
      </div>
      <div>
        <b>解析：</b>
        <span v-html="currentInfo.bestanswer"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    currentInfo: {
      type: Object,
      required: true
    },
    option: {
      type: Array,
      required: true
    },
    select: {
      type: String
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.body {
  font-size: 20px;
  
  color: #000;

}
.content{
  padding: 0 1rem ;
  
}
.top {
   display: flex;
     
  font-size: 18px;
  margin-bottom: 1rem;
  .type {
    font-size: 15px;
     height: 30px;
    width: 100px;
    border: 1px solid #d4e157;
    color:#d4e157;
    text-align: center;
    margin-right: 0.5rem;
    line-height: 25px;
    
  }
  .title{
    flex-grow:1;
    line-height: 26px;
  }
}
.image{
  width: 100%;
  height:10rem;
  padding: 0.5rem 0;
 
}

.answer{
  height: 100%;
  .item{
    display: flex;
    >:first-child{
      font-size: 20px;
      margin: 10px 0;
      height: 24px;
      width: 24px;
      text-align: center;
      border-radius: 100%;
      border: 1px solid gray;
      margin-right: 0.5rem;
    }
    >:last-child{
      font-size: 18px;
      margin: 10px 0;
   
      text-align: center;
     
   
      
    }
    img{
      font-size: 20px;
      margin: 10px 0;
      height: 24px;
      width: 24px;
      text-align: center;
      border-radius: 100%;
     
      margin-right: 0.5rem;
      
    }
  }
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
</style>
