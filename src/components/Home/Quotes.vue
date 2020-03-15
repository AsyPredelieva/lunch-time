<template>
    <div class="quotes-container">
        <div class="container">
            <p class="quotes">
                "Let your lunch breake be longer than usual."
                <small>- Master Chef Yoda</small>
            </p>
        </div>
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
    padding: 0 0 40px;
    margin-bottom: 0;
    position: relative;

    &-container {
        width: 100%;
        background: url('../../assets/quotes-bckgr.jpg') center center no-repeat;
        background-size: cover;
        box-shadow: inset 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
        padding: 40px 0;
        margin-bottom: 50px;
        font-size: 32px;
        line-height: 1.4;
        font-style: italic;
    }

    small {
        font-size: 18px;
        font-style: normal;
        position: absolute;
        right: 0px;
        bottom: 0;
    }
}
</style>
