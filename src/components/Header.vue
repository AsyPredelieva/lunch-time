<template>
    <header>
        <div class="logo-container">
            <img src="../assets/logo.png" class="logo" alt="Lunch for break" />
        </div>
        <Nav />
    </header>
</template>

<script>
import Nav from './Nav'

export default {
    name: 'Header',
    components: {
        Nav
    },
    created() {
        console.log(this.logo)
    }
}
</script>

<style scoped lang="scss">
header {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 3px solid rgba(33, 147, 208, 0.3);
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);

    .logo-container {
        width: 110px;
        margin: 5px 20px;
    }
}
</style>
