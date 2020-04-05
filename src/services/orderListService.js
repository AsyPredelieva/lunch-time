import config from '../config/config'

const getAuthToken = () => localStorage.getItem('authtoken')

export const orderListService = {
    data() {
        return {
            orderList: []
        }
    },
    created() {
        if (this.isAuthenticated) {
            this.$http.defaults.headers['Authorization'] = `Kinvey ${getAuthToken()}`
            this.$http.get(`/appdata/${config.appKey}/orders`).then(({ data }) => {
                data.sort((a, b) => new Date(b._kmd.lmt) - new Date(a._kmd.lmt))
                this.orderList = data
            })
        }
    }
}
