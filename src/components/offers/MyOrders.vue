<template>
    <div>
        <h2>My orders</h2>
        <current-order v-for="(order, index) in ordersList" :key="index"></current-order>
    </div>
</template>

<script>
import CurrentOrder from './CurrentOrder'

export default {
    props: ['ordersList'],
    components: {
        CurrentOrder
    }
}
</script>

<style></style>
