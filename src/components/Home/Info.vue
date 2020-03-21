<template>
    <section class="info">
        <article>
            <h3>Add more fruit and vegetables to your diet</h3>
            <p>
                Fruit and vegetables are low in calories and nutrient dense,
                which means they are packed with vitamins, minerals,
                antioxidants, and fiber. Focus on eating the recommended daily
                amount of at least five servings of fruit and vegetables and it
                will naturally fill you up and help you cut back on unhealthy
                foods. A serving is half a cup of raw fruit or veg or a small
                apple or banana, for example. Most of us need to double the
                amount we currently eat.
            </p>
        </article>
        <article>
            <h3>How to increase your intake:</h3>
            <ul class="bullet">
                <li>
                    Add antioxidant-rich berries to your favorite breakfast
                    cereal
                </li>
                <li>
                    Eat a medley of sweet fruit—oranges, mangos, pineapple,
                    grapes—for dessert
                </li>
                <li>
                    Swap your usual rice or pasta side dish for a colorful salad
                </li>
                <li>
                    Instead of eating processed snack foods, snack on vegetables
                    such as carrots, snow peas, or cherry tomatoes along with a
                    spicy hummus dip or peanut butter
                </li>
            </ul>
        </article>
    </section>
</template>

<script>
export default {
    name: 'Info'
}
</script>

<style scoped lang="scss">
.info {
    width: 100%;
    display: flex;
    text-align: left;

    article {
        /* width: calc(50% - 30px);
        flex-basis: calc(50% - 30px); */
        flex: 1 1 0px;
        margin: 0 15px;
        border: 1px solid rgba(33, 147, 208, 0.3);
        /* border-radius: 20px; */
        background: rgba(255, 255, 255, 0.75);
        padding: 20px;
    }
}
</style>
