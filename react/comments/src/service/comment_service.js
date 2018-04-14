class CommentService {
    url = "https://jsonplaceholder.typicode.com/comments"

    async findAll() {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments', {method: 'get'})
        return await response.json()
    }
}

export default CommentService