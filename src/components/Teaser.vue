<template>
    <div class="teaser">
        <ul>
            <li class="quick">
                <strong>Quick and easy</strong> find out the actual menus.
            </li>
            <li class="easy">
                <strong>Fast and furious</strong> make your choice.
            </li>
            <li class="gently">
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
            padding: 120px 20px 20px;

            &.quick {
                background: url(../assets/icon-quick-easy.png) center 20px
                    no-repeat;
                background-size: 85px;
            }

            &.easy {
                background: url(../assets/icon-fast.png) center -50px no-repeat;
                background-size: 155px;
            }

            &.gently {
                background: url(../assets/icon-gentle.png) center 30px no-repeat;
                background-size: 95px;
            }

            strong {
                display: block;
                font-size: 20px;
            }
        }
    }
}
</style>
