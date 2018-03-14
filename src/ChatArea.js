import React, { Component } from "react";
import PropTypes from 'prop-types';

class ChatArea extends Component {
    static propTypes = {
        messages: PropTypes.array
    }
	render() {
        var messages = this.props.messages || [];
        return (
            <div className="chatArea">
                {messages.map(function(message, i){
                    return (
                        <p key={i}> 
                            {message}
                        </p>
                    ); 
                })}
            </div>
        );
	}
}

export default ChatArea;
