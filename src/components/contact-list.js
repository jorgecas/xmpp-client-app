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
                    <h3 className='online-contacts--title'>Do not disturb</h3>
                    <div>
                        <ul className='contact-list'>
                            <Contact status='dnd'/>
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
                <div>
                    <h3 className='online-contacts--title'>Away</h3>
                    <div>
                        <ul className='contact-list'>
                            <Contact status='away'/>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}