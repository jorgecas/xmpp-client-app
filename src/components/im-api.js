import XMPP from 'node-xmpp-client/browserify';

export default class IMApi {
    constructor(options) {
        this.state = Object.assign({
            connectionStatus: '',
            user: '',
            destination: '',
            message: ''
        }, options);
        this.handleChange = this.handleChange.bind(this);
        this.connect = this.connect.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.destination = '';
        this.message = '';
    }

    setState(key, value) {
        this.state[key] = value;
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    createClient() {
        let { user = 'user', password = 'secret', resource = 'browser' } = this.state;

        this.client = new XMPP.Client({
            bosh: {url: 'http://localhost:5222/'},
            jid: `${user}@localhost/${resource}`,
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
            debugger;
            this.setState({connectionStatus: stanza});
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
}