<template>
    <p class="quotes">
        "{{ quoteItem.quote }}"
        <small>- {{ quoteItem.author }}</small>
    </p>
</template>

<script>
export default {
    name: 'Quotes',
    props: {
        quoteItem: {
            quote: {
                type: String,
                require: true
            },
            author: {
                type: String,
                require: true
            }
        }
    }
}
</script>

<style scoped lang="scss">
.quotes {
    width: 100%;
    padding: 0 0 40px;
    margin-bottom: 0;
    position: relative;

    small {
        font-size: 18px;
        font-style: normal;
        position: absolute;
        right: 0px;
        bottom: 0;
    }
}
</style>
