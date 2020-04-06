<template>
    <nav>
        <ul>
            <li>
                <router-link to="/" exact>Home</router-link>
            </li>
            <template v-if="isAuthenticated">
                <li class="sub-nav">
                    <router-link to="/offers">Offers</router-link>
                    <ul>
                        <li v-for="offer in offers" :key="offer.id">
                            <router-link :to="`/offers/${offer.name}`">{{
                                offer.name
                            }}</router-link>
                        </li>
                    </ul>
                </li>
                <li class="sub-nav">
                    <router-link to="/orders">Orders</router-link>
                </li>
                <li>
                    <a @click="onLogout" class="logout">Logout</a>
                </li>
            </template>
            <template v-else>
                <li>
                    <router-link to="/login">Login</router-link>
                </li>
                <li>
                    <router-link to="/register">Register</router-link>
                </li>
            </template>
        </ul>
    </nav>
</template>

<script>
// import { authenticate } from '../../services/authServices'
import { offers } from '../../data/offers'

export default {
    name: 'Nav',
    data() {
        return {
            offers
        }
    },
    // mixins: [authenticate],
    methods: {
        onLogout() {
            localStorage.removeItem('username')
            localStorage.removeItem('authtoken')

            this.$root.$emit('auth', null)
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss">
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
            &.router-link-active,
            &:hover {
                color: #79c150;
            }

            &.logout {
                cursor: pointer;
            }
        }

        &.sub-nav {
            position: relative;
            z-index: 1;

            &:hover {
                & > a {
                    padding-bottom: 45px;
                }

                & > ul {
                    display: block;
                }
            }

            & > ul {
                display: none;
                position: absolute;
                top: 59px;
                left: -30px;
                background: #fff;
                min-width: 190px;
                box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);

                li {
                    width: 100%;
                    display: block;
                    margin: 0;

                    &::after {
                        display: none;
                    }

                    a {
                        width: 100%;
                        display: block;
                        padding: 10px 30px;
                        border-bottom: 1px solid rgba(33, 147, 208, 0.3);
                        box-sizing: border-box;
                    }
                }
            }
        }
    }
}
</style>
