import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Offers from '../views/Offers.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import OffersList from '../components/offers/OffersList.vue'
import OfferDetails from '../components/offers/OfferDetails.vue'
import MyOrders from '../components/offers/MyOrders.vue'
import NotFound from '../components/core/NotFound.vue'

Vue.use(VueRouter)

function anonymousGuard(to, from, next) {
    localStorage.getItem('authtoken') !== null ? next('/') : next()
}
function authGuard(to, from, next) {
    localStorage.getItem('authtoken') === null ? next('/login') : next()
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter: anonymousGuard
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        beforeEnter: anonymousGuard
    },
    {
        path: '/offers/',
        component: Offers,
        children: [
            { path: '', component: OffersList },
            { path: ':name', component: OfferDetails },
            { path: '/myOrders', component: MyOrders, beforeEnter: authGuard }
        ]
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
