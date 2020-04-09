import config from '../config/config'

const authString = btoa(`${config.appKey}:${config.appSecret}`)

const loginUser = user => {
    localStorage.setItem('username', user.username)
    localStorage.setItem('authtoken', user.authtoken)
    localStorage.setItem('userid', user.userId)

    return user
}

export const authService = {
    data() {
        return {
            authtoken: localStorage.getItem('authtoken'),
            usernamen: localStorage.getItem('username')
        }
    },
    computed: {
        isAuthenticated() {
            return this.authtoken !== null
        }
    },
    created() {
        this.$root.$on('auth', authtoken => (this.authtoken = authtoken))
        this.$root.$on('username', username => (this.usernamen = username))
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
                        authtoken: res.data._kmd.authtoken,
                        userId: res.data._id
                    })
                )
                .catch(err => console.log(err))
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
                        authtoken: res.data._kmd.authtoken,
                        userId: res.data._id
                    })
                )
                .catch(err => console.log(err))
        }
    },
    created() {
        this.$http.defaults.headers.post['Authorization'] = `Basic ${authString}`
    }
}
