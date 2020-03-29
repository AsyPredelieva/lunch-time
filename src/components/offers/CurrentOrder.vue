<template>
    <li class="current-order-item">
        <ul>
            <li>
                <span slot="my-current-order">{{ currOrder.name }}</span>
                <div class="order-detail">
                    <span>{{ currOrder.count }}</span>
                    <span class="price">{{ currOrder.sum | formatNumber }} lv</span>
                </div>
            </li>
        </ul>
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

li > ul > li {
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 17px;
}

.price {
    width: 80px;
    margin: 0 0 0 40px;
    font-weight: 500;
    text-align: right;
}
</style>
