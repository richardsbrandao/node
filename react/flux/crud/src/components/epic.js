import React, { Component } from 'react'
import { Button, Form } from 'reactstrap'

class Epic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            name: props.name
        }
    }

    update(e) {
        e.preventDefault()
        this.props.onUpdate({id: this.props.id, name: this.refs.name.value})
        this.setState({edit: false})
    }

    change(e) {
        this.setState({ name: e.target.value })
    }

    render() {
        return (
            <tr> 
                <th scope="row">{this.props.id}</th>
                {this.state.edit === false ? this.renderColumn() : this.renderEdit()}
                <td><Button onClick={() => {this.props.onRemove(this.props.id)}}>Remover</Button></td>
            </tr>
        )
    }

    renderColumn() {
        return [
            <td>{this.props.name}</td>,
            <td><Button onClick={() => {this.setState({edit: true})}}>Editar</Button></td>
        ]
    }

    renderEdit() {
        return (
            <td colspan="2">
                <Form inline onSubmit={this.update.bind(this)}>
                    <input className="update-input" type="text" ref="name" value={this.state.name} onChange={this.change.bind(this)} />
                    <Button type="submit">Salvar</Button>
                </Form>
            </td>
        )
    }
}

export default Epic