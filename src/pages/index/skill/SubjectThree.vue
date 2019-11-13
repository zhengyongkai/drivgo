<template>
  <div class="bodys">
      <div class="tops">
          <div >
              <titlebar :title="'模拟语音'" :tips="'一看就懂高校训练'"></titlebar>
          </div>
          <div class="tabs">
              <div class="item">
                  <div class="icon"><img src="../../../image/xueche/sun.png"/></div>
                  <div class="text">灯光模拟</div>
                
              </div>
             <div class="item">
                  <div class="icon"><img src="../../../image/xueche/voice.png"/></div>
                  <div class="text">语音模拟</div>
                
              </div>
          </div>
      </div>
      <div class="video">
          
      <div>
        <titlebar :title="'考试视频'" :tips="'科目三七项必考'"></titlebar>
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
export default {
  name: "SubjectThree",
  data(){
    return {
        daocheimg:require('../../../image/xueche/daoche.jpg'),
         podaoimg:require('../../../image/xueche/podao.jpg'),
         cefangimg:require('../../../image/xueche/cefang.jpg'),
         zhijiaoimg:require('../../../image/xueche/zhijiao.jpg'),
         quxianimg:require('../../../image/xueche/quxian.jpg'),
    }
  },
  components:{
    titlebar:Title,
    "videotool":VideoTool
  }
};
</script>

<style lang="scss" scoped>
.bodys{
  width: 100%;
  font-size: 16px;
  margin: 0;
  padding: 0;
  margin-bottom: 80px;
}

.tops{
    padding: 12px 8px;
    background: #fff;
}

.tabs{
  padding:16px 8px;
  display: flex;
  justify-content : space-around;
  width: 100%;

  .item{
    width: 40%;
    padding: 12px;
    background:red;
    text-align: center;
    border-radius: 8px;
    


    .icon{
      width: 24px;
      height:24px;
      float: left;
      margin-right: 20px;
    }
    img{
      background: #fff;
      border-radius: 8px;
      padding: 2px;
    }

    .text{
      color: white;
    }


  }

    .item:first-child{
     
      background:#2BC517;
    }
    .item:last-child{

      background:  #FF6060;
    }
    
    
  }

  .video {
    width: 100%;
    margin-top: 16px;
    background: #fff;
    padding: 12px 8px;
    background: #fff;
     .videoimg {
    display: flex;
    width: 50%;
   

    .img {
      width: 100%;

    }
  }

 
  }
</style>
