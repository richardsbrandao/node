import React, { Component } from 'react'
import CommentState from '../models/comment_state'
import CommentService from '../service/comment_service';

class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            state: CommentState.VIEW,
            comment: {
                title: this.props.title
            }
        }

        this.commentService = new CommentService()
        this.edit = this.edit.bind(this)
        this.cancel = this.cancel.bind(this)
        this.save = this.save.bind(this)
        this.remove = this.remove.bind(this)
        this.updateInput = this.updateInput.bind(this)
    }

    save(e) {
        e.preventDefault()
        const title = this.refs.title.value
        const text = this.refs.text.value
        const id = this.props.id
        this.commentService.save({id, title, text})
        this.refs.title.value = ''
        this.refs.text.value = ''
        this.setState({state: CommentState.VIEW})
        this.props.update()
    }
    
    edit(e) {
        this.setState({state: CommentState.EDIT})
    }

    cancel() {
        this.setState({state: CommentState.VIEW})
    }

    remove() {
        this.commentService.remove(this.props.id)
        this.props.update()
    }

    updateInput(e) {
        this.setState({
            comment: {
                title: e.target.value,
            }
        })
    }

    render() {
        switch(this.state.state) {
            case CommentState.EDIT:
                return (
                    <form onSubmit={this.save}>
                        <div className="comment-edit">
                            <input className="input" type="text" ref="title" value={this.state.comment.title} onChange={this.updateInput} />
                            <p className="email">{this.props.email}</p>
                            <textarea className="text input" ref="text">{this.props.text}</textarea>
                            <button className="pure-button" type="submit">Save</button>
                            <button className="pure-button" onClick={this.cancel}>Cancel</button>
                        </div>
                    </form>
                )
            case CommentState.VIEW:
            default:
                return (
                    <div className="comment">
                        <p className="title">{this.state.comment.title}</p>
                        <p className="email">{this.props.email}</p>
                        <p className="body">{this.props.text}</p>
                        <button className="pure-button" onClick={this.edit}>Edit</button>
                        <button className="pure-button" onClick={this.remove}>Remove</button>
                    </div>
                )

        }
    }
}

export default Comment