import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'

class App extends Component {
    constructor(){
        super()
        this.state= {}
    }


  render() {
    return (
        <body>
          <Login/>
        </body>
    );
  }
}

export default App;
