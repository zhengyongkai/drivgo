<template>
  <div class="body">
    <div class="chat-items">
      <div class="item">
        <div class="img">
          <img src="@/image/my.jpg" alt class="user_img" />
        </div>
        <div class="msg">
          <div>
            <div>阿拉德异界</div>
            <div class="chat-time">2018-05-15</div>
          </div>
          <div>欢饮老大大大实打实大大实打实</div>
        </div>
      </div>
        <div class="item">
        <div class="img">
          <img src="@/image/logo.png" alt class="user_img" />
        </div>
        <div class="msg">
          <div>
            <div>阿拉德异界</div>
            <div class="chat-time">2018-05-05 12:01:39</div>
          </div>
          <div class="chat-msg">{{'欢'|textLengthFilter}}</div>
        </div>
      </div>
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
    return {
        textWidth:""
    };
  },
  components: {
    Tab,
    TabItem,
    standardtop: StandardTop,
    standardbottom: StandardBottom
  },
   filters:{

      textLengthFilter:(text)=>{
          
        //     var i = document.getElementsByClassName('chat-msg')[0].offsetWidth+"px";
         
        //    return i;
            return "零零零零";
         
        }
    },
  mounted() {
     
       
        
  },
 
  
};
</script>

<style lang="scss" scoped>
.body {
  font-size: 16px;
}
.chat-items {
  padding: 0 12px;
  width: 100%;

  .item {
    display: flex;
    align-items: center;
    height: 2.5rem;
    border-bottom: 0.5px solid #eee;
  }

  .user_img {
    width: 42px;
    height: 42px;
    border-radius: 20px;
    margin-right: 8px;
  }

  .msg {
    height: 42px;
    display: flex;
    width: 100%;
    flex-direction: column;
   

    justify-content: space-between;
    :first-child {
      color: #000;
      display: flex;
      
      
      :first-child{
          font-weight: 500;
      }
      :last-child{
          text-align: right;
          font-size: 14px;
          margin-left: auto;
          color: lightgray;
      }
    }

    :last-child {
      font-size: 12px;
    }
  }
}
</style>
