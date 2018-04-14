import React, { Component } from 'react'

class Comment extends Component {
    render() {
        return (
            <div class="comment">
                <p class="title">{this.props.title}</p>
                <p class="email">{this.props.email}</p>
                <p class="body">{this.props.text}</p>
                <button class="pure-button">Edit</button>
                <button class="pure-button">Remove</button>
            </div>
        )
    }
}

export default Comment