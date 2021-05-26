import Vue from 'vue';
import VuePageTransition from 'vue-page-transition';
import BoostrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router/router';
import twitter from 'vue-twitter'

Vue.config.productionTip = false
Vue.use(BoostrapVue);
Vue.use(VuePageTransition);
Vue.use(twitter)


new Vue({
  el: '#app',
  components: { App },
  router:router,
  render: h => h(App),
}).$mount('#app')


