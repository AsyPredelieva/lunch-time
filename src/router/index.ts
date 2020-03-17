import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Offers from '../views/Offers.vue'
// import OfferItem from '../components/Offers/OfferItem.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/offers',
        name: 'Offers',
        component: Offers
        // children: [{ path: '/offers/:id', component: OfferItem }]
    }
]

const router = new VueRouter({
    routes
})

export default router
