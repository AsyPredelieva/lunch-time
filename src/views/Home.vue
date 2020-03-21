<template>
    <div class="home">
        <Hero />
        <div class="container">
            <h2>The best time of the day is comming</h2>
            <Teaser />
        </div>
        <Quotes />
        <div class="info-container">
            <div class="container">
                <h2>Healthy Eating</h2>
                <Info />
            </div>
        </div>
    </div>
</template>

<script>
import Hero from '../components/Home/Hero'
import Teaser from '../components/Home/Teaser'
import Quotes from '../components/Home/Quotes'
import Info from '../components/Home/Info'

export default {
    name: 'Home',
    components: {
        Hero,
        Teaser,
        Quotes,
        Info
    }
}
</script>

<style scoped>
.info-container {
    padding: 40px 0 60px;
    background: url('../assets/info-bckgr.png') left -150% center no-repeat;
}
</style>
