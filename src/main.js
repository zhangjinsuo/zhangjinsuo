import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Qs from 'qs'

Vue.use(ELEMENT)
Vue.prototype.axios = axios
Vue.prototype.Qs = Qs
Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')