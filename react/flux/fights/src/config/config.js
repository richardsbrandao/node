const CONFIG = {
    'development': {
        api_endpoint: 'http://localhost:3100/api/v1/herotrip'
    },
    'production': {
        api_endpoint: `http://${process.env.API_ENDPOINT}/api/v1/herotrip`
    }
}

const env = process.env.NODE_ENV || 'development'
module.exports = CONFIG[env]

