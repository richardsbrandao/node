import { Hero } from "../models/hero"
let controller = {}

controller.findAll = async (request, response) => {
    console.log('FindAll HerosController')
    const heros = await Hero.findAll()
    response.send(heros.map((hero) => { return hero.toJson() }))
}

export default controller