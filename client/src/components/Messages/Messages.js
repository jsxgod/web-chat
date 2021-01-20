import React from 'react';
import { Message } from '../../components';


import './Messages.css';

const Messages = (props) => {
    return (
        <div className="messages-container">
            {props.messages.map((message, i) => <div key={i}><Message message={message} name={props.name}/></div>)}
        </div>
    )
}

export default Messages;
