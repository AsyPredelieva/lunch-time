<template>
    <main class="home">
        <Hero />

        <div class="container">
            <h2>The best time of the day is comming</h2>

            <ul class="teaser grid-container">
                <Teaser v-for="teaser in teasers" :key="teaser.id" :teaser-item="teaser"></Teaser>
            </ul>
        </div>

        <div class="quotes-container" v-if="isAuthenticated">
            <div class="container">
                <Quotes v-for="quote in quotes" :key="quote.id" :quote-item="quote"></Quotes>
            </div>
        </div>

        <div class="info-container" v-if="isAuthenticated">
            <img
                v-parallax="0.2"
                class="parallax-item tomato-left"
                src="../assets/domat_1.png"
                alt="tomato"
            />
            <img
                v-parallax="0.3"
                class="parallax-item tomato-right"
                src="../assets/domat_2.png"
                alt="tomato"
            />
            <img
                v-parallax="0.4"
                class="parallax-item olive"
                src="../assets/olive_1.png"
                alt="olive"
            />
            <img
                v-parallax="0.2"
                class="parallax-item chuska-left"
                src="../assets/chuska_1.png"
                alt="peper"
            />
            <img
                v-parallax="0.5"
                class="parallax-item chuska-right"
                src="../assets/chuska_2.png"
                alt="peper"
            />

            <div class="container">
                <h2>Healthy Eating</h2>
                <div v-if="!articles">
                    <Loader />
                </div>
                <div v-else>
                    <section class="grid-container">
                        <Article
                            v-for="article in articles"
                            :key="article.id"
                            :article-item="article"
                        ></Article>
                    </section>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Hero from '../components/home/Hero'
import Teaser from '../components/home/Teaser'
import Quotes from '../components/home/Quotes'
import Article from '../components/home/Article'
import Loader from '../components/common/Loader'
import { teasers } from '../data/teasers'
import { articleService } from '../services/articleService'
import { quoteService } from '../services/quoteService'

export default {
    name: 'Home',
    data() {
        return {
            teasers
        }
    },
    components: {
        Hero,
        Teaser,
        Quotes,
        Article,
        Loader
    },
    mixins: [articleService, quoteService]
}
</script>

<style scoped lang="scss">
.teaser {
    margin-bottom: 60px;
}

.info-container {
    position: relative;
    padding: 40px 0 60px;
    background-image: url('../assets/info-bckgr.png'), url('../assets/info-bckgr.png');
    background-position: left -150% center, right -150% center;
    background-repeat: no-repeat;

    .parallax-item {
        position: absolute;
        z-index: -1;

        &.tomato-left {
            top: 27%;
            left: 17%;
        }

        &.tomato-right {
            top: 1%;
            right: 3%;
        }

        &.olive {
            top: 21%;
            right: 10%;
        }

        &.chuska-left {
            top: 57%;
            left: 20%;
        }

        &.chuska-right {
            top: 60%;
            right: 12%;
        }
    }

    .container {
        z-index: 1;
    }
}
.quotes-container {
    width: 100%;
    background: url('../assets/quotes-bckgr.jpg') center center no-repeat;
    background-size: cover;
    box-shadow: inset 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
    padding: 40px 0;
    font-size: 32px;
    line-height: 1.4;
    font-style: italic;
}
</style>
