<template>
    <div class="offer-details">
        <div class="container">
            <div v-if="!currentOffer">
                <Loader />
            </div>
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
                                            <input
                                                type="text"
                                                placeholder="0"
                                                v-model="item.count"
                                            />
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
                                    :curr-order-id="index"
                                    :curr-order="currOrder"
                                    @onRemove="removeItem"
                                    :is-shown="isShown"
                                ></current-order>
                            </ul>
                        </div>
                        <div class="total-price">Total sum: {{ totalSum | formatNumber }} lv</div>
                        <button class="cta-btn">Order</button>
                    </template>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Loader from '../core/Loader'
import CurrentOrder from './CurrentOrder'
import { orderService } from '../../services/orderService'

export default {
    name: 'OfferDetails',
    props: ['offersList', 'ordersList'],
    data() {
        return {
            totalSum: 0,
            isAdded: false,
            isShown: true
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
        Loader,
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
        removeItem(currItemId) {
            this.ordersList.splice(currItemId, 1)

            this.totalSum = 0
            this.ordersList.map(el => (this.totalSum += el.sum))

            if (this.ordersList.length < 1) {
                this.isAdded = false
            }
        },
        submitOrder() {
            this.addOrder(this.ordersList, this.totalSum).then(() => {
                this.$router.push('/orders')
            })
        }
    }
}
</script>

<style scoped lang="scss">
.offer-details {
    width: 100%;
    height: 100%;
    padding: 40px 0;
    background-image: url('../../assets/offer-details-bckgr.png'),
        url('../../assets/offer-details-bckgr_.png');
    background-position: left top, right bottom 20%;
    background-repeat: no-repeat;
    background-size: 25%;
}

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
