<template>
    <main class="container-register">
        <div class="container">
            <h2>Register</h2>
            <form class="grid-container" @submit.prevent="submitRegister">
                <div class="grid-half">
                    <div class="form-row">
                        <div class="form-field">
                            <label for="Name">Username</label>
                            <input
                                type="text"
                                id="name"
                                v-model="username"
                                @blur="$v.username.$touch"
                            />
                        </div>
                        <template v-if="$v.username.$error">
                            <p class="error" v-if="!$v.username.required">
                                You have to enter your username.
                            </p>
                            <p class="error" v-else-if="!$v.username.minLegth">
                                Min length of your username should be more than 2 symbols.
                            </p>
                        </template>
                    </div>
                    <div class="form-row">
                        <div class="form-field">
                            <label for="last-name">Last Name</label>
                            <input
                                type="text"
                                id="last-name"
                                v-model="lastName"
                                @blur="$v.lastName.$touch"
                            />
                        </div>
                        <template v-if="$v.lastName.$error">
                            <p class="error" v-if="!$v.lastName.minLegth">
                                Min length of your Last name should be more than 2 symbols.
                            </p>
                        </template>
                    </div>
                    <div class="form-row">
                        <div class="form-field">
                            <label for="department">Department</label>
                            <input
                                type="text"
                                id="department"
                                v-model="department"
                                @blur="$v.department.$touch"
                            />
                        </div>
                        <template v-if="$v.department.$error">
                            <p class="error" v-if="!$v.department.required">
                                Please enter your Department
                            </p>
                            <p class="error" v-else-if="!$v.department.minLegth">
                                Min length of the Department should be more than 2 symbols
                            </p>
                        </template>
                    </div>
                </div>
                <div class="grid-half">
                    <div class="form-row">
                        <div class="form-field">
                            <label for="email">Email</label>
                            <input type="text" id="email" v-model="email" @blur="$v.email.$touch" />
                        </div>
                        <template v-if="$v.email.$error">
                            <p class="error" v-if="!$v.email.required">
                                Please enter your email address.
                            </p>
                            <p class="error" v-else-if="!$v.email.email">
                                Your email is not correct.
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
                            <p class="error" v-if="!$v.password.required">Password is required.</p>
                            <p
                                class="error"
                                v-else-if="!$v.password.minLegth || !$v.password.maxLength"
                            >
                                Passoword should be between 3 and 16 symbols.
                            </p>
                        </template>
                    </div>
                    <div class="form-row">
                        <div class="form-field">
                            <label for="re-password">Repeat password:</label>
                            <input
                                type="password"
                                id="re-password"
                                v-model="repeatPassword"
                                @blur="$v.repeatPassword.$touch"
                            />
                        </div>
                        <template v-if="$v.repeatPassword.$error">
                            <p class="error" v-if="!$v.repeatPassword.sameAs">
                                Password not match.
                            </p>
                        </template>
                    </div>
                </div>
                <div class="grid-full">
                    <button :disabled="$v.$invalid" class="cta-btn">Submit</button>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
import { authenticate } from '../services/authServices'
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength, alphaNum, sameAs } from 'vuelidate/lib/validators'

export default {
    name: 'Register',
    data() {
        return {
            username: '',
            lastName: '',
            department: '',
            email: '',
            password: '',
            repeatPassword: ''
        }
    },
    mixins: [validationMixin, authenticate],
    validations: {
        username: {
            required,
            minLegth: minLength(2)
        },
        lastName: {
            minLegth: minLength(2)
        },
        department: {
            required,
            minLegth: minLength(2)
        },
        email: {
            required,
            email
        },
        password: {
            required,
            minLegth: minLength(3),
            maxLength: maxLength(16),
            alphaNum
        },
        repeatPassword: {
            sameAsPassword: sameAs('password')
        }
    },
    methods: {
        submitRegister() {
            this.$v.$touch()
            if (this.$v.$invalid) {
                return
            }

            this.register(
                this.username,
                this.lastName,
                this.department,
                this.email,
                this.password
            ).then(user => {
                this.$root.$emit('auth', user.authtoken)
                this.$root.$emit('username', user.username)
                this.$router.push('/')
            })
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    margin: 40px auto;

    &-register {
        width: 100%;
        background: url('../assets/register-bckgr.png') center top 120px no-repeat;
        background-size: contain;
    }
}

.grid-full {
    margin: 0 auto;
    text-align: center;
}
</style>
