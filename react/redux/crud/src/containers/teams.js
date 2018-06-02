import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../constants/actions'
import PropTypes from 'prop-types'
import { Table, Input } from 'reactstrap'
import TeamForm from '../components/team_form'
import TeamFilter from '../components/team_filter'

class Teams extends Component {
    componentWillMount() {
        this.props.findAll()
    }

    filter() {
        const name = this.state.name || null
        const order = this.state.order || null
        const country = this.state.country || null
        this.props.findBy({ name, country, order })
    }

    updateName(name) {
        this.setState({ name }, this.filter)
    }

    updateOrder(order) {
        this.setState({ order }, this.filter)
    }

    updateCountry(country) {
        this.setState({ country }, this.filter)
    }

    addTeam(team) {
        this.props.addTeam(team)
    }

    render() {
        return (
            <div>
                <TeamForm addTeam={this.addTeam.bind(this)} />
                <TeamFilter 
                    updateOrder={this.updateOrder.bind(this)} 
                    updateCountry={this.updateCountry.bind(this)}
                    updateName={this.updateName.bind(this)}
                    />
                
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
        }),
        addTeam: (team) => dispatch({
            type: Actions.ADD_TEAM,
            team
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams)