import React, { Component } from 'react'
import EpicStore from '../store/epic_store'
import * as EpicActions from '../actions/epic_actions'
import Epic from '../components/epic'
import { Table, Button, Form, FormGroup } from 'reactstrap'


class EpicPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            epics: EpicStore.findAll()
        }
    }

    componentWillMount() {
        EpicStore.on('fetch', () => {
            this.setState({
                epics: EpicStore.findAll()
            })    
        })
    }

    create(e) {
        e.preventDefault()
        EpicActions.create(this.refs.name.value)
        this.refs.name.value = ''
    }

    update(newEpic) {
        EpicActions.update(newEpic)
    }

    remove(id) {
        console.log(id)
        EpicActions.remove(id)
    }
    
    render() {
        return (
            <div>
                <Form inline onSubmit={this.create.bind(this)}>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <input type="text" name="name" ref="name" className="form-control" placeholder="Epic name" />
                        <Button color="danger" type="submit">CREATE</Button>
                    </FormGroup>
                </Form>
                
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th colspan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.epics.map((epic) => {
                            return <Epic id={epic.id} name={epic.name} onUpdate={this.update} onRemove={this.remove} />
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}
  
export default EpicPage