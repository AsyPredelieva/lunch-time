<template>
    <div class="container">
        <ul>
            <li v-for="o in offersList" :key="o.id">
                <h2>Today's menu in {{ o.name }}</h2>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'OfferDetails',
    props: {
        offersList: {
            name: {
                type: String,
                required: true
            },
            imgUrl: {
                type: String,
                required: true
            },
            menuCategories: {
                type: Array,
                required: true
            },
            menuItems: {
                type: Array,
                required: true
            }
        }
    }
}
</script>

<style scoped lang="scss"></style>
