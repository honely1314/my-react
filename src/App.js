import React, {Component} from 'react';
import { HashRouter  as Router, Route, Link } from "react-router-dom";

import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

class App extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary"><Link to="/layout">entry</Link></Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
