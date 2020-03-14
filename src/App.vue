<template>
    <div id="app">
        <Nav></Nav>
        <router-view />
    </div>
</template>

<script>
import Nav from './components/Nav'

export default {
    name: 'App',
    components: {
        Nav
    }
}
</script>

<style lang="scss">
body,
div,
p,
h1,
h2,
h3,
h4,
h5,
h6,
span,
ul,
ol,
li {
    padding: 0;
    margin: 0;
}

h1 {
    font-size: 28px;
    margin-bottom: 20px;
}

h2 {
    color: #314a57;
    font-size: 24px;
    line-height: 1.5;
    padding-bottom: 17px;
    margin-bottom: 40px;
    text-align: center;
    position: relative;
    display: inline-block;
    border-bottom: 3px solid rgba(33, 147, 208, 0.3);

    &:before {
        content: '';
        width: 47px;
        height: 47px;
        background: #fff;
        display: inline-block;
        position: absolute;
        left: 50%;
        bottom: -25px;
        margin-left: -22px;
    }

    &:after {
        content: '';
        background: url('./assets/icon-headings.png') center center no-repeat;
        background-size: 35px;
        width: 35px;
        height: 35px;
        display: block;
        position: absolute;
        left: 50%;
        margin-left: -17px;
    }
}

p,
ul,
ol {
    margin-bottom: 20px;
}

ul {
    list-style: none;
    list-style-position: inside;

    li:not(:last-child) {
        margin-bottom: 7px;
    }
}

a {
    text-decoration: none;
    color: #79c150;
}

img {
    max-width: 100%;
}

#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #314a57;
    font-size: 16px;
    line-height: 1.4;
}

.container {
    width: 960px;
    max-width: 100%;
    margin: 40px auto;
    text-align: center;
}

.grid-half {
    max-width: calc(50% - 20px);
    flex-basis: calc(50% - 20px);
    padding: 0 10px;
    flex: 0 0 auto;
    flex-grow: 1;
}
</style>
