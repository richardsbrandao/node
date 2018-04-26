import React, { Component } from 'react'

class Content extends Component {
    render() {
        return (<section class="main">{this.props.children}</section>)
    }
}

export default Content