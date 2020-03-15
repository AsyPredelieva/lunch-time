<template>
    <div class="home">
        <Hero></Hero>
        <div class="container">
            <h2>The best time of the day is comming</h2>
            <Teaser></Teaser>
        </div>
        <Quotes></Quotes>
    </div>
</template>

<script>
import Hero from '../components/Home/Hero'
import Teaser from '../components/Home/Teaser'
import Quotes from '../components/Home/Quotes'

export default {
    name: 'Home',
    components: {
        Hero,
        Teaser,
        Quotes
    }
}
</script>
