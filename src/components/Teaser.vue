<template>
    <div class="teaser">
        <ul>
            <li><strong>Quick and easy</strong> find out the actual menus.</li>
            <li><strong>Fast and furious</strong> make your choice.</li>
            <li>
                <strong>Gently and precisely</strong> order your favourite meal.
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Teaser'
}
</script>

<style scoped lang="scss">
.teaser {
    width: 100%;

    ul {
        display: flex;
        margin-left: -15px;
        margin-right: -15px;

        li {
            flex: 1 1 0px;
            margin: 0 15px;
            border: 1px solid rgba(33, 147, 208, 0.3);
        }
    }
}
</style>
