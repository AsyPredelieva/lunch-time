import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import VueParallaxJs from 'vue-parallax-js'
import axiosPlugin from './plugins/axiosPlugin'
import { authService } from './services/authServices'

Vue.config.productionTip = false

Vue.filter('formatNumber', function(num) {
    if (num) {
        return num.toFixed(2)
    }
})
Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('MM/DD/YYYY HH:MM')
    }
})

Vue.use(VueParallaxJs)
Vue.use(axiosPlugin)
Vue.mixin(authService)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
