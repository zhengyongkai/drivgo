<!-- 标题组件-->
<template>
  <div class="body">
    <div class="bar">
      <div class="content">
        <div><img src="../../image/feiqi/right.png" /></div>
        <div>2</div>
      </div>
      <div class="content">
        <div><img src="../../image/feiqi/wrong.png" /></div>
        <div>2</div>
      </div>
      <div class="content center">
        <div><img src="../../image/feiqi/num.png" /></div>
        <div>2 / 100</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ExamBottomBar",


  };

</script>

<style lang="scss" scoped>
  .body {
    width: 100%;
    margin: 0;
    padding: 0;
    background: #fff;
    height: 50px;
    line-height: 50px;
    position: fixed;
    bottom: 0;

    .bar {
      width: 100%;
      background: #fff;
      padding: 0 12px;
      display: flex;

      .content {
        display: flex;


        height: 50px;
        margin-right: 16px;

        :first-child {
          margin-right: 0.1rem;

        }
      }

      .center {
        text-align: center;
        justify-content: center;
      }

      img {
        width: 24px;
        height: 24px;

        vertical-align: middle;
      }

    }
  }

</style>
