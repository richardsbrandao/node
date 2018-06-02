import React, { Component } from 'react'
import { FormGroup, Label, Col, Collapse, Button } from 'reactstrap'

class TeamForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            message: { true: 'Create Team', false: 'Click To Create a Team' }
        }
    }

    toggleForm(e) {
        e.preventDefault()
        if(this.state.isOpen) {
            this.props.addTeam(this.getTeam())
        }
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getTeam() {
        const name = this.refs.name.value
        const country = this.refs.country.value
        const nationalLeague = this.refs.nationalLeague.value
        const championsLeague = this.refs.championsLeague.value
        const nationalCup = this.refs.nationalCup.value
        const worldCup = this.refs.worldCup.value
        return {name, country, nationalLeague, championsLeague, nationalCup, worldCup}
    }

    render() {
        return (
            <div>
                <form onSubmit={this.toggleForm.bind(this)}>
                    <FormGroup row>
                        <Button type="submit">{this.state.message[this.state.isOpen]}</Button>
                    </FormGroup>
                    <Collapse isOpen={this.state.isOpen}>
                        <FormGroup row>
                            <Label for="create-name">Name</Label>
                            <Col sm={10}>
                                <input type="text" className="form-control" ref="name" name="name" id="create-name" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="create-country">Country</Label>
                            <Col sm={10}>
                                <select type="select" ref="country" className="form-control" name="country" id="create-country">
                                    <option value="">All Countries</option>
                                    <option>Italy</option>
                                    <option>Spain</option>
                                    <option>Germany</option>
                                    <option>England</option>
                                    <option>Netherlands</option>
                                </select>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="nationalLeague">National League</Label>
                            <Col sm={10}>
                                <input type="number" className="form-control" ref="nationalLeague"  name="nationalLeague" id="nationalLeague" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="championsLeague">Champions League</Label>
                            <Col sm={10}>
                                <input type="number" className="form-control" ref="championsLeague" name="championsLeague" id="championsLeague" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="nationalCup">National Cup</Label>
                            <Col sm={10}>
                                <input type="number" className="form-control" ref="nationalCup" name="nationalCup" id="nationalCup" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="worldCup">World Cup</Label>
                            <Col sm={10}>
                                <input type="number" className="form-control" ref="worldCup" name="worldCup" id="worldCup" />
                            </Col>
                        </FormGroup>
                    </Collapse>
                </form> 
            </div>
        )
    }
}

export default TeamForm