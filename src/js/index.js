import Vue from 'vue';
import App from './components/App.vue';
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)

var app = new Vue({
  el: '#app',
  render: h => h(App),
  store
});
