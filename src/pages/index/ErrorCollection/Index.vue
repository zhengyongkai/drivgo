<template>
  <div class="body">
    <div>
      <standardtop></standardtop>
    </div>
    <div class="main bscroll dr-content" ref="bscroll">
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
          <div>错题详情</div>
          <div><i class="iconfront icon-trash"></i></div>
        </div>
      </div>
      <div class="dr-content-title">
        <div class="dr-title-title">
          易错题
        </div>
        <div class="dr-title-desc">
          高分易错题,提分比做
        </div>
        <div class="dr-title-link">
          马上去做 >
        </div>
      </div>
      <div class="dr-content-item">
        <div class="dr-item"> 
            <div class="dr-item-order">
                1
            </div>
            <div class="dr-item-title">
                道路交通安全法律、法规和规章
            </div>
            <div class="dr-item-num">
                <span>0</span>题 >
            </div>
        </div>
        <div class="dr-item"> 
            <div class="dr-item-order">
                2
            </div>
            <div class="dr-item-title">
                交通信号
            </div>
            <div class="dr-item-num">
                <span>0</span>题 >
            </div>
        </div>
        <div class="dr-item"> 
            <div class="dr-item-order">
               3
            </div>
            <div class="dr-item-title">
                安全行车、文明驾驶基础知识
            </div>
            <div class="dr-item-num">
                <span>0</span>题 >
            </div>
        </div>
        <div class="dr-item"> 
            <div class="dr-item-order">
                4
            </div>
            <div class="dr-item-title">
                机动车驾驶操作相关基础知识
            </div>
            <div class="dr-item-num">
                <span>0</span>题 >
            </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {
    Tab,
    TabItem
  } from "vux";
  import Cell from "@/components/Cell/cell";
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
      cell: Cell
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
      justify-content: space-between;

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
          font-weight: bold;
          font-size: 32px;
          text-align: center;
          margin-top: 0.1rem;
        }
      }
    }

    .dr-block-content {
      margin-top: 1rem;
      height: 2rem;

      line-height: 2rem;

      .dr-content-top {
        display: flex;

        :first-child {
          font-size: 18px;
          font-weight: bold;
        }

        :last-child {
          margin-left: auto;
        }
      }
    }

    .dr-content-title {
    
      display: flex;
      height: 2rem;
      line-height: 2rem;

      .dr-title-title {
        flex: 1;
        width: 60px;
        color: #f35626;
        font-weight: bold;
        font-style: oblique;
        background-image: -webkit-linear-gradient(5deg, #f7135d, #ffa900);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-animation: hue 60s infinite linear;
        margin-right: 8px;
        font-family: pingFangSC !important;
      }

      .dr-title-desc {
        flex: 4;
        font-size: 12px;
      }

      .dr-title-link {
        font-size: 14px;
        margin-left: auto;
      }
    }
    .dr-content-item{
      margin-top:0.8rem;
      .dr-item{
        padding-bottom:2.4rem;
        height:0.8rem;
        line-height:0.8rem;
        display:flex;
        .dr-item-order{
          height:0.8rem;
          line-height:0.8rem;
          background:#ff6f1b;
          width:0.8rem;
          text-align:center;
          border-radius:50%;
          color:#fff;
          font-size:12px;
          margin-right:12px;
          
        }
        .dr-item-title{
          font-size:13px;
          color:#000;
          flex:4;
        }
        .dr-item-num{
          font-size:13px;
        }
      }

    }
  }

</style>
