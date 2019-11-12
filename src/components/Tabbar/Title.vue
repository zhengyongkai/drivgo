<!-- 标题组件-->
<template>
  <div class="body">
    <div class="title">
            <div>{{title}} </div>
            <div style="font-size:16px;"> | </div>
            <div> {{tips}} </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
   props: {
    title: {
      type: String,
      
    },
    tips:{
        type:String
    }
  }
};
</script>

<style lang="scss" scoped>

.body{
  width: 100%;
  margin: 0;
  padding: 0;
}
.title{
    display:flex;
     justify-content: center;
            align-items: center;
            color:black;
   
    width:100%;
    div:first-child{
        font-size:14px;
        margin-right:8px;
    }
    div:last-child{
        font-size:12px;
        color:#919191;
        margin-left:8px;
    }

}
</style>
