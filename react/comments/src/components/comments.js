import React, { Component } from 'react'
import CommentService from '../service/comment_service'
import Comment from './comment'
import Loading from './loading'
import RequestType from '../models/request_type'

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requestState: RequestType.PROCESSING,
            comments: []
        }
        this.update = this.update.bind(this)
    }

    componentDidMount() {
        const commentService = new CommentService()
        commentService.findAll().
            then((response) => {
                this.setState({comments: response, requestState: RequestType.SUCCESS})
            })
    }
    
    update() {
        this.setState({comments: CommentService.repository})
    }

    eachComment(comment) {
        return <Comment update={this.update} id={comment.id} title={comment.name} email={comment.email} text={comment.body} />
    }

    render() {
        switch(this.state.requestState) {
            case RequestType.PROCESSING: 
                return (<Loading />)
            case RequestType.SUCCESS:
                return (<div>{this.state.comments.map(this.eachComment.bind(this))}</div>)
            case RequestType.FAILED:
            default:
                return (<p>Retry</p>)
        }
    }
}

export default Comments