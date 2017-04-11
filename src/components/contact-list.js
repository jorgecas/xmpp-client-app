import React, { Component } from 'react';

export default class ContactList extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3 className='online-contacts--title'>Online</h3>
                    <div>
                        <ul className='contact-list'>
                            <li className='contact'>Contact_1</li>
                            <li className='contact'>Contact_2</li>
                            <li className='contact'>Contact_3</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className='online-contacts--title'>Offline</h3>
                    <div>
                        <ul className='contact-list'>
                            <li className='contact'>Contact_1</li>
                            <li className='contact'>Contact_2</li>
                            <li className='contact'>Contact_3</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}