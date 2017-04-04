import React from 'react';
import XMPP from 'node-xmpp-client/browserify';

export default class IM extends React.Component {
    constructor(options) {
        super();
        let { user = 'user', password = 'secret' } = options;
        this._connectionStatus = '';
        this.client = new XMPP.Client({
            // websocket: { url: 'ws://localhost:5280/xmpp-websocket/' },
            bosh: {url: 'http://localhost:5222/'},
            jid: `${user}@localhost`,
            password: password,
            preferred: 'PLAIN'
        });

        this.client.on('online',  () =>{
            this.connectionStatus = 'online';
            console.log('online');
            var recipients = ['tres.uno@localhost'];
            recipients.forEach(to => {
                var stanza = new XMPP.Element('message', {to: to, type: 'chat'})
                .c('body')
                .t('Hello from browser');
                this.client.send(stanza);
            });
                
            //this.client.connection.socket.setTimeout(0);
            //this.client.connection.socket.setKeepAlive(true, 10000);
        })

        this.client.on('error', err => {
            this.connectionStatus = err;
            console.error(err);
        })
        this.client.on('stanza', stanza => {
            console.log('client1: stanza', stanza.root().toString());
        })
        this.connectionStatus = 'New';
    }
    set connectionStatus(value) { 
        this._connectionStatus = value;
    }
    get connectionStatus() {
        return this._connectionStatus;
    }


    render() {
        return (
        <div className="im-container">
            <div className="im-header">
            IM
            </div>
            <p className="im-body">
            <span>{this.connectionStatus}</span>
            </p>
        </div>
        );
    }
}