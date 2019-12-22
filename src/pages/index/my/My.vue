<template>
  <div class="body" style="overflow:hidden;position:absolute;top:2rem;   ">
    <div class="top" >
      <div class="img">
        <img src="../../../image/my.jpg" />
      </div>
      <div>
        <div class="name"><b>郑永楷</b></div>
        <div class="text">
          加油吧少年,
          勤学苦练拿证快
        </div>
      </div>
    </div>
    <div>
          <group>
             <cell title="我的题库" is-link>
                <img slot="icon" width="20" style="display:block;margin:0  15px 0 8px;" cell-font-size='10px' src="../../../image/pratice.png">
            </cell>
             <cell title="我的驾校" is-link>
                <img slot="icon" width="20" style="display:block;margin:0  15px 0 8px;" cell-font-size='10px' src="../../../image/newsoul.png">
            </cell>
             <cell title="联系我们" is-link>
                <img slot="icon" width="20" style="display:block;margin:0  15px 0 8px;" cell-font-size='10px' src="../../../image/newsoul.png">
            </cell>
             <cell title="设置" is-link>
                <img slot="icon" width="20" style="display:block;margin:0  15px 0 8px;" cell-font-size='10px' src="../../../image/newsoul.png">
            </cell>
         </group>
    </div>
  </div>
</template><script>
import { Tab, TabItem, Group, Cell } from "vux";

export default {
  name: "My",
  components:{
        Group,
    Cell
  }
};
</script><style lang="scss"scoped>
.wid {
  width: "100px";
  height: "100px";
}

.body {
  width: 100%;
  font-size: 16px;
  margin: 0;
  padding: 0;

  .top {
    padding: 40px 0 24px 24px;
    background: #fff;
    display: flex;
    .img {
      img {
        margin-right: 16px;
        width: 3rem;
        border-radius: 50%;
        height: 3rem;
      }
    }
    :last-child{
        height: 3rem;
        line-height: 1.5rem;
    }

    .name{

    }
    .text{
        font-size: 12px;
        color:#797979;

    }
    
  }
}
</style>
