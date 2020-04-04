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
import { offerService } from '../services/offerService'

export default {
    name: 'Offers',
    data() {
        return {
            ordersList: []
        }
    },
    mixins: [offerService]
}
</script>

<style scoped lang="scss">
.container {
    margin: 40px auto;
}
</style>
