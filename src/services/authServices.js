import config from '../config/config'

const loginUser = user => {
    localStorage.setItem('name', user.name)
    localStorage.setItem('authtoken', user.authtoken)
}

export const authService = {
    computed: {
        isAuthenticated() {
            return localStorage.getItem('authtoken') !== null
        }
    }
}

export const registerUser = {
    methods: {
        register(name, lastName, department, email, password) {
            const authString = btoa(`${config.appKey}:${config.appSecret}`)

            this.$http.defaults.headers.post['Authorization'] = `Basic ${authString}`
            return this.$http
                .post(`/user/${config.appKey}`, {
                    name,
                    lastName,
                    department,
                    email,
                    password
                })
                .then(res =>
                    loginUser({
                        name: res.data.name,
                        authtoken: res.data._kmd.authtoken
                    })
                )
        }
    }
}
