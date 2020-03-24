<template>
    <div id="app">
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from './components/core/Header.vue'
import Footer from './components/core/Footer.vue'

export default {
    name: 'App',
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
