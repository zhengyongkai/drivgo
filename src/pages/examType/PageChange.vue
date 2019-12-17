<template>
  <div class="recommand-wrap">

    <Swiper>
      <Slide>
        1
      </Slide>
      <Slide>
        2
      </Slide>
      <Slide>
        3
      </Slide>
    </Swiper>
  </div>
</template>

<script>
  import {
    Swiper,
    Slide
  } from 'vue-swiper-component';

  export default {
    name: 'HomeRecommand',
    props: {

    },

    components: {
      Swiper,
      Slide
    }

    ,
    data() {
      return {

      }
    },
    methods: {

    },
    mounted() {

    }
  }

</script>

<style lang="scss" scoped>
  .recommand-wrap {
    height: 0;
    padding-bottom: 50%;
    margin-top: .2rem;
    background: #fff;
    padding-left: .24rem;
    width: 100%;

    .title {
      position: relative;
      height: 40px;
      display: flex;
      padding: 12px 0;
      box-sizing: border-box;

      .title-img {
        width: 15px;
        height: 15px;
      }

      .title-hotrec {
        font-size: 16px;
        margin-left: 4px;
      }

      .title-allrec {
        position: absolute;
        padding-top: 2px;
        font-size: 13px;
        right: 20px;
        color: gray;
      }
    }

    .cont {
      list-style: none;
      // overflow-x: scroll;  
      white-space: nowrap;
      font-size: 12px;
      text-align: center;
      padding-right: .24rem;

      .cont-item {
        position: relative;
        display: inline-block;
        padding: .06rem 0 .2rem;
        width: 2rem;
        margin: 0 .1rem;

        .cont-img {
          overflow: hidden;
          width: 2rem;
          height: 0;
          padding-bottom: 100%;

          .img {
            width: 100%;
          }
        }

        .cont-dest {
          margin: .1rem 0;
        }

        .cont-price {
          .price {
            color: #ff8300;
          }
        }
      }
    }
  }

</style>
