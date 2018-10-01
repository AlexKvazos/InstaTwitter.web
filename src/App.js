import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Content from './components/Content';
import './App.css';

window.BASE_URL = 'http://localhost:3000';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Content />
      </div>
    );
  }
}

export default App;
