import mysql from "promise-mysql"

const connection = {
    pool: null
} 

module.exports = {
    connect: (config) => {
        connection.pool = mysql.createPool({
            host: config['host'],
            user: config['username'],
            password: config['password'],
            database: config['database']
        })
    },
    get: () => {
        return connection.pool
    }
}