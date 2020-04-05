<template>
    <div class="all-orders-container">
        <div class="container">
            <h2>All orders</h2>
            <div v-if="!orderList">
                <Loader />
            </div>
            <div v-else>
                <ul>
                    <li v-for="(currOrder, index) in orderList" :key="index">
                        <div class="current-order">
                            <h3>
                                <span>Order</span>
                                <span>{{ currOrder._kmd.lmt | formatDate }}</span>
                            </h3>
                            <ul>
                                <current-order
                                    v-for="(orderItem, i) in currOrder.order"
                                    :key="i"
                                    :curr-order="orderItem"
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
import Loader from '../core/Loader'
import CurrentOrder from './CurrentOrder'
import { orderListService } from '../../services/orderListService'

export default {
    mixins: [orderListService],
    components: {
        Loader,
        CurrentOrder
    }
}
</script>

<style scoped lang="scss">
.all-orders-container {
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
        display: flex;
        justify-content: space-between;
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
