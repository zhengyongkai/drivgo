<template>
  <div class="body">
    <div class="content">
      <div class="tab">判断</div>
      <div v-html="data.title" class="title"></div>
      <div class="choice">
        <!-- <img class="img" :src="data.img[0]['src']" @click="show(0)" />
        <previewer :list="data.img" ref="previewer"></previewer>-->
        <div class="items">
          <div v-for="(o, index) in data.choice" class="item" :key="index">
            <div class="itemcontent" @click="selects(index,data.select,data.id)">
              <div v-if="index!=data.select">{{o}}</div>

              <div v-if="index==data.select">
                <img src="../../image/correct.png" class="imgtf" />
              </div>
             
              <div>{{data.choices[index]}}</div>
            </div>
          </div>
        </div>
        <div class="answer" >
          <span>答案：{{data.choice[data.select]}}</span>
          <span>报错</span>
        </div>
      </div>
    </div>
    <div class="jiexi" >
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
</template>

<script>
export default {
  name: "Select",
  props: [
    'data',
    "choose",

    
  ],
  data() {
    return {};
  },
  watch:{
    data:function(index){
        if(index.select instanceof Array){
            console.log("不是多选")
            
        }else{
            console.log("是多选")
           
        }
    }
  },
  created() {},
  methods: {
    selects(index,select,id){
      console.log(index+" "+select+" "+id)
       this.$emit('selects', index,select,id);
    },

  },
 
};
</script>

<style lang="scss" scoped>
.body {
  font-size: 16px;
  
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
