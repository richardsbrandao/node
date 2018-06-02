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
        'aws': {
            'secretAccessKey': process.env.SECRET_ACCESS_KEY,
            'accessKeyId': process.env.ACCESS_KEY_ID,
            'region': 'us-east-1',
            's3': {
                'bucketName': process.env.BUCKET_NAME
            }
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
        'aws': {
            'secretAccessKey': process.env.SECRET_ACCESS_KEY,
            'accessKeyId': process.env.ACCESS_KEY_ID,
            's3': {
                'bucketName': process.env.BUCKET_NAME
            }
        },
        'expirationCacheInSeconds': 3600,
        'port': 3100,
        'contextRoot': '/api/v1/herotrip'
    }
}

const env = process.env.NODE_ENV || 'development'
export default config[env]