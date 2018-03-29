import redisClient from "./redis"
import config from "./config"

class CacheManager {
    constructor(expirationCacheInSeconds) {
        this.expirationCacheInSeconds = expirationCacheInSeconds
    }

    set(key, value) {
        redisClient.set(key, value, this.expirationCacheInSeconds)
    }

    get(key) {
        return redisClient.get(key)
    }
}

module.exports = new CacheManager(config['expirationCacheInSeconds'])