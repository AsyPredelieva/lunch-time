import config from '../config/config'

const getAuthToken = () => localStorage.getItem('authtoken')

export const myOrderService = {
    data() {
        return {
            myOrderList: [],
            userId: localStorage.getItem('userid')
        }
    },
    created() {
        this.$http.defaults.headers['Authorization'] = `Kinvey ${getAuthToken()}`
        this.$http
            .get(`/appdata/${config.appKey}/orders`)
            .then(({ data }) => {
                const myOrder = data.filter(e => e._acl.creator === this.userId)
                myOrder.sort((a, b) => new Date(b._kmd.lmt) - new Date(a._kmd.lmt))

                this.myOrderList = myOrder
            })
            .catch(err => console.log(err))
    }
}
