<template>
  <div class="body">
       <div>
          <standardtop></standardtop>
       </div>
       <div class="main bscroll dr-content" ref="bscroll"  >
         <div class="dr-block-top">
          <div class="dr-top-item">
              <div class="top-item-text">
                  今日错题 >
              </div>
              <div class="top-item-num">
                 0
              </div>
          </div>
          <div class="dr-top-item">
              <div class="top-item-text">
                  全部错题 >
              </div>
              <div class="top-item-num">
                  10
              </div>
          </div>
        </div>
        <div class="dr-block-content">
             <div class="dr-content-top">
                <div>易错提醒</div>
                <div><i class="iconfront icon-trash"></i></div>
             </div>
       </div>
       </div>
       
  </div>
</template>

<script>
import { Tab, TabItem } from "vux";
import Cell from '@/components/Cell/cell';
import StandardTop from "@/components/Tabbar/StandardTop";
export default {
  name: "SubjectTwo",
  data() {
    return {};
  },
  components: {
    Tab,
    TabItem,
    standardtop: StandardTop,
    cell:Cell
 
  }
};
</script>

<style lang="scss" scoped>
.body {
  font-size: 16px;
  width: 100%;
  margin: 0;
  padding: 0;
}
.dr-content {
  background: #fff;
  overflow: hidden;
  position: absolute;
  top: 2rem;
  padding: 12px 1rem;
  .dr-block-top {
  display: flex;
justify-content : space-between;

  .dr-top-item {
    align-items: center;
    border: 1px solid #f8f8f8;
    -webkit-box-shadow: #f8f8f8 0px 0px 10px;
    -moz-box-shadow: #f8f8f8 0px 0px 10px;
    border-radius: 5px;
    height: 4rem;
    width: 48%;
    .top-item-text {
      text-align: center;
      margin-top: 0.8rem;
      font-size: 10px;
    }
    .top-item-num {
      font-family: pingFangSC !important;
      font-weight:bold;
      font-size: 32px;
      text-align: center;
      margin-top: 0.1rem;
    }
  }
}

  .dr-block-content{
    margin-top:1rem;
    height:2rem;
    
    line-height:2rem;
    
    .dr-content-top{
      display:flex;
      :first-child{
        font-size:18px;
        font-weight:bold;
      }
      :last-child{
         margin-left: auto;
      }
      
    }
  }
  
}


</style>
