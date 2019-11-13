<template>
  <div class="body">
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
                
                  <router-link :to="'/skill/two'">
                        技巧
                  </router-link>
              </span>
          </tabbar-item>
           <tabbar-item >
              <span slot="label">
                 <router-link :to="'/home/my'">
                        社交
                  </router-link>
              </span>
          </tabbar-item>
           <tabbar-item >
              <span slot="label">
                 <router-link :to="'/home/my'">
                        我的
                  </router-link>
              </span>
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
.body{
  position:fixed;
  bottom:0;
  width:100%;
  margin-top:50px
}

</style>
