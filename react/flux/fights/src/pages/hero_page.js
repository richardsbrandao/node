import React, { Component } from 'react'
import Table from '../components/table'
import config from '../config/config'

class HeroPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headers: [],
            body: []
        }
    }

    componentWillMount() {
        fetch(`${config.api_endpoint}/heros`)
            .then((response) => {
                return response.json()
            }).then((json) => {
                this.setState({
                    headers: ['id', 'name', 'city'],
                    body: json
                })
            }).catch((e) => {
                console.log('eeeeeeerrro')
            })
    }

    render() {
        return (
            <section>
                <Table headers={this.state.headers} data={this.state.body}/>
            </section>
       )
    }
}

export default HeroPage