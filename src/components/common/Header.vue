<template>
    <header>
        <Logo />
        <div class="nav-container">
            <span class="welcome-box" v-if="isAuthenticated">Welcome, {{ usernamen }}</span>
            <Nav :is-top="isTopNav"></Nav>
        </div>
    </header>
</template>

<script>
import Nav from './Nav'
import Logo from './Logo'

export default {
    name: 'Header',
    data() {
        return {
            isTopNav: true
        }
    },
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

.nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.welcome-box {
    font-size: 16px;
    padding-right: 80px;
    background: url('../../assets/welcome-icon.png') right center no-repeat;
    background-size: 50px;
    min-height: 71px;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 640px) {
    header {
        height: 70px;
    }

    .welcome-box {
        font-size: 14px;
        padding-right: 30px;
        background-size: 25px;
        min-height: 55px;
    }
}
</style>
