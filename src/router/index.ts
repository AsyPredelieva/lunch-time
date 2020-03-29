import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Offers from '../views/Offers.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import OffersList from '../components/offers/OffersList.vue'
import OfferDetails from '../components/offers/OfferDetails.vue'
import NotFound from '../components/core/NotFound.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    // {
    //     path: '/offers',
    //     name: 'Offers',
    //     component: Offers,
    //     children: [{ path: '/:name', component: OfferDetails }]
    // },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/offers/',
        component: Offers,
        children: [
            { path: '', component: OffersList },
            { path: ':name', component: OfferDetails }
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
