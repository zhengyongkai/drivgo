<template>
  <div class="body">
       <tab custom-bar-width="50px">
         
             <tab-item >
                <router-link to="/skill/two">科目二</router-link>

            </tab-item>
            <tab-item >
                <router-link to="/skill/three">科目三</router-link>

            </tab-item>
           
        </tab>
        <div>
          <router-view ></router-view>
        </div>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
export default {
  name: "SubjectTwo",
  data(){
    return {

    }
  },
  components:{
    Tab,
    TabItem
  }
  
};
</script>

<style lang="scss" scoped>

.body{
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
