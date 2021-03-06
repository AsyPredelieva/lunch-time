import config from '../config/config'

const getAuthToken = () => localStorage.getItem('authtoken')

export const quoteService = {
    data() {
        return {
            quotes: []
        }
    },
    created() {
        if (this.isAuthenticated) {
            this.$http.defaults.headers['Authorization'] = `Kinvey ${getAuthToken()}`
            this.$http
                .get(`/appdata/${config.appKey}/quotes`)
                .then(
                    ({ data }) => (this.quotes = data.sort(() => 0.5 - Math.random()).slice(0, 1))
                )
                .catch(err => console.log(err))
        }
    }
}
