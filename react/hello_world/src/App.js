import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/App.css';
import HelloWorld from './components/hello_world'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is my first React App
          <HelloWorld />
        </p>
      </div>
    );
  }
}

export default App;
