import React, { Component } from 'react'
import { Nav, NavItem, NavLink, CardTitle } from 'reactstrap'

class Menu extends Component {
    render() {
        return (
            <header>
                <Nav>
                    <NavItem>
                        <CardTitle className="title">REACT-REDUX TEAMS</CardTitle>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/teams">Teams</NavLink>
                    </NavItem>
                </Nav>
                <hr />
            </header>
        )
    }
}

export default Menu