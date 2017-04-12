import React, { Component } from 'react';

export default class ChatWindow extends Component {
    render() {
        return (
            <div className='chat'>
                <div className='chat-history'></div>
                <div className='chat-controls'>
                    <input type='text' className='message' />
                    <input type='button' className='button-send' value='Send' />
                </div>
            </div>
        )
    }
}