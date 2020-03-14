<template>
    <div class="offers container">
        <ul class="offers-tab-container">
            <li>
                <button @click="changeTab('kamenitza-menu')">Kamenitza</button>
            </li>
            <li>
                <button @click="changeTab('juzhen-menu')">Juzhen polah</button>
            </li>
            <li>
                <button @click="changeTab('riviera-menu')">Riviera</button>
            </li>
            <li>
                <button @click="changeTab('pizza-menu')">Dolce Pizza</button>
            </li>
        </ul>
        <keep-alive>
            <component :is="activeTab"></component>
        </keep-alive>
    </div>
</template>

<script>
import KamenitzaMenu from "../components/Offers/KamenitzaMenu";

export default {
    name: "Offers",
    data() {
        return {
            activeTab: "kamenitza-menu"
        };
    },
    components: {
        KamenitzaMenu
    },
    method: {
        changeTab(currentTab) {
            this.activeTab = currentTab;
        }
    }
};
</script>

<style scoped>
.offers-tab-container {
    width: 100%;
    display: flex;
}
</style>