<template>
    <div :class="['orders-container', { empty: !myOrderList }]">
        <div class="container">
            <h2>My orders</h2>
            <div v-if="!myOrderList">
                <Loader />
            </div>
            <div v-else>
                <ul>
                    <li v-for="(currOrder, index) in myOrderList" :key="index">
                        <div class="current-order">
                            <h3>
                                <span>Order</span>
                                <span>{{ currOrder._kmd.lmt | formatDate }}</span>
                            </h3>
                            <ul>
                                <current-order
                                    v-for="(orderItem, i) in currOrder.order"
                                    :key="i"
                                    :curr-order-id="i"
                                    :curr-order="orderItem"
                                    :is-shown="isShown"
                                ></current-order>
                            </ul>
                            <div class="total-price">
                                <strong>Total sum:</strong>
                                <strong>{{ currOrder.sum | formatNumber }} lv</strong>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Loader from '../components/common/Loader'
import CurrentOrder from '../components/orders/CurrentOrder'
import { myOrderService } from '../services/myOrderService'

export default {
    data() {
        return {
            isShown: false
        }
    },
    mixins: [myOrderService],
    components: {
        Loader,
        CurrentOrder
    }
}
</script>

<style scoped lang="scss"></style>
