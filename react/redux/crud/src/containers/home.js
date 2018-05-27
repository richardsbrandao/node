import React, { Component } from 'react'
import { Input } from 'reactstrap'
import { connect } from 'react-redux'
import Actions from '../constants/actions'


class Home extends Component {

    updateName(e) {
        this.props.sayHello(e.target.value)
    }

    render() {
        return (
            <div>
                <p> Hello World! <strong>{this.props.name}</strong></p>
                <Input type="text" placeholder="Say your name!" onChange={this.updateName.bind(this)} />
            </div>
        )
    }
}

const mapStateToProps = (state) => { return {name: state.hello.name} }
const mapDispatchToProps = dispatch => {
    return {
        sayHello: (name) => dispatch({
                type: Actions.SAY_HELLO,
                name
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)