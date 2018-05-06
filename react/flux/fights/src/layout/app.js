import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Menu from './menu'
import Content from './content'
import HomePage from './../pages/home_page'
import FightPage from './../pages/fight_page'
import HeroPage from './../pages/hero_page'

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <hr />
                <Content>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/fights" component={FightPage} />
                    <Route path="/heros" component={HeroPage} />
                </Content>
            </div>
        )
    }
}

export default App