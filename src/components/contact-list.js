import React, { Component } from 'react';

import Contact from './contact';

import './css/contact-list.css';

export default class ContactList extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3 className='online-contacts--title'>Online</h3>
                    <div>
                        <ul className='contact-list'>
                            <Contact/>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className='online-contacts--title'>Offline</h3>
                    <div>
                        <ul className='contact-list'>
                            <Contact status='offline'/>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}