import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.filter('formatNumber', function(num: number) {
    return num.toFixed(2)
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
