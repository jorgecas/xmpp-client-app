import React, { Component } from 'react';

import Contact from './contact';

import './css/contact-list.css';

export default class ContactList extends Component {
    constructor(options) {
        super();

        this.state = {
            contacts: [],
            imClient: options.imClient
        }
        this.validStatus = [
            {key: 'online', value: 'Online'}, 
            {key: 'dnd', value: 'Do not disturb'}, 
            {key: 'away', value: 'Away'}, 
            {key: 'offline', value: 'Offline'}
        ];

        this.changeContactStatus = this.changeContactStatus.bind(this);
        
        setTimeout(this.changeContactStatus, 1000);
    }
    
    componentDidMount() {
        this.setState({
            contacts: [
                {key: 1, id: 1, name: 'contact_1', status: 'online'},
                {key: 2, id: 2, name: 'contact_2', status: 'online'},
                {key: 3, id: 3, name: 'contact_3', status: 'dnd'},
                {key: 4, id: 4, name: 'contact_4', status: 'away'},
                {key: 5, id: 5, name: 'contact_5', status: 'offline'},
                {key: 6, id: 6, name: 'contact_6', status: 'offline'}
            ]
        });
    }

    getContactsByStatus(status) {
        return this.state.contacts.map(contact =>
                    contact.status === status && 
                    <Contact key={contact.key} name={contact.name} status={contact.status}/>
                );
    }
    changeContactStatus() {
        let contacts = this.state.contacts;
        contacts.push({key: 7, id: 7, name: 'contact_7', status: 'dnd'});
        contacts.splice(2, 1);
        this.setState(contacts);
    }
    render() {
        let contactList = (
            <div>
                {
                    this.validStatus.map(status => {
                        return (
                            <div key={status.key}>
                                <h3 className={'contacts-title--' + status.key}>{status.value}</h3>
                                <div>
                                    <ul className='contact-list'>
                                        {this.getContactsByStatus(status.key)}
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>)
        return contactList;
    }
}