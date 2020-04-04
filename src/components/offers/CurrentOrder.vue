<template>
    <li>
        <span slot="my-current-order">{{ currOrder.name }}</span>
        <div class="order-detail">
            <span>{{ currOrder.count }}</span>
            <span class="price">{{ currOrder.sum | formatNumber }} lv</span>
        </div>
    </li>
</template>

<script>
export default {
    name: 'CurrentOrder',
    props: {
        currOrder: {
            name: {
                type: String,
                required: true
            },
            count: {
                type: Number,
                required: true
            },
            sum: {
                type: Number,
                required: true
            }
        }
    }
}
</script>

<style scoped lang="scss">
.order-detail {
    display: flex;
}

.price {
    width: 80px;
    margin: 0 0 0 40px;
    font-weight: 500;
    text-align: right;
}
</style>
