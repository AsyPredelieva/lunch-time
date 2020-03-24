<template>
    <main class="home">
        <Hero />

        <div class="container">
            <h2>The best time of the day is comming</h2>

            <ul class="teaser grid-container">
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

                <section class="grid-container">
                    <Article
                        v-for="article in articles.slice(0, 2)"
                        :key="article.id"
                        :article-item="article"
                    ></Article>
                </section>
            </div>
        </div>
    </main>
</template>

<script>
import Hero from '../components/home/Hero'
import Teaser from '../components/home/Teaser'
import Quotes from '../components/home/Quotes'
import Article from '../components/home/Article'
import { teasers } from '../data/teasers'
// import { articles } from '../data/articles'

export default {
    name: 'Home',
    data() {
        return {
            teasers,
            articles: [],
            authToken: ''
        }
    },
    components: {
        Hero,
        Teaser,
        Quotes,
        Article
    },
    methods: {
        getArticles() {
            // const appKey = 'kid_Sy8OICVII'
            // const appSecret = 'f5f97678c4f144348a8ff2ec30c54e4d'
            // fetch(`https://baas.kinvey.com/appdata/${appKey}/articles`, {
            //     method: 'GET',
            //     headers: {
            //         Authorization: `Kinvey ${this.authToken}`,
            //         'Content-Type': 'application/json'
            //     }
            // })
            //     .then(res => res.json())
            //     .then(data => (this.articles = data))
        }
    },
    mounted() {
        // this.getArticles()
    }
}
</script>

<style scoped lang="scss">
.teaser {
    margin-bottom: 60px;
}

.info-container {
    padding: 40px 0 60px;
    background-image: url('../assets/info-bckgr.png'),
        url('../assets/info-bckgr.png');
    background-position: left -150% center, right -150% center;
    background-repeat: no-repeat;
}
</style>
