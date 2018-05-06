import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Menu extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to="/heros">Heros</Link></li>
                    <li><Link to="/fights">Fights</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Menu