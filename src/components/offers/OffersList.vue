<template>
    <section class="container">
        <h2>Get the best</h2>
        <div v-if="!offersList">
            <Loader />
        </div>
        <div v-else>
            <ul class="offers">
                <offer-item
                    v-for="offer in offersList"
                    :key="offer.id"
                    :offer-item="offer"
                ></offer-item>
            </ul>
        </div>
    </section>
</template>

<script>
import Loader from '../common/Loader'
import OfferItem from './OfferItem'

export default {
    name: 'OffersList',
    props: ['offersList'],
    components: {
        Loader,
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
