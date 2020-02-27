import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:"电影",
    color:"red"
  },
  mutations: {
    change(state,{color,title}){
         state.color=color;
         state.title=title;
    }
  },
  actions: {
  },
  modules: {
  }
})
