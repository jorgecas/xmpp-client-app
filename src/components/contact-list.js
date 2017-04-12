import React, { Component } from 'react';

import Contact from './contact';

import './css/contact-list.css';

export default class ContactList extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3 className='contacts-title--online'>Online</h3>
                    <div>
                        <ul className='contact-list'>
                            <Contact/>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className='contacts-title--dnd'>Do not disturb</h3>
                    <div>
                        <ul className='contact-list'>
                            <Contact status='dnd'/>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className='contacts-title--away'>Away</h3>
                    <div>
                        <ul className='contact-list'>
                            <Contact status='away'/>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className='contacts-title--offline'>Offline</h3>
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