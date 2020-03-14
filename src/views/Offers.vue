<template>
    <div class="offers container">
        <h1>Get the best</h1>
        <ul class="offers-tab-container">
            <li v-for="offer in offers" :key="offer.id">
                <a
                    href="#"
                    @click.prevent="changeTab"
                    :class="{ active: isActive }"
                    >{{ offer.name }}</a
                >
            </li>
        </ul>
        <keep-alive>
            <component :is="activeTab"></component>
        </keep-alive>
    </div>
</template>

<script>
import { offers } from '../data/offers'
import Kamenitza from '../components/Offers/Kamenitza'
import Riviera from '../components/Offers/Riviera'
import JuzhenPolah from '../components/Offers/JuzhenPolah'
import DolcePizza from '../components/Offers/DolcePizza'

export default {
    name: 'Offers',
    data() {
        return {
            offers,
            activeTab: offers[0].name
        }
    },
    components: {
        Kamenitza,
        Riviera,
        JuzhenPolah,
        DolcePizza
    },
    computed: {
        isActive(currentTab) {
            return this.activeTab === currentTab ? true : false
        }
    },
    methods: {
        changeTab(e) {
            this.activeTab = e.target.innerHTML
                .toLowerCase()
                .split(' ')
                .join('-')
        }
    }
}
</script>

<style scoped>
.offers-tab-container {
    width: 100%;
    display: flex;
    justify-content: space-between;

    li {
        a {
        }
    }
}
</style>
