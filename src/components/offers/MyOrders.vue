<template>
    <div>
        <h2>My orders</h2>
        <current-order></current-order>
    </div>
</template>

<script>
import CurrentOrder from './CurrentOrder'

export default {
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
    },
    components: {
        CurrentOrder
    }
}
</script>

<style></style>
