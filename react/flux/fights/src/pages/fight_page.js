import React, { Component } from 'react'
import Table from '../components/table'
import fetch from 'isomorphic-fetch'
import config from '../config/config'

class FightPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            headers: [],
            body: []
        }
    }

    componentWillMount() {
        fetch(`${config.api_endpoint}/fights`)
            .then((response) => {
                return response.json()
            }).then((json) => {
                this.setState({
                    headers: ['id', 'winner', 'description', 'enemy', 'hero'],
                    body: json.map((fight) => {
                        return {id: fight.id, winner: fight.winner, description: fight.description, enemy: fight.enemy.name, hero: fight.hero.name}
                    })
                })
            }).catch((e) => {
                console.log('eeeeeeerrro')
            })
    }

    render() {
        return (
            <section>
                {<Table headers={this.state.headers} data={this.state.body}/>}
            </section>
       )
    }
}

export default FightPage