import React, { Component } from 'react';

class HelloWorld extends Component {
    constructor (props){
        super(props);
        this.state = { value: 1 }
        this.greetings = ["Hello World", "Olá Mundo", "Ciao Mondo"]
        this.changeLanguage = this.changeLanguage.bind(this);
    }
    
    changeLanguage(e) {
        this.setState({value: e.target.value})
    }
    
    render() {
        return (
            <div>
                <select onChange={this.changeLanguage} value={this.state.value}>
                    <option value="0">EN</option>
                    <option value="1">PT</option>
                    <option value="2">IT</option>
                </select>
                <p>{this.greetings[this.state.value]}</p>
            </div>
        )
    }
}

export default HelloWorld