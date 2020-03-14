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
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 15px;
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

img {
    max-width: 100%;
}

#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 16px;
    line-height: 1.4;
}

.container {
    width: 960px;
    max-width: 100%;
    margin: 40px auto;
}

.grid-half {
    max-width: calc(50% - 20px);
    flex-basis: calc(50% - 20px);
    padding: 0 10px;
    flex: 0 0 auto;
    flex-grow: 1;
}
</style>
