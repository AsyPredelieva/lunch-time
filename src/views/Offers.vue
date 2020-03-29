<template>
    <main class="container">
        <router-view
            :offers-list="offers"
            :orders-list="ordersList"
            @onSubmitOrder="ordersList"
        ></router-view>
    </main>
</template>

<script>
import { offers } from '../data/offers'

export default {
    name: 'Offers',
    data() {
        return {
            offers,
            ordersList: []
        }
    },
    mounted() {
        console.log(this.ordersList)
    }
}
</script>

<style scoped lang="scss">
.container {
    margin: 40px auto;
}
</style>
