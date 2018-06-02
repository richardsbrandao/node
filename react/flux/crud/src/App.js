import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomePage from './page/home_page'
import EpicPage from './page/epic_page'
import StoryPage from './page/story_page'
import TaskPage from './page/task_page'

import Menu from './layout/menu'
import Content from './layout/content'

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Content>
          <Route exact path="/" component={HomePage} />
          <Route path="/epics" component={EpicPage} />
          <Route path="/stories" component={StoryPage} />
          <Route path="/tasks" component={TaskPage} />
        </Content>
      </div>
    )
  }
}

export default App;
