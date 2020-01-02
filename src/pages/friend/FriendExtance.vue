<template>
  <div class="body">
    <div class="tabber">
      <tab custom-bar-width="50px">
        <tab-item selected>
          <router-link to="/chat">消息</router-link>
        </tab-item>
        <tab-item>
          <router-link to="/friendlist">好友</router-link>
        </tab-item>
      </tab>
    </div>
    <div ref="bscroll" class="bscroll main" style="position:absolute;top:4rem; ">
      <router-view></router-view>
    </div>



    
  </div>
</template>

<script>
import { Tab, TabItem } from "vux";
import StandardTop from "@/components/Tabbar/StandardTop";
import StandardBottom from "@/components/Tabbar/StandardBottom";
import BScroll from "better-scroll";
export default {
  name: "Index",
  data() {
    return {};
  },
  components: {
    Tab,
    TabItem,
    standardtop: StandardTop,
    standardbottom: StandardBottom
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.body{
    font-size: 16px;
}
.chat-index{
    position: fixed;
    top: 50%;
    right: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    text-align: center;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-user-select: none;
    user-select: none;
  div{
      padding: 0 4px 0 16px;
        font-weight: 500;
        font-size: 10px;
        line-height: 14px;
  }
}
</style>
