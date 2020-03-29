<template>
    <div>
        <h2>Today's menu in {{ currentOffer.name }}</h2>
    </div>
</template>

<script>
export default {
    name: 'OfferDetails',
    props: ['offersList'],
    data() {
        return {
            offerId: ''
        }
    },
    computed: {
        currentOffer() {
            return this.offersList[Number(this.$route.params.id) - 1]
            // const currOffer = this.offersList.filter(
            //     offer => Number(offer.id) === Number(this.$route.params.id)
            // )
            // console.log(JSON.parse(currOffer[0]))
            // return currOffer[0]
        }
    },
    created() {
        console.log(Number(this.$route.params.id))
    }
}
</script>

<style scoped lang="scss"></style>
