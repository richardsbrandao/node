import uploader from '../../config/uploader'
import { Hero } from '../models/hero'
let controller = {}

controller.create = async (request, response) => {
    const heroId = request.params.id
    Hero.findById(heroId)
        .then(() => {
            response.send({ heroId })
        })
    // find by id
    
    // const upload = uploader('userfile')
    // upload(request, response, function(err) {
	// 	response.end('File is uploaded')
	// })


    // console.log(request.files)
    // save photo to user
}

export default controller