<template>
    <header>
        <Logo />
        <Nav />
    </header>
</template>

<script>
import Nav from './Nav'
import Logo from './Logo'

export default {
    name: 'Header',
    components: {
        Logo,
        Nav
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
}
</style>
