import React, { Component } from "react";
import PropTypes from 'prop-types';

class MessageBar extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        onSendMessage: PropTypes.func
    }
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    cleanUp () {
        this.setState({value: ''});
    }
    onChangeHandler (e) {
        this.props.onChange && this.props.onChange(e);
        this.setState({value: e.target.value});
    }
    onKeyPressHandler (e) {
        if (e.key === 'Enter') {
            this.props.onSendMessage && this.props.onSendMessage();
        }
    }
	render() {
		return (
			<div className="textInput">
                <input type="text" value={this.state.value}
                  onChange={this.onChangeHandler.bind(this)}
                  onKeyPress={this.onKeyPressHandler.bind(this)}/>
			</div>
		);
	}
}

export default MessageBar;
