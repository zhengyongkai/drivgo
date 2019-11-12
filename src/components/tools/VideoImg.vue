<template>
  <div class="body">
      <div> <img src="../../image/xueche/daoche.jpg" class="img"/></div>
      <div class="play">
          <img src="../../image/xueche/videoplay.png" />
      </div>
      <div class="name">倒车入库</div>
  </div>
</template>

<script>
export default {
  name: "VideoImg"
};
</script>

<style lang="scss" scoped>

.body{

  margin: 0;
  padding: 0;
  position:relative;
}

.img{
    padding:10px;
    width:6rem;
    height:4rem;

}
.play{
   
       position:absolute;
   left:3rem;
   top:2rem;;
    
   
    img{
     width:2rem;
    height:2rem;
   
      

    }
}
.name{
    text-align:center;
}
</style>
