import config from '../config/config'

const getAuthToken = () => localStorage.getItem('authtoken')

export const offerService = {
    data() {
        return {
            offers: []
        }
    },
    created() {
        if (this.isAuthenticated) {
            this.$http.defaults.headers['Authorization'] = `Kinvey ${getAuthToken()}`
            this.$http
                .get(`/appdata/${config.appKey}/offers`)
                .then(({ data }) => (this.offers = data))
                .catch(err => console.error(err))
        }
    }
}
