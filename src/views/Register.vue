<template>
    <main class="container-register">
        <div class="container">
            <h2>Register</h2>
            <form class="grid-container">
                <div class="grid-half">
                    <div class="form-field">
                        <label for="Name">Name</label>
                        <input
                            type="text"
                            id="name"
                            v-model="name"
                            @blur="$v.name.$touch"
                        />
                    </div>
                    <div class="form-field">
                        <label for="last-name">Last Name</label>
                        <input
                            type="text"
                            id="last-name"
                            v-model="lastName"
                            @blur="$v.lastName.$touch"
                        />
                    </div>
                    <div class="form-field">
                        <label for="department">Department</label>
                        <input
                            type="text"
                            id="department"
                            v-model="department"
                            @blur="$v.department.$touch"
                        />
                    </div>
                </div>
                <div class="grid-half">
                    <div class="form-field">
                        <label for="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            v-model="email"
                            @blur="$v.email.$touch"
                        />
                    </div>
                    <div class="form-field">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            v-model="password"
                            @blur="$v.password.$touch"
                        />
                    </div>
                    <div class="form-field">
                        <label for="re-password">Repeat password:</label>
                        <input type="password" id="re-password" />
                    </div>
                </div>
                <div class="grid-full">
                    <button :disabled="$v.invalid" class="cta-btn">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
import {
    required,
    email,
    minLength,
    maxLength,
    alphaNum
} from 'vuelidate/lib/validators'

export default {
    name: 'Register',
    data() {
        return {
            name: '',
            lastName: '',
            department: '',
            email: '',
            password: ''
        }
    },
    validations: {
        name: {
            required,
            minLegth: minLength(2)
        },
        lastName: {
            minLegth: minLength(3)
        },
        department: {
            required,
            minLegth: minLength(3)
        },
        email: {
            required,
            email
        },
        password: {
            required,
            minLegth: minLength(3),
            maxLength: maxLength(8),
            alphaNum
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    margin: 40px auto;

    &-register {
        width: 100%;
        background: url('../assets/register-bckgr.png') center top 120px
            no-repeat;
        background-size: contain;
    }
}

.grid-full {
    margin: 0 auto;
    text-align: center;
}
</style>
