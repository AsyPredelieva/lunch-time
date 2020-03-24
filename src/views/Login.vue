<template>
    <main class="login-container">
        <div class="container">
            <h2>Lunch time</h2>
            <form @submit.prevent="submitLogin">
                <div class="form-field">
                    <label for="username">Username</label>
                    <input type="text" id="username" v-model.trim="username" />
                </div>
                <div class="form-field">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="password" />
                </div>
                <button class="cta-btn">Log in</button>
            </form>
        </div>
    </main>
</template>

<script>
import router from '../router'

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
            authToken: ''
        }
    },
    methods: {
        submitLogin() {
            const appKey = 'kid_Sy8OICVII'
            const appSecret = 'f5f97678c4f144348a8ff2ec30c54e4d'
            const authString = btoa(`${this.username}:${this.password}`)

            const options = {
                method: 'POST',
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                }),
                headers: {
                    Authorization: `Basic ${authString}`,
                    'Content-Type': 'application/json'
                }
            }

            fetch(`https://baas.kinvey.com/user/${appKey}/login`, options)
                .then(res => res.json())
                // .then(data => console.log(data))
                .then(data => (this.authToken = data._kmd.authtoken))
            router.push('../offers')
        }
    }
}
</script>

<style scoped lang="scss">
.login-container {
    width: 100%;
    background: url('../assets/login-bckgr.png') right top 40px no-repeat;
    background-size: contain;
}

.container {
    margin: 40px auto;
}

form {
    width: 465px;
    max-width: 100%;
    margin: 0 auto;
}
</style>
