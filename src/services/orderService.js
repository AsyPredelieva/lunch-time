import config from '../config/config'

const getAuthToken = () => localStorage.getItem('authtoken')

export const orderService = {
    methods: {
        addOrder(orders) {
            this.$http.defaults.headers['Authorization'] = `Kinvey ${getAuthToken()}`
            return this.$http
                .post(`/appdata/${config.appKey}/orders`, {
                    orders
                })
                .then(data => console.log(data))
                .catch(err => console.log(err))
        }
    }
}
