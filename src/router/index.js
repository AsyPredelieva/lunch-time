import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Offers from '../views/Offers.vue'
import Orders from '../views/Orders.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import OffersList from '../components/offers/OffersList.vue'
import OfferDetails from '../components/offers/OfferDetails.vue'
import NotFound from '../components/common/NotFound.vue'

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
        beforeEnter: authGuard,
        children: [
            { path: '', component: OffersList },
            { path: ':name', component: OfferDetails, beforeEnter: authGuard }
        ]
    },
    {
        path: '/orders/',
        component: Orders,
        beforeEnter: authGuard
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

export default router
