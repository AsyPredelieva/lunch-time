<template>
    <div class="home">
        <Hero></Hero>
        <div class="container">
            <h2>The best time of the day is comming</h2>
            <Teaser></Teaser>
        </div>
    </div>
</template>

<script>
import Hero from '../components/Hero'
import Teaser from '../components/Teaser'

export default {
    name: 'Home',
    components: {
        Hero,
        Teaser
    }
}
</script>
