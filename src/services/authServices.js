import config from '../config/config'

const authString = btoa(`${config.appKey}:${config.appSecret}`)

const loginUser = user => {
    localStorage.setItem('username', user.username)
    localStorage.setItem('authtoken', user.authtoken)

    return user
}

export const authService = {
    data() {
        return {
            authtoken: localStorage.getItem('authtoken')
        }
    },
    computed: {
        isAuthenticated() {
            return this.authtoken !== null
        }
    },
    created() {
        this.$root.$on('auth', authtoken => (this.authtoken = authtoken))
    }
}

export const authenticate = {
    methods: {
        register(username, lastName, department, email, password) {
            return this.$http
                .post(`/user/${config.appKey}`, {
                    username,
                    lastName,
                    department,
                    email,
                    password
                })
                .then(res =>
                    loginUser({
                        username: res.data.username,
                        authtoken: res.data._kmd.authtoken
                    })
                )
        },
        login(username, password) {
            return this.$http
                .post(`/user/${config.appKey}/login`, {
                    username,
                    password
                })
                .then(res =>
                    loginUser({
                        username: res.data.username,
                        authtoken: res.data._kmd.authtoken
                    })
                )
        }
    },
    created() {
        this.$http.defaults.headers.post['Authorization'] = `Basic ${authString}`
    }
}
