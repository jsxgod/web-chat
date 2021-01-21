import React from 'react';
import ReactEmoji from 'react-emoji'
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
                    <div className="message-blob backgroundViolet">
                        <p className="message-content colorWhite">{ReactEmoji.emojify(props.message.content)}</p>
                    </div>
                </div>
            )
            : (
                <div className="message-container justifyStart">
                    <div className="message-blob backgroundLight">
                        <p className="message-content colorWhite">{ReactEmoji.emojify(props.message.content)}</p>
                    </div>
                    <p className="message-username pl-10">{props.message.user}</p>
                </div>                
            )
    )
}

export default Message;
