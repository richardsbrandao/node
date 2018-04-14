import React, { Component } from 'react'
import CommentService from '../service/comment_service'
import Comment from './comment'
import Loading from './loading'

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requestState: 'PROCESSING',
            comments: []
        }
    }

    componentDidMount() {
        const commentService = new CommentService()
        commentService.findAll().
            then((response) => {
                this.setState({comments: response, requestState: 'SUCCESS'})
            })
    }
    
    eachComment(comment) {
        return <Comment title={comment.name} email={comment.email} text={comment.body} />
    }

    render() {
        if(this.state.requestState == 'PROCESSING') {
            return (<Loading />)
        }
        return (
            <div>{this.state.comments.map(this.eachComment)}</div>
        )
    }
}

export default Comments