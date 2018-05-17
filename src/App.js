import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Aux from '../src/common/Auxiliary.js';

class App extends Component {
  render() {
    return (

      <Aux>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
<<<<<<< HEAD
        <button className="btn btn-primary">thu lan 1</button>
        <div className="text-primary mt-4">Push len nhanh tao button, merge vao nhanh develop</div>
        <div className="text-danger mt-4 display-3">Push project to bitbucker</div>

      </div>
=======
          <button className="btn btn-primary">thu lan 1</button>
          <div className="text-primary mt-4">Push len nhanh tao button, merge vao nhanh develop</div>
          <div className="text-dark bold">
            push to upstream
          </div>
        </div>




>>>>>>> thay doi de push len upstream
      </Aux>

    );
  }
}

export default App;
