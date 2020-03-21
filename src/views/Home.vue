<template>
    <div class="home">
        <Hero />

        <div class="container">
            <h2>The best time of the day is comming</h2>

            <ul class="teaser">
                <Teaser
                    v-for="teaser in teasers"
                    :key="teaser.id"
                    :teaser-item="teaser"
                ></Teaser>
            </ul>
        </div>

        <Quotes />

        <div class="info-container">
            <div class="container">
                <h2>Healthy Eating</h2>

                <section class="info">
                    <Article
                        v-for="article in articles.slice(0, 2)"
                        :key="article.id"
                        :article-item="article"
                    ></Article>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import Hero from '../components/home/Hero'
import Teaser from '../components/home/Teaser'
import Quotes from '../components/home/Quotes'
import Article from '../components/home/Article'
import { teasers } from '../data/teasers'
import { articles } from '../data/articles'

export default {
    name: 'Home',
    data() {
        return {
            teasers,
            articles
        }
    },
    components: {
        Hero,
        Teaser,
        Quotes,
        Article
    }
}
</script>

<style scoped lang="scss">
.teaser {
    display: flex;
    margin: 0 -15px 60px;
}

.info {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
    text-align: left;

    &-container {
        padding: 40px 0 60px;
        background-image: url('../assets/info-bckgr.png'),
            url('../assets/info-bckgr.png');
        background-position: left -150% center, right -150% center;
        background-repeat: no-repeat;
    }
}
</style>
