<template>
  <div class="body">
      <div> <img :src=img class="img"/></div>
      <div class="play">
          <img src="../../image/xueche/videoplay.png" />
      </div>
      <div class="name">{{name}}</div>
  </div>
</template>

<script>
export default {
  name: "VideoImg",
  props:{
    img:{
        type:String
    },
    name:{
        type:String
    }
  }
};
</script>

<style lang="scss" scoped>

.body{

  margin: 0;
  padding: 0;
  position:relative;
}

.img{
    padding:5px 10px;
    width:6rem;
  


}
.play{
   
     position:absolute;
       width: 100%;
   left:0rem;
   top:25%;;
    
  
    
   
    img{
     width:2rem;
    height:2rem;
   
      

    }
}
.name{
    text-align:center;
    font-size: 12px;
}
</style>
