import React from 'react';

import './MessageInput.css';

const MessageInput = (props) => {
    return (
        <form className="message-form">
            <input
            className="message-input"
            type="text"
            placeholder="Type a message..."
            value={props.message} 
            onChange={(event) => props.setMessage(event.target.value)}
            onKeyPress={event => event.key === 'Enter' ? props.sendMessage(event) : null}
            />

            <button className="send-message-btn" onClick={(event) => props.sendMessage(event)}>➪</button>
        </form>
    )
}

export default MessageInput;
