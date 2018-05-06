import React, { Component } from 'react'

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        {this.displayHeaderColumns()}
                    </tr>
                </thead>
                <tbody>
                    {this.displayData()}
                </tbody>
            </table>
        )
    }

    displayHeaderColumns() {
        return this.props.headers.map((header) => {
            return (<td>{header}</td>)
        })
    }

    displayData() {
        console.log(this.props.data)
        return (
            this.props.data.map((row) => {
                return (
                    <tr>
                        {
                            this.props.headers.map((header, index) => {
                                return  (
                                    <th>{row[header].toString()}</th>                       
                                )
                            })
                        }
                    </tr>

                )
            })
        )
    }
}

export default Table