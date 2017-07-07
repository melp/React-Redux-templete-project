import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	
  xname = "kok2";

  render() {

    let {name} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React, {name}</h2>
        </div>
        <p className="App-intro">
          To get started, edit src/App.js
        </p>
      </div>
    );
  }


}

export default App;
