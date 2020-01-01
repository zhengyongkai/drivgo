<!--用户基本信息页面-->
<style scoped lang="scss">

</style>
<template>
  <div>
      <van-tabs v-model="active" swipeable>
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>
  </div>
</template>
<script>
import { Tab, Tabs } from 'vant';

import roundprogress from '@/components/tools/roundprogress'
export default {
  components: {
    "CircleProgress":roundprogress,
  },
  data() {
    return {
      
    }
  },
  watch: {
    isDurationModel() {
      clearInterval(this.intervalTimer)
      this.currentTime = 0
    }
  },
  components:{
      "van-tab":Tab,
      "van-tabs":Tabs
  },
  methods: {
    // 重置动画
  
  }
}
</script>