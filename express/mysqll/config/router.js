import herosController from "../app/controllers/heros_controller"
import serviceCheckController from "../app/controllers/service_check_controller"
import express from "express"
const router = express.Router()

module.exports = () => {
    router.get('/heros', (request, response) => { 
        herosController.findAll(request, response) 
    });
    router.get('/service_check', (request, response) => {
        serviceCheckController.check(request, response)
    });
    return router
}