import redis from "redis"
import configs from "./config"
import {promisify} from 'util';


class Redis {
    constructor(config) {
        this.redisClient = redis.createClient(config['port'], config['host'])
        this.getAsync = promisify(this.redisClient.get).bind(this.redisClient);
    }

    get(key) {
        return this.getAsync(key)
    }

    set(key, value) {
        this.redisClient.set(key, value)
    }

    set(key, value, expirationInSeconds) {
        this.redisClient.set(key, value, 'EX', expirationInSeconds)
    }
}

module.exports = new Redis(configs['redis'])