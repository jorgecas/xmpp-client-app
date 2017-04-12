import React from 'react';
import XMPP from 'node-xmpp-client/browserify';

export default class IM extends React.Component {
    constructor(options) {
        super();
        this.options = Object.assign({}, options);

        this.state = {
            connectionStatus: '',
            user: '',
            destination: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.connect = this.connect.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.destination = '';
        this.message = '';
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    createClient() {
        let { user = 'user', password = 'secret' } = this.state;

        this.client = new XMPP.Client({
            // websocket: { url: 'ws://localhost:5280/xmpp-websocket/' },
            bosh: {url: 'http://localhost:5222/'},
            jid: `${user}@localhost`,
            password: password,
            preferred: 'PLAIN'
        });

        this.client.on('online',  () =>{
            this.setState({connectionStatus: 'online'});
           
            //this.client.connection.socket.setTimeout(0);
            //this.client.connection.socket.setKeepAlive(true, 10000);
        })

        this.client.on('error', err => {
            this.setState({connectionStatus: err});
        })
        this.client.on('stanza', stanza => {
            this.setState({connectionStatus: stanza.toString()});
        })

        this.client.on('disconect', () => {
            this.setState({connectionStatus: 'disconected'});
        })
    }

    sendMessage() {
        var recipients = [this.state.destination];
        recipients.forEach(to => {
            var stanza = new XMPP.Element('message', {to: to, type: 'chat'})
            .c('body')
            .t(this.state.message);
            this.client.send(stanza);
        });
    }

    connect() {
        this.createClient();
    }

    render() {
        return (
        <div className="im-container">
            <div className="im-header">
            IM
            <input type="text" name='user' value={this.state.user} onChange={this.handleChange} />
            <input type='button' value='Connect' onClick={this.connect}/>
            </div>
            <label>To:</label>
            <input name='destination' value={this.state.destination} onChange={this.handleChange} /><br/>
            <label>Message:</label>
            <textarea name='message' cols='40' rows='4' value={this.state.message} onChange={this.handleChange} ></textarea><br/>
            <input type='button' value='Send' onClick={this.sendMessage}/>
            <p className="im-body">
            <span>{this.state.connectionStatus}</span>
            </p>
        </div>
        );
    }
}