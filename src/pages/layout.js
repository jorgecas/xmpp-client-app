import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/layout.css';

import logo from '../logo.svg';

class Home extends Component {

  render() {
      return (
            <div className="app-header">
              <div className="app-title">
                <img src={logo} className="app-logo" alt="logo" />
                <h2>Руский - Español</h2>
              </div>
              <nav className="app-navigation">
                <li><Link to="/" className='app-navigation--link'>Home</Link></li>
                <li><Link to="/about" className='app-navigation--link'>About</Link></li>
                <li className="app-navigation--login">Login</li>
              </nav>
            </div>
      );
  }
}

export default Home;
