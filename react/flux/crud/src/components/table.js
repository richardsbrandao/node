import React, { Component } from 'react'

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td colspan="2">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        )
    }
}

export default Table