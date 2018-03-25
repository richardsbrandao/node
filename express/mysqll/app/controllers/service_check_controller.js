
let controller = {}

controller.check = async (request, response) => {
    console.log('Service Check')
    response.status(200).end()
}

export default controller