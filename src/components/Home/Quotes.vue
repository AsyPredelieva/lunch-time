<template>
    <div class="container">
        <p class="quote">
            <strong>"Let your lunch breake be longer than usual."</strong>
            <small>- Master Chef Yoda</small>
        </p>
    </div>
</template>

<script>
export default {
    name: 'Quotes'
}
</script>

<style scoped lang="scss">
.quotes {
    width: 100%;
    padding: 40px 0;
    border-top: 1px solid rgba(33, 147, 208, 0.3);
    border-bottom: 1px solid rgba(33, 147, 208, 0.3);

    position: relative;

    strong {
        display: block;
        font-size: 16px;
    }

    small {
        float: right;
        font-style: italic;
    }
}
</style>
