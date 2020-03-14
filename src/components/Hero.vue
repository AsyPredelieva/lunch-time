<template>
    <div class="hero">
        <div class="container">
            <div class="intro">
                <h1>Are you feeling hungry?</h1>
                <p>
                    I know you are fully prepared to make the most important
                    choice of the day.
                </p>
                <p class="quote">
                    <strong
                        >"Let your lunch breake be longer than usual."</strong
                    >
                    <small>- Master Chef Yoda</small>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero'
}
</script>

<style scoped lang="scss">
.hero {
    width: 100%;
    height: 300px;
    background: url(../assets/hero.jpg) center center no-repeat;
    background-size: cover;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);

    .quote {
        position: relative;

        strong {
            display: block;
            font-size: 16px;
        }

        small {
            float: right;
            font-style: italic;
        }
    }
}

.container {
    margin: 0 auto;
}

.intro {
    width: 45%;
    text-align: left;
    font-size: 20px;
    padding-top: 63px;
}
</style>
