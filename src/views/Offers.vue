<template>
    <div class="offers container">
        <h1>Get the best</h1>
        <ul class="offers-tab-container">
            <li v-for="offer in offers" :key="offer.id">
                <a
                    href="#"
                    @click.prevent="changeTab(offer, $event)"
                    :class="{ active: offer.isActive }"
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
    computed: {},
    methods: {
        changeTab(offer, e) {
            this.activeTab = e.target.innerHTML
                .toLowerCase()
                .split(' ')
                .join('-')
            this.offers.map(m => (m.isActive = false))
            offer.isActive = true
        }
    },
    created() {
        this.offers[0].isActive = true
    }
}
</script>

<style scoped lang="scss">
.offers-tab-container {
    width: 100%;
    display: flex;
    justify-content: space-between;

    li {
        margin: 0;
        flex: 1 1 0px;

        &:last-child a {
            border-right: 1px solid rgba(33, 147, 208, 0.3);
        }
        a {
            color: #545454;
            font-size: 18px;
            line-height: 1.3;
            font-weight: 500;
            display: block;
            padding: 10px 20px;
            border-left: 1px solid rgba(33, 147, 208, 0.3);
            border-top: 1px solid rgba(33, 147, 208, 0.3);
            border-bottom: 1px solid rgba(33, 147, 208, 0.3);
            transition: all 300ms linear;

            &.active,
            &:hover,
            &:focus {
                background: #79c150;
                color: #fff;
            }
        }
    }
}
</style>
