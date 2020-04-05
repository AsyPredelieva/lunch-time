import config from '../config/config'

const getAuthToken = () => localStorage.getItem('authtoken')

export const myOrderService = {
    data() {
        return {
            myOrders: []
        }
    },
    created() {
        if (this.isAuthenticated) {
            this.$http.defaults.headers['Authorization'] = `Kinvey ${getAuthToken()}`
            this.$http.get(`/appdata/${config.appKey}/orders`).then(({ data }) => {
                data.sort((a, b) => new Date(b._kmd.lmt) - new Date(a._kmd.lmt))
                this.myOrders = data
            })
        }
    }
}
