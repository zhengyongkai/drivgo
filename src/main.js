// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './config/rem'
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
import VueTouch from 'vue-touch'
import vueg from 'vueg'
import  { ToastPlugin } from 'vux'
import "./style/font.css";
import './assets/iconfront/iconfont.css';
import './util/Global';
import './mock/mock';
import store from  './store/store';
Vue.use(vueg, router) 
Vue.use(ToastPlugin)
Vue.use(VueTouch, {
  name: 'v-touch'
})

VueTouch.config.swipe = {

  threshold: 100 //手指左右滑动距离

}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
