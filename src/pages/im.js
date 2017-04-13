import React, { Component } from 'react';

import IMApi from '../components/im-api';

import ContactList from '../components/contact-list';
import ChatWindow from '../components/chat-window';

import './css/home.css';

class IM extends Component {
  constructor() {
    super();
    this.client = new IMApi({user: 'Jorge', password: 'lucy'});
    this.state = {
      imStatus: this.client.state.connectionStatus
    }

    this.handleConnect = this.handleConnect.bind(this);
  }
  handleConnect() {
    this.client.connect();
    this.setState({imStatus: 'online'});
  }
  render() {
    let connectButton;
    if(this.state.imStatus !== 'online') {
      connectButton = <input type='button' value='connect' onClick={this.handleConnect} />
    }
    return (
      <div className="main-container">
        <div className="left-container">
          {connectButton}
          <ContactList imClient={this.imClient}/>
        </div>
        <div className="main-container">
          <ChatWindow imClient={this.imClient}/>
        </div>
      </div>
    );
  }
}

export default IM;
