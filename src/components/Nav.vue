<template>
    <div id="nav">
        <div class="logo-container">
            <img src="../assets/logo.png" class="logo" alt="Lunch for break" />
        </div>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/offers">Offers</router-link>
            </li>
            <li>
                <router-link to="/login">Login</router-link>
            </li>
            <li>
                <router-link to="/register">Register</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style scoped lang="scss">
#nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 3px solid #2293d0;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.3);

    .logo-container {
        width: 110px;
        margin: 5px 20px;
    }

    ul {
        list-style: none;
        display: flex;
        margin: 0;

        li {
            margin: 0 30px;
            position: relative;

            &:not(:last-child):after {
                content: '|';
                font-size: 18px;
                color: #42b983;
                position: absolute;
                top: -3px;
                right: -30px;
            }

            a {
                text-decoration: none;
                color: #545454;
                font-weight: 500;
                transition: all 300ms linear;

                &.router-link-exact-active,
                &:hover {
                    color: #79c150;
                }
            }
        }
    }
}
</style>
