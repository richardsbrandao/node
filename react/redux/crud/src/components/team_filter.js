import React, { Component } from 'react'
import { Input } from 'reactstrap'

class TeamFilter extends Component {
    updateName(e) {
        this.props.updateName(e.target.value)
    }

    updateOrder(e) {
        this.props.updateOrder(e.target.value)
    }

    updateCountry(e) {
        this.props.updateCountry(e.target.value)
    }

    render() {
        return(
            <section className="filter">
                <Input type="text" placeholder="Type a name" onChange={this.updateName.bind(this)} />
                <Input type="select" className="form-control" name="country" id="create-country" onChange={this.updateCountry.bind(this)}>
                    <option value="hn                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ">All Countries</option>
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
        )
    }
}

export default TeamFilter