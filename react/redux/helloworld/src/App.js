import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onChangeHandler(event) {
    console.log('from onChangeHandler App.js')
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello, {this.props.text}
          <input onChange={this.onChangeHandler.bind(this)} />
        </p>
      </div>
    );
  }
}

export default App;
