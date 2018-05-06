require('isomorphic-fetch')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        response.json()
            .then((json) => console.log(json))
    })

