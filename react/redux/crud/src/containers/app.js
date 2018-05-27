import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Menu from '../layout/menu'
import Home from './home'
import Teams from './teams'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <section>
                    <Menu />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/teams" exact component={Teams} />
                    </Switch>
                </section>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => { return {teams: state.teams, name: state.name} }
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)