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
import { authenticate } from '../services/authServices'
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    mixins: [validationMixin, authenticate],
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
            this.login(this.username, this.password).then(user => {
                this.$root.$emit('logged-in', user.authtoken)
                this.$router.push('/')
            })
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
