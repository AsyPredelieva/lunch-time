<template>
    <div class="my-orders-container">
        <div class="container">
            <h2>My orders</h2>
            <ul>
                <li v-for="(order, index) in myOrders" :key="index">
                    <div class="current-order">
                        <h3>Order at {{ order._kmd.lmt | formatDate }}</h3>
                        <ul>
                            <current-order
                                v-for="(orderItem, i) in order.orders"
                                :key="i"
                                :curr-order="orderItem"
                            ></current-order>
                        </ul>
                        <div class="total-price">
                            <strong>Total sum:</strong>
                            <strong>{{ calcSum(order.orders) | formatNumber }} lv</strong>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import CurrentOrder from './CurrentOrder'
import { myOrderService } from '../../services/myOrderService'

export default {
    mixins: [myOrderService],
    components: {
        CurrentOrder
    },
    data() {
        return {
            sum: 0,
            arr: []
        }
    },
    methods: {
        calcSum(currOrder) {
            return currOrder.map(e => e.count * e.sum).reduce((a, b) => a + b)
        }
    }
}
</script>

<style scoped lang="scss">
.my-orders-container {
    padding: 40px 0;
    background-image: url('../../assets/myorders-bckgr.png');
    background-position: bottom left -20%;
    background-repeat: no-repeat;
    background-size: content;
    background-color: rgba(255, 255, 255, 0.5);
}

.current-order {
    width: 570px;
    max-width: 100%;
    padding: 20px;
    margin: 0 auto 40px auto;
    text-align: left;
    border: 1px solid rgba(33, 147, 208, 0.3);
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.9);

    h3 {
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(33, 147, 208, 0.3);
    }

    & > ul > li {
        display: flex;
        flex-grow: 1;
        flex-basis: 0;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 17px;
    }

    .total-price {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        border-top: 1px solid rgba(33, 147, 208, 0.3);
    }
}
</style>
