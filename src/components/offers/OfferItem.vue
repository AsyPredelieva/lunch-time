<template>
    <li class="grid-small">
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
    }
}
</script>

<style scoped lang="scss">
li {
    padding: 20px;
    margin-bottom: 30px;
    box-sizing: border-box;
    border: 1px solid rgba(33, 147, 208, 0.3);
}

.img-container {
    margin: 0 -20px 20px;
    height: 120px;
    overflow: hidden;
}
</style>
