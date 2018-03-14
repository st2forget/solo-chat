import React, { Component } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";
import SendButton from "./SendButton";
// import swapi from 'swapi-node';

class MessageBar extends Component {
    static propTypes = {
      onSendMessage: PropTypes.func
    }
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            disabled: false
        };
    }
    async sendMessageHandler () {
        if (this.state.disabled) {
            return;
        }
        if (this.state.message === '/time') {
            this.props.onSendMessage && this.props.onSendMessage((new Date()).toString());
        } else if (this.state.message === '/goodbye') {
            this.setState({
                disabled: true
            });
        } else if (this.state.message.startsWith('/starwars ')) {
            var character = this.state.message.replace('/starwars ', '');
            var people = await fetch('/starwars/api/people/?search=' + character);
            var json = await people.json();
            var message = json.results && json.results[0] && json.results[0].name;
            !!message && this.props.onSendMessage && this.props.onSendMessage(message);
        } else if (this.state.message.startsWith('/')) {
            this.props.onSendMessage && this.props.onSendMessage('The command is not available.');
        } else {
            !!this.state.message && this.props.onSendMessage && this.props.onSendMessage(this.state.message);
        }
        this.setState({
            message: ''
        });
        this.refs.textInput.cleanUp();
    }
    onChangeHandler (e) {
        this.setState({
            message: e.target.value
        });
    }
    render() {
        return (
            <div className="messageBar">
                <TextInput ref="textInput" onChange={this.onChangeHandler.bind(this)} onSendMessage={this.sendMessageHandler.bind(this)}/>
                <SendButton onSendMessage={this.sendMessageHandler.bind(this)} disabled={this.state.disabled}/>
            </div>
        );
    }
}

export default MessageBar;
