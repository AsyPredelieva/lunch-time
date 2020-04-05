import config from '../config/config'

const getAuthToken = () => localStorage.getItem('authtoken')

export const orderService = {
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
    }
}
