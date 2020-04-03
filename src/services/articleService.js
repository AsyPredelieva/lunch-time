import config from '../config/config'

const getAuthToken = () => localStorage.getItem('authtoken')

export const articleService = {
    data() {
        return {
            articles: []
        }
    },
    created() {
        this.$http.defaults.headers['Authorization'] = `Kinvey ${getAuthToken()}`
        this.$http
            .get(`/appdata/${config.appKey}/articles`)
            .then(({ data }) => (this.articles = data))
    }
}
