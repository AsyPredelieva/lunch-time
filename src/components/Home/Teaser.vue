<template>
    <li
        :class="[
            {
                quick: teaserItem.isQuick,
                easy: teaserItem.isEasy,
                gently: teaserItem.isGentle
            },
            'grid-aside'
        ]"
    >
        <strong>{{ teaserItem.title }}</strong>
        {{ teaserItem.description }}
    </li>
</template>

<script>
export default {
    name: 'Teaser',
    props: {
        teaserItem: {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            isQuick: {
                type: Boolean,
                default: false
            },
            isEasy: {
                type: Boolean,
                default: false
            },
            isGentle: {
                type: Boolean,
                default: false
            }
        }
    }
}
</script>

<style scoped lang="scss">
li {
    border: 1px solid rgba(33, 147, 208, 0.3);
    padding: 120px 20px 20px;
    box-sizing: border-box;
    text-align: center;

    &.quick {
        background: url(../../assets/icon-quick-easy.png) center 20px no-repeat;
        background-size: 85px;
    }

    &.easy {
        background: url(../../assets/icon-fast.png) center -50px no-repeat;
        background-size: 155px;
    }

    &.gently {
        background: url(../../assets/icon-gentle.png) center 30px no-repeat;
        background-size: 95px;
    }

    strong {
        display: block;
        font-size: 20px;
    }
}

/* Responsive */
@media screen and (max-width: 960px) {
    li strong {
        font-size: 18px;
    }
}
</style>
