import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ContactList from './components/contact-list';
import ChatWindow from './components/chat-window';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div> 
        <div className="body-container">
          <div className='left-container'>
            <ContactList/>
          </div>
          <div className='main-container'>
            <ChatWindow/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
