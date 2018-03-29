import database from "../../config/database"
import { Hero } from "./hero"
import { Enemy } from "./enemy"

function paramsToWhereCondition(params) {
    return Object.keys(params).reduce((result, item) => {
        const keyword = result == '' ? ' where ' : ' and '
        if(params[item])
            result += `${keyword} ${item} = ${params[item]}`
        return result
    }, '')
}

class Fight {

    constructor(row) {
        this.id = row['id']
        this.winner = row['winner']
        this.description = row['description']
        this.enemy = row['id']
        this.hero = new Hero({id: row['hero_id'], name: row['hero_name']})
        this.enemy = new Enemy({id: row['enemy_id'], name: row['enemy_name']})
    }

    static findBy(params) {
        const connection = database.get()
        const where = paramsToWhereCondition(params) 
        return connection.query(`SELECT f.*, h.name as hero_name, e.name as enemy_name from fight f inner join enemy e on e.id = f.enemy_id inner join hero h on h.id = f.hero_id ${where}`)
                            .then((rows) => {
                                return rows.map((row) => {
                                    return new Fight(row)
                                })
                            })
                            .catch((errors) => {
                                console.log(errors)
                            })
    }


}

export { Fight }