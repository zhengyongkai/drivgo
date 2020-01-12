import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = { //要设置的全局访问的state对象
  AnswerRight: 0,
  AnswerError: 0,
  AnswerNow: 0,
  AnswerResult:{}
};
const getters = { //实时监听state值的变化(最新状态)

};
const mutations = {
  RangeUp(state) {
    state.AnswerNow++;
  },
  RangeDown(state) {
    state.AnswerNow--;
  },
  AnswerErrors(state){
    
  },
  
};
const actions = {
  RangeUp(context) {
    context.commit("RangeUp")
  },
  RangeDown(context) {
    context.commit("RangeDown")
  }
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
