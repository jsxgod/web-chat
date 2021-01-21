import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';

import { InfoBar, Messages, MessageInput } from '../../components';

let socket;

const Chat = (props) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:4000';

    useEffect(() => {
        /* Location is coming from React Router as a prop*/
        const parsedData = queryString.parse(props.location.search);

        socket = io(ENDPOINT);
        
        setName(parsedData.name);
        setRoom(parsedData.room);

        socket.emit('join', { name: parsedData.name, room: parsedData.room }, () => {});
        
        // unMount
        return () => {
            socket.disconnect();

            socket.off();
        }
    }, [ENDPOINT, props.location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
    
    return (
        <div className="outer-container">
            <div className="chat-container">
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <MessageInput message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default Chat;
