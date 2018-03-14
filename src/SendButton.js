import React, { Component } from "react";
import PropTypes from 'prop-types';

class SendButton extends Component {
    static propTypes = {
        onSendMessage: PropTypes.func,
        disabled: PropTypes.bool
    }
	render() {
		return <button onClick={this.props.onSendMessage} disabled={this.props.disabled}>Send</button>;
	}
}

export default SendButton;
