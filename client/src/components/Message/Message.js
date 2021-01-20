import React from 'react';

import './Message.css';

const Message = (props) => {
    let isSentByMe = false;
    const trimmedName = props.name.trim().toLowerCase();

    if(props.message.user === trimmedName){
        isSentByMe = true;
    }

    return (
        isSentByMe
            ? (
                <div className="message-container justifyEnd">
                    <p className="message-username pr-10">{props.message.user}</p>
                    <div className="message-blob backgroundBlue">
                        <p className="message-content colorWhite">{props.message.content}</p>
                    </div>
                </div>
            )
            : (
                <div className="message-container justifyStart">
                    <div className="message-blob backgroundLight">
                        <p className="message-content colorDark">{props.message.content}</p>
                    </div>
                    <p className="message-username pl-10">{props.message.user}</p>
                </div>                
            )
    )
}

export default Message;
