<template>
    <main class="login-container">
        <div class="container">
            <h2>Lunch time</h2>
            <form @submit.prevent="submitLogin">
                <div class="form-row">
                    <div class="form-field">
                        <label for="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            v-model.trim="username"
                            @blur="$v.username.$touch"
                        />
                    </div>
                    <template v-if="$v.username.$error">
                        <p class="error" v-if="!$v.username.required">Please enter your name.</p>
                        <p class="error" v-else-if="!$v.username.minLength">
                            Min length of your name should be more than 2 symbols
                        </p>
                    </template>
                </div>
                <div class="form-row">
                    <div class="form-field">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            v-model="password"
                            @blur="$v.password.$touch"
                        />
                    </div>
                    <template v-if="$v.password.$error">
                        <p class="error" v-if="!$v.password.required">
                            Please enter your password.
                        </p>
                        <p
                            class="error"
                            v-else-if="!$v.password.minLength || !$v.password.maxLength"
                        >
                            Passoword should be between 3 and 16 symbols.
                        </p>
                    </template>
                </div>
                <button class="cta-btn" :disabled="$v.$invalid">Log in</button>
            </form>
        </div>
    </main>
</template>

<script>
import router from '../router'
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
    name: 'Login',
    mixins: [validationMixin],
    data() {
        return {
            username: '',
            password: '',
            authToken: ''
        }
    },
    validations: {
        username: {
            required,
            minLength: minLength(2)
        },
        password: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(16)
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
