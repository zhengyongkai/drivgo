<template>
  <div >
      <tabbar>
          <tabbar-item @on-item-click="$emit('click', {type: 'pre'})">
              <img slot="icon" src="../../image/i2.png">
              <span slot="label">上一题</span>
          </tabbar-item>
            <tabbar-item @on-item-click="$emit('click', {type: 'next'})">
              <img slot="icon" src="../../image/i1.png">
              <span slot="label">下一题</span>
          </tabbar-item>
           <tabbar-item @on-item-click="$emit('click', {type: 'add'})">
             <img slot="icon" src="../../image/i3.png">
              <span slot="label">加入错题集</span>
          </tabbar-item>
      </tabbar>
  </div>
</template>

<script>
import {Tabbar,TabbarItem} from 'vux'
export default {
  name: 'ExamBottom',
  data () {
    return {
     
    }
  },
  methods:{
    xxx(){
      alert("xx")
    }
  },
  components:{
    Tabbar,
    TabbarItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
