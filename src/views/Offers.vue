<template>
    <main class="container">
        <h2>Get the best</h2>
        <ul class="offers">
            <offer-item
                v-for="offer in offers"
                :key="offer.id"
                :offer-item="offer"
            ></offer-item>
        </ul>
    </main>
</template>

<script>
import OfferItem from '../components/offers/OfferItem'
import { offers } from '../data/offers'

export default {
    name: 'Offers',
    data() {
        return {
            offers
        }
    },
    components: {
        OfferItem
    },
    methods: {}
}
</script>

<style scoped lang="scss">
.container {
    margin: 40px auto;
}

.offers {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
}
</style>
