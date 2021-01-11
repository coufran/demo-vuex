import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    countStr: state => state.count + "次"
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    add(state, n) {
      state.count += n;
    }
  }
});

store.commit("increment");
console.log(store.state.count);

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
