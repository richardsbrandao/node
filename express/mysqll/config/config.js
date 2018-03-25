module.exports = {
    'development': {
        'database': {
            'host': 'localhost',
            'username': 'root',
            'password': 'herotrip',
            'database': 'herotrip',
        },
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
        'port': 3100,
        'contextRoot': '/api/v1/herotrip'
    }
}