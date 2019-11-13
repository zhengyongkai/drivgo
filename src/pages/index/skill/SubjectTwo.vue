<template>
  <div class="body">
    <div class="top">
      <div>
        <titlebar :title="'考试须知'" :tips="'一看就懂高校训练'"></titlebar>
      </div>
      <div>
        <group>
          <cell title="倒车入库" cell-font-size='10px' is-link><i slot="icon">
              <div class="em">1</div>
            </i></cell>
          <cell title="坡道定点停车和起步" is-link><i slot="icon">
              <div class="em">2</div>
            </i></cell>
          <cell title="侧方停车" is-link><i slot="icon">
              <div class="em">3</div>
            </i></cell>
          <cell title="曲线行驶" is-link><i slot="icon">
              <div class="em">4</div>
            </i></cell>
          <cell title="直角转弯" is-link><i slot="icon">
              <div class="em">5</div>
            </i></cell>
        </group>
      </div>
    </div>
    <div class="video">
      <div>
        <titlebar :title="'考试视频'" :tips="'科目二五项必考'"></titlebar>
      </div>
      <div class="videoimg">
        <videotool class="img" :img=daocheimg :name="'倒车入库'"></videotool>
        <videotool class="img" :img=podaoimg :name="'坡道定点停车和起步'"></videotool>
      </div>
       <div class="videoimg">
       <videotool class="img" :img=cefangimg :name="'侧方停车'"></videotool>
         <videotool class="img" :img=zhijiaoimg :name="'直角转弯'"></videotool>
      </div>
       <div class="videoimg">
         <videotool class="img" :img=quxianimg :name="'曲线行驶'"></videotool>
      </div>
      
         
    </div>
  </div>
</template>
<script>
  import Title from "@/components/Tabbar/Title";
  import VideoTool from '@/components/tools/VideoImg';

  import {
    Group,
    Cell
  } from 'vux';

  export default {

    name: "SubjectTwo",
    data(){
      return{
         daocheimg:require('../../../image/xueche/daoche.jpg'),
         podaoimg:require('../../../image/xueche/podao.jpg'),
         cefangimg:require('../../../image/xueche/cefang.jpg'),
         zhijiaoimg:require('../../../image/xueche/zhijiao.jpg'),
         quxianimg:require('../../../image/xueche/quxian.jpg'),
         

      }
    },
    components: {
      titlebar: Title,
      videotool: VideoTool,
      Group,
      Cell
    }
  }

  ;

</script>
<style lang="scss" scoped>
  .body {
    width: 100%;
    font-size: 16px;
    margin: 0;
    padding: 0;
    margin-bottom: 80px;
  }

  .top {
    padding: 12px 8px;
    background: #fff;
  }

  .em {
    color: #fff;
    width: 22px;
    height: 22px;
    border-radius: 20%;
    background: #00ACFF;

    margin-right: 15px;
    text-align: center;
    vertical-align: middle;
  }

  .video {
    margin-top: 16px;
    background: #fff;
    padding: 12px 8px;
    

  }

  .videoimg {
    display: flex;
    width: 50%;
   

    .img {
      width: 100%;

    }
  }

</style>
