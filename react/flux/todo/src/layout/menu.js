import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/epics">Epics</Link></li>
                    <li><Link to="/stories">Stories</Link></li>
                    <li><Link to="/tasks">Tasks</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Menu