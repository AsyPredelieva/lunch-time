<template>
    <footer>
        <Nav />
        <Logo />
        <small>© 2013-2020 - Asy LTD - All Rights Reserved.</small>
    </footer>
</template>

<script>
import Nav from './Nav'
import Logo from './Logo'

export default {
    components: {
        Nav,
        Logo
    }
}
</script>

<style lang="scss">
footer {
    width: 100%;
    min-height: 200px;
    border-top: 3px solid rgba(33, 147, 208, 0.3);
    padding: 20px 0 10px;
    background: url(../../assets/footer-bckgr.jpg) no-repeat;
    background-size: cover;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    nav {
        display: inline-block;
        margin: 0 auto;

        ul li.sub-nav {
            &:hover,
            &:focus {
                & > a {
                    padding-top: 45px;
                }

                & > ul {
                    display: block;
                }
            }

            & > ul {
                top: -194px;
                box-shadow: 1px -1px 5px rgba(0, 0, 0, 0.2);
            }
        }
    }

    .logo-container {
        width: 80px;
    }

    .logo-container,
    small {
        align-self: center;
    }
}
</style>
