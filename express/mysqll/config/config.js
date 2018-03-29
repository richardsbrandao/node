const config = {
    'development': {
        'database': {
            'host': 'localhost',
            'username': 'root',
            'password': 'herotrip',
            'database': 'herotrip',
        },
        'redis': {
            'host': 'localhost',
            'port': 6379
        },
        'expirationCacheInSeconds': 5,
        'port': 3100,
        'contextRoot': '/api/v1/herotrip'
    },
    'production': {
        'database': {
            'host': process.env.DATABASE_HOST,
            'username': process.env.DATABASE_USERNAME,
            'password': process.env.DATABASE_PASSWORD,
            'database': process.env.DATABASE_DATABASE,
        },
        'redis': {
            'host': process.env.REDIS_HOST,
            'port': process.env.REDIS_PORT
        },
        'expirationCacheInSeconds': 3600,
        'port': 3100,
        'contextRoot': '/api/v1/herotrip'
    }
}

const env = process.env.NODE_ENV || 'development'
module.exports = config[env]