import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../constants/actions'
import PropTypes from 'prop-types'
import { Table, Input } from 'reactstrap'

class Teams extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            order: null,
            country: null
        }
    }

    componentWillMount() {
        this.props.findAll()
    }

    updateName(e) {
        this.setState({
            name: e.target.value
        }, this.filter)
    }

    updateOrder(e) {
        this.setState({
            order: e.target.value
        }, this.filter)
    }

    updateCountry(e) {
        this.setState({
            country: e.target.value
        }, this.filter)
    }

    filter() {
        const name = this.state.name || null
        const order = this.state.order || null
        const country = this.state.country || null
        this.props.findBy({ name, country, order })
    }

    render() {
        return (
            <div>
                <section className="filter">
                    <Input type="text" placeholder="Type a name" onChange={this.updateName.bind(this)} />
                    <Input type="select" onChange={this.updateCountry.bind(this)}>
                        <option value="">All Countries</option>
                        <option>Italy</option>
                        <option>Spain</option>
                        <option>Germany</option>
                        <option>England</option>
                        <option>Netherlands</option>
                    </Input>
                    <Input type="select" onChange={this.updateOrder.bind(this)}>
                        <option value="">No Order</option>
                        <option value="nationalLeague">National League</option>
                        <option value="championsLeague">Champions</option>
                        <option value="nationalCup">National Cup</option>
                        <option value="worldCup">World Cup</option>
                    </Input>
                </section>
                <Table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Country</th>
                            <th>National League</th>
                            <th>Champions</th>
                            <th>National Cup</th>
                            <th>World Cup</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.list(this.props.teams.teams)}
                    </tbody>
                </Table>
            </div>
        )
    }

    list(teams) {
        return teams.map((team, i) => {
            return (
                <tr key={i}>
                    <th scope="row">{i+1}.</th>
                    <td>{team.name}</td>
                    <td>{team.country}</td>
                    <td>{team.nationalLeague}</td>
                    <td>{team.championsLeague}</td>
                    <td>{team.nationalCup}</td>
                    <td>{team.worldCup}</td>
                </tr>
            )
        })
    }
}

Teams.propTypes = {
    fetchData: PropTypes.func
}

const mapStateToProps = (state) => { 
    return {teams: state.teams}
}

const mapDispatchToProps = dispatch => {
    return {
        findAll: () => dispatch({
            type: Actions.FETCH_DATA
        }),
        findBy: (criteria) => dispatch({
            type: Actions.FILTER_TEAMS,
            criteria
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams)