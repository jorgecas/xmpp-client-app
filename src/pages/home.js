import React, { Component } from 'react';

import ContactList from '../components/contact-list';
import ChatWindow from '../components/chat-window';

import './css/home.css';

class Home extends Component {

  render() {
      return (
        <div className="main-container">
          <div className="left-container">
            <ContactList/>
          </div>
          <div className="main-container">
            <ChatWindow/>
          </div>
        </div>
      );
  }
}

export default Home;
