<template>
    <main class="container">
        <router-view :offers-list="offers"></router-view>
    </main>
</template>

<script>
import { offers } from '../data/offers'

export default {
    name: 'Offers',
    data() {
        return {
            offers
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    margin: 40px auto;
}
</style>
