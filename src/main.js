import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import { apolloProvider } from './vue-apollo';

Vue.config.productionTip = false;

new Vue({
  provide: apolloProvider.provide(),
  router,
  render: h => h(App),
}).$mount('#app');
