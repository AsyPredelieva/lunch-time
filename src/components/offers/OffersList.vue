<template>
    <section class="container">
        <h2>Get the best</h2>
        <ul class="offers">
            <offer-item
                v-for="offer in offersList"
                :key="offer.id"
                :offer-item="offer"
            ></offer-item>
        </ul>
    </section>
</template>

<script>
import OfferItem from './OfferItem'

export default {
    name: 'OffersList',
    props: ['offersList'],
    components: {
        OfferItem
    }
}
</script>

<style scoped lang="scss">
ul.offers {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
}
</style>
