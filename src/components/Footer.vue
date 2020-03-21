<template>
    <footer>
        <Nav />
        <p>
            <small>© 2013-2020 - Asy LTD - All Rights Reserved.</small>
        </p>
    </footer>
</template>

<script>
import Nav from './Nav'

export default {
    components: {
        Nav
    }
}
</script>

<style scoped lang="scss">
footer {
    width: 100%;
    min-height: 300px;
    border-top: 3px solid rgba(33, 147, 208, 0.3);
    background: url('../assets/footer-bcgr.png') center center no-repeat;
    background-size: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    nav {
        display: inline-block;
        margin: 20px auto;
    }

    p {
        align-self: center;
    }
}
</style>
