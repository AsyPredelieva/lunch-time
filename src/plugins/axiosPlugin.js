import axios from 'axios'

export default {
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://baas.kinvey.com',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

// const authString = btoa(`${config.appKey}:${config.appSecret}`)
