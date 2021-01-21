import React from 'react';
import { Message } from '../../components';
import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.css';

const Messages = (props) => {
    return (
        <ScrollToBottom className="messages-container">
            {props.messages.map((message, i) => <div key={i}><Message message={message} name={props.name}/></div>)}
        </ScrollToBottom>
    )
}

export default Messages;
