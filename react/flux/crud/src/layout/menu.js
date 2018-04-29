import React, { Component } from 'react'
import { Nav, NavItem, NavLink, CardTitle } from 'reactstrap'

class Menu extends Component {
    render() {
        return (
            <Nav>
                <NavItem>
                    <CardTitle className="title">REACT FLUX EXAMPLE</CardTitle>
                </NavItem>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/epics">Epic</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/stories">Stories</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/tasks">Tasks</NavLink>
                </NavItem>
            </Nav>
        )
    }
}

export default Menu