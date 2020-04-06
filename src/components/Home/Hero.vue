<template>
    <div class="hero">
        <div class="container">
            <div class="intro">
                <h1>Are you feeling hungry?</h1>
                <p>
                    I know you are fully prepared to make the most important choice of the day.
                </p>
                <router-link to="/offers" class="cta-btn">Get Offers</router-link>
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
    position: relative;
    width: 100%;
    height: 300px;
    background: url(../../assets/hero.jpg) center center no-repeat;
    background-size: cover;
    margin-bottom: 40px;
    box-shadow: inset -1px -1px 7px rgba(0, 0, 0, 0.2);
}

.container {
    margin: 0 auto;
}

.intro {
    width: 45%;
    text-align: left;
    font-size: 20px;
    padding-top: 55px;

    p {
        margin-bottom: 35px;
    }

    .cta-btn {
        font-size: 16px;
        line-height: 1.4;
    }
}

.hero:after {
    animation: shine ease-in 2s 2 reverse;
    animation-fill-mode: forwards;
    content: '';
    background: url('../../assets/shining.png') no-repeat;
    position: absolute;
    top: -5px;
    right: 50%;
    margin-right: -555px;
    width: 150px;
    height: 150px;
    opacity: 0;
    transform: rotate(30deg);
}

/* Active state */

.hero:active:after {
    opacity: 0;
}

@keyframes shine {
    0% {
        opacity: 0;
        -webkit-transform: scale(0.5) rotate(0deg);
        transform: scale(0.5) rotate(0deg);
    }
    70% {
        opacity: 0.5;
        -webkit-transform: scale(1.5) rotate(360deg);
        transform: scale(1.5) rotate(360deg);
    }
    100% {
        opacity: 0;
        -webkit-transform: scale(0.1) rotate(0deg);
        transform: scale(0.1) rotate(0deg);
    }
}
</style>
