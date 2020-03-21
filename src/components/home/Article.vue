<template>
    <article>
        <h3>{{ articleItem.title }}</h3>
        <p v-if="articleItem.description.length === 1">
            {{ articleItem.description[0] }}
        </p>
        <ul class="bullet" v-else-if="articleItem.description.length > 1">
            <li
                v-for="(descriptionItem, index) in articleItem.description"
                :key="index"
            >
                {{ descriptionItem }}
            </li>
        </ul>
    </article>
</template>

<script>
export default {
    name: 'Article',
    props: {
        articleItem: {
            title: {
                type: String,
                require: true
            },
            description: {
                type: Array,
                require: true
            }
        }
    }
}
</script>

<style scoped lang="scss">
article {
    width: calc(50% - 30px);
    flex-basis: calc(50% - 30px);
    margin: 0 15px;
    border: 1px solid rgba(33, 147, 208, 0.3);
    background: rgba(255, 255, 255, 0.75);
    padding: 20px;
    box-sizing: border-box;
}
</style>
