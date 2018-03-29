import { Fight } from "../models/fight"
import cacheManager from "../../config/cache_manager"

let controller = {}

async function findFightsUsingCache(params) {
    const key = params.enemyId + "_" + params.heroId
    const cache = await cacheManager.get(key)
    if(cache != null) {
        return cache
    }
    const value = await Fight.findBy({enemy_id: params.enemyId, hero_id: params.heroId})
    cacheManager.set(key, JSON.stringify(value))
    return value
}

controller.findAll = async (request, response) => {
    console.log('FindAll FightsController')
    findFightsUsingCache(request.query)
        .then((fights) => {
            response.send(fights)
        });
}

export default controller