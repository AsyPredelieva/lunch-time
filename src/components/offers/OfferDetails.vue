<template>
    <div>
        <form @submit.prevent="submitOrder">
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
                                        :placeholder="item.count"
                                        v-model="item.count"
                                    />
                                </div>
                                <!-- <template v-if="$v.$error">
                                    <p class="error" v-if="!$v.required">
                                        Please enter number of plates.
                                    </p>
                                    <p class="error" v-if="!$v.numberic">
                                        Please enter number
                                    </p>
                                </template> -->
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
                    <ul class="order-list">
                        <li v-for="(currOrder, index) in myOrder" :key="index">
                            <ul>
                                <li>
                                    <span>{{ currOrder.name }}</span>
                                    <div class="order-detail">
                                        <span>{{ currOrder.count }}</span>
                                        <span class="price">{{ currOrder.sum }}</span>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="total-price">Total sum: {{ totalSum }} lv</div>
                <button class="cta-btn">Order</button>
            </template>
        </form>
    </div>
</template>

<script>
// import { validationMixin } from 'vuelidate'
// import { required, numeric } from 'vuelidate/lib/validators'

export default {
    name: 'OfferDetails',
    props: ['offersList'],
    // mixins: [validationMixin],
    data() {
        return {
            offerId: '',
            myOrder: [],
            currOrderSum: 0,
            totalSum: 0,
            isAdded: false
            // count: 0
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
    // validations: {
    //     count: {
    //         required,
    //         numeric
    //     }
    // },
    methods: {
        addItem(name, count, price) {
            this.isAdded = true
            this.currOrderSum = Number(count) * Number(price)

            this.myOrder.push({
                name,
                count,
                sum: this.currOrderSum
            })

            this.currOrderSum += this.currOrderSum
            this.totalSum = this.currOrderSum.toFixed(2)
        },

        submitOrder() {
            console.log('order')
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

    li > ul > li {
        display: flex;
        flex-grow: 1;
        flex-basis: 0;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 17px;
    }
}

.order-detail {
    display: flex;

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

    .error {
        font-size: 11px;
        padding: 2px;
    }
}

.current-order {
    font-size: 18px;
    margin-top: 60px;
    padding: 20px 0 10px;
    border-top: 1px solid rgba(33, 147, 208, 0.3);

    .price {
        width: 80px;
        margin: 0 0 0 40px;
        font-weight: 500;
        text-align: right;
    }
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
