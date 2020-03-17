<template>
    <div class="offers container">
        <h2>Get the best</h2>
        <ul>
            <li v-for="offer in offers" :key="offer.id">
                <h3>{{ offer.name }}</h3>
                <div class="img-container">
                    <img :src="offer.imgUrl" :alt="offer.name" />
                </div>
                <a href="#" class="cta-btn" @click="getOffer(offer.id)"
                    >Get Menu</a
                >
            </li>
        </ul>
    </div>
</template>

<script>
import { offers } from '../data/offers'

export default {
    name: 'Offers',
    data() {
        return {
            offers
        }
    },
    methods: {
        getOffer(offerId) {
            this.$root.$emit('get-offer', offerId)
        }
    }
}
</script>

<style scoped lang="scss">
.offers {
    margin: 40px auto;

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin: 0 -15px;

        li {
            margin: 0;
            width: calc(25% - 30px);
            flex-basis: calc(25% - 30px);
            padding: 20px;
            margin: 0 15px 30px;
            box-sizing: border-box;
            border: 1px solid rgba(33, 147, 208, 0.3);
        }

        .img-container {
            margin: 0 -20px 20px;
            height: 120px;
            overflow: hidden;
        }
    }
}
</style>
