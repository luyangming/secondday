import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1,
    number:20
  },
  mutations: {
    add(state,x){
      state.count+=x;
    },
    reduce(state){
      state.count--;
    }
  },
  getters:{
     xx:function(state){
     return state.count*2+state.number;
     }
  },
  actions: {
    addAction({commit}){
        setTimeout(function() {
           commit("add",10);
        }, 1000);
    }
  },
  modules: {
  }
})
