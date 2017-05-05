import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Home
        <br/>
        <Link to="/dogs">Dogs</Link>
        <br/>
        <Link to="/cars">Cars</Link>
      </div>
    );
  }
}

export default App;
