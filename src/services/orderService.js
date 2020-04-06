import config from '../config/config'

const getAuthToken = () => localStorage.getItem('authtoken')

export const orderService = {
    data() {
        return {
            orderList: []
        }
    },
    methods: {
        addOrder(order, sum) {
            this.$http.defaults.headers['Authorization'] = `Kinvey ${getAuthToken()}`
            return this.$http
                .post(`/appdata/${config.appKey}/orders`, {
                    order,
                    sum
                })
                .catch(err => console.log(err))
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
