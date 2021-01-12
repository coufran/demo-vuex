import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const studentStore = {
  state: () => ({
    students: [{
      name: "Stu"
    }]
  })
};

const teacherStore = {
  state: () => ({
    teachers: [{
      name: "Tch"
    }]
  })
}

const store = new Vuex.Store({
  modules: {
    student: studentStore,
    teacher: teacherStore
  },
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
  },
  actions: {
    incrementAsync(context) {
      setTimeout(() => {
        context.commit("increment");
      }, 2000);
    }
  }
});


new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
