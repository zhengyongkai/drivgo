<template>
  <div class="body">
    <div class="friendtop">
      <div class="friendtop_items">
        <div class="friendtop_item">
          <div class="item_icon">
            <img src="@/image/logo.png" />
          </div>
          <div>订阅</div>
        </div>
        <div class="friendtop_item">
          <div class="item_icon">
            <img src="@/image/logo.png" />
          </div>
          <div>附近</div>
        </div>
        <div class="friendtop_item">
          <div class="item_icon">
            <img src="@/image/logo.png" />
          </div>
          <div>添加好友</div>
        </div>
        <div class="friendtop_item">
          <div class="item_icon">
            <img src="@/image/logo.png" />
          </div>
          <div>发起群聊</div>
        </div>
      </div>
    </div>
    <div class="friend-content">
      <group>
       <cell
       title="'我的好友'"
      is-link
      :border-intent="false"
      :arrow-direction="showContent004 ? 'up' : 'down'"
      @click.native="showContent004 = !showContent004">
        <div slot="title" class="cell-title">
            我的好友 (1 / 1000)
        </div>
      </cell>

      <div class="slide" :class="showContent004?'animate':''">
          <div class="friend-items" v-for=" i  in 3">
              <div class="friend-item">
                  <div class="firend-img">
                      <img src="@/image/logo.png" />
                  </div>
              </div>
          </div>
      </div>

    </group>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem ,Cell,Group} from "vux";
import StandardTop from "@/components/Tabbar/StandardTop";
import StandardBottom from "@/components/Tabbar/StandardBottom";
import BScroll from "better-scroll";
import { IndexBar, IndexAnchor } from "vant";


export default {
  name: "Index",
  data() {
    return {
       activeName: ['1'],
       showContent004:false
    };
  },
  components: {
    Tab,
    TabItem,
    Group,
    standardtop: StandardTop,
    Cell,
    standardbottom: StandardBottom,
    "van-index-anchor": IndexAnchor,
    "van-index-bar": IndexBar,
  
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.body {
  font-size: 16px;
   position: relative;
  
}

.friendtop {
  height: 4rem;
  background: #fff;
}

.friendtop_items {
  height: 4rem;
  display: flex;
  align-items: center;
  .friendtop_item {
    color: #000;
    font-size: 14px;
    text-align: center;
    width: 25%;
    .item_icon {
      margin-bottom: 5px;
      img {
        border-radius: 20px;
        width: 30px;
        height: 30px;
      }
    }
  }
}
.friend-content{
  margin-top: 16px;
  .cell-title{
    font-size: 14px;
    padding-left: 2px;
    height:1.5rem;
    line-height: 1.5rem;
   
  }
  .friend-items{
  
    .friend-item{
       padding: 0 12px;
        display: flex;
        align-items: center;
        height: 2.5rem;
        border-bottom: 0.5px solid #eee;
        img{
            width: 42px;
            height: 42px;
            border-radius: 20px;
            margin-right: 8px;
        }
    }
  }
}
.slide {
 
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>
