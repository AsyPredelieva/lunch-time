<template>
    <div>
        <div v-if="!currentOffer">Loading...</div>
        <div v-else>
            <form @submit.prevent="submitOrder()">
                <h2>Today's menu in {{ currentOffer.name }}</h2>
                <ul class="offer-menu">
                    <li v-for="category in currentOffer.menuCategories" :key="category.id">
                        <h3>{{ category.name }}</h3>
                        <ul>
                            <li v-for="item in category.menuItems" :key="item.id">
                                <span class="name">{{ item.name }}</span>
                                <div class="order-detail">
                                    <div class="form-field">
                                        <input type="text" placeholder="0" v-model="item.count" />
                                    </div>
                                    <span class="price">{{ item.price }} lv</span>
                                    <button
                                        type="button"
                                        class="primary-button"
                                        @click="addItem(item.name, item.count, item.price)"
                                    >
                                        Add
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <template v-if="isAdded">
                    <div class="current-order">
                        <h3>I'll take for lunch:</h3>
                        <ul>
                            <current-order
                                v-for="(currOrder, index) in ordersList"
                                :key="index"
                                :curr-order="currOrder"
                            ></current-order>
                        </ul>
                    </div>
                    <div class="total-price">Total sum: {{ totalSum | formatNumber }} lv</div>
                    <button class="cta-btn">Order</button>
                </template>
            </form>
        </div>
    </div>
</template>

<script>
import CurrentOrder from './CurrentOrder'
import { orderService } from '../../services/orderService'

export default {
    name: 'OfferDetails',
    props: ['offersList', 'ordersList'],
    data() {
        return {
            totalSum: 0,
            isAdded: false
        }
    },
    computed: {
        currentOffer() {
            const currOffer = this.offersList.filter(
                offer => offer.name === this.$route.params.name
            )

            return currOffer[0]
        }
    },
    mixins: [orderService],
    components: {
        CurrentOrder
    },
    methods: {
        addItem(name, count, price) {
            count = Number(count)
            price = Number(price)
            this.totalSum = 0

            this.isAdded = true

            if (this.ordersList.some(e => e.name === name)) {
                this.ordersList.map(order => {
                    if (order.name === name) {
                        order.count = count
                        order.sum = order.count * price
                    }
                })
            } else {
                this.ordersList.push({
                    name,
                    count,
                    sum: count * price
                })
            }

            this.ordersList.map(el => (this.totalSum += el.sum))
            this.offersList.map(el =>
                el.menuCategories.map(i => i.menuItems.map(e => (e.count = 0)))
            )
        },
        submitOrder() {
            this.addOrder(this.ordersList).then(() => {
                this.$router.push('/myOrders')
            })
        }
    }
}
</script>

<style scoped lang="scss">
.offer-menu,
.current-order {
    width: 570px;
    max-width: 100%;
    margin: 0 auto;
    text-align: left;
}

.offer-menu li > ul > li,
.current-order > ul > li {
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 17px;
}

.order-detail {
    display: flex;
    align-items: center;

    .form-field {
        max-width: 50px;
        display: inline-block;
        padding: 2px 5px;

        input {
            padding: 0;
        }
    }

    .price {
        margin: 0 40px;
        flex-grow: 1;
        flex-basis: 0;
    }
}

.current-order {
    margin-top: 60px;
    padding: 20px 0 10px;
    border-top: 1px solid rgba(33, 147, 208, 0.3);
}

.total-price {
    width: 570px;
    max-width: 100%;
    padding: 10px 0;
    margin: 0 auto;
    border-top: 1px solid rgba(33, 147, 208, 0.3);
    font-size: 20px;
    font-weight: 600;
    text-align: right;
}
</style>
