import herosController from "../app/controllers/heros_controller"
import fightsController from "../app/controllers/fights_controller"
import heroPhotoController from '../app/controllers/hero_photos_controller'
import serviceCheckController from "../app/controllers/service_check_controller"
import express from "express"
const router = express.Router()

module.exports = () => {
    router.get('/heros', (request, response) => { 
        herosController.findAll(request, response) 
    });
    router.post('/heros/:id/photos', (request, response) => {
        heroPhotoController.create(request, response)
    });
    router.get('/service_check', (request, response) => {
        serviceCheckController.check(request, response)
    });
    router.get('/fights', (request, response) => {
        fightsController.findAll(request, response);
    });
    return router
}