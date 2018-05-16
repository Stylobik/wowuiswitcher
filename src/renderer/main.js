import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import Mainview from './components/Mainview'
import router from './router'

Vue.use(Vuetify)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App, MainView, uilist},
  router,
  template: '<App/>'
}).$mount('#app')