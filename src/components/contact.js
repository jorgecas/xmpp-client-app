import React, { Component } from 'react';

import './css/contact.css';

export default class Contact extends Component {
    constructor(options = {}) {
        super();

        this.state = Object.assign({
            avatar: '../images/default-avatar.png',
            name: 'Name',
            status: 'online'
        }, options)

    }
    render() {
        let status = this.state.status ? 'contact-status--' + this.state.status : '';
        
        return (
            <div className='contact'>
                <img className={'contact-avatar ' + status} src={this.state.avatar} alt={this.state.name} />
                <div className='contact-name--container'>
                   <span className='contact-name'>{this.state.name}</span>
                </div>
            </div>
        )
    }
}