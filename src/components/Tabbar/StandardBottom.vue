<template>
  <div >
      <tabbar>
          <tabbar-item>
              <span slot="label">
                   <router-link :to="'/one'">
                       答题
                  </router-link>
              </span>
          </tabbar-item>
            <tabbar-item >
              <span slot="label">
                  <router-link :to="'/home/SkillExam'">
                        技巧
                  </router-link>
              </span>
          </tabbar-item>
           <tabbar-item >
              <span slot="label">我的</span>
          </tabbar-item>
      </tabbar>
  </div>
</template>

<script>
import {Tabbar,TabbarItem} from 'vux'
export default {
  name: 'StandardBottom',
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
