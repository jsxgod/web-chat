import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';

let socket;

const Chat = (props) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:4000';

    useEffect(() => {
        /* Location is coming from React Router as a prop*/
        const parsedData = queryString.parse(props.location.search);

        socket = io(ENDPOINT)
        
        setName(parsedData.name);
        setRoom(parsedData.room);

        socket.emit('onJoin', { name, room });
    }, [ENDPOINT, props.location.search])
    
    return (
        <h1>hi from Chat component</h1>
    )
}

export default Chat;
