import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosPlugin from './plugins/axiosPlugin'
import { authService } from './services/authServices'

Vue.config.productionTip = false
Vue.filter('formatNumber', function(num) {
    return num.toFixed(2)
})

Vue.use(axiosPlugin)
Vue.mixin(authService)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
