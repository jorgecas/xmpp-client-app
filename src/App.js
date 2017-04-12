import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import './App.css';

import Layout from './pages/layout';
import Home from './pages/home';
import About from './pages/about';

class App extends Component {
  constructor() {
    super();
    this.history = createHistory();
  }

  render() {
    return (
      <Router history={this.history}>
        <div>
          <Layout />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
