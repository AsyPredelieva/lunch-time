<template>
    <li>
        <span slot="my-current-order">{{ currOrder.name }}</span>
        <div class="order-detail">
            <span>{{ currOrder.count }}</span>
            <span :class="[{ large: isShown }, 'price']"
                >{{ currOrder.sum | formatNumber }} lv</span
            >
            <a @click.prevent="removeCurrItem" class="remove-icon" v-if="isShown">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 12 12"
                    version="1.1"
                    fill="#74b4c4"
                >
                    <polygon
                        points=".75 .043 .043 .75 .398 1.102 5.293 6 .043 11.25 .75 11.957 6 6.707 10.895 11.605 11.25 11.957 11.957 11.25 11.605 10.895 6.707 6 11.957 .75 11.25 .043 6 5.293 1.102 .398"
                    />
                </svg>
            </a>
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
        },
        currOrderId: {
            type: Number,
            required: true
        },
        isShown: {
            type: Boolean
        }
    },
    methods: {
        removeCurrItem() {
            this.$emit('onRemove', this.currOrderId)
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

    &.large {
        margin: 0 100px 0 40px;
    }
}

.remove-icon {
    width: 18px;
    height: 18px;
    display: inline-block;
    cursor: pointer;
}

@media screen and (max-width: 640px) {
    .price {
        width: 60px;

        .large {
            margin: 0 20px 0 17px;
        }
    }
}
</style>
