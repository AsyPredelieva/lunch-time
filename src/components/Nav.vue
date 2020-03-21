<template>
    <nav>
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
    </nav>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style scoped lang="scss">
nav ul {
    min-height: 35px;
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;

    li {
        margin: 0 30px;
        position: relative;

        &:not(:last-child):after {
            content: '';
            width: 1px;
            height: 35px;
            background: rgba(33, 147, 208, 0.3);
            position: absolute;
            top: -7px;
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
</style>
