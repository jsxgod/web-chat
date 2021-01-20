import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';

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
            socket.emit('disconnect');

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

    console.log(message, messages);
    
    
    return (
        <div className="outer-container">
            <div className="container">
                <input 
                value={message} 
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                />
            </div>
        </div>
    )
}

export default Chat;
