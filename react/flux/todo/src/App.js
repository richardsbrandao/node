import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './page/home'
import Epic from './page/epic'
import Story from './page/story'
import Task from './page/task'

import Header from './layout/header'
import Menu from './layout/menu'
import Content from './layout/content'

// import logo from './images/logo.svg';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Content>
          <Route exact path="/" component={Home} />
          <Route path="/epics" component={Epic} />
          <Route path="/stories" component={Story} />
          <Route path="/tasks" component={Task} />
        </Content>
      </div>
    )
  }
}

export default App;
