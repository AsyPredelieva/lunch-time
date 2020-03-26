<template>
    <li>
        <h3>{{ offerItem.name }}</h3>
        <div class="img-container">
            <img :src="offerItem.imgUrl" :alt="offerItem.name" />
        </div>
        <router-link :to="`/offers/${offerItem.name}`" class="cta-btn">Get Menu</router-link>
    </li>
</template>

<script>
export default {
    name: 'offerItem',
    props: {
        offerItem: {
            name: {
                type: String,
                required: true
            },
            imgUrl: {
                type: String,
                required: true
            }
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
</style>
