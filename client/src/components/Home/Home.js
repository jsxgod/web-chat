import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="home-container">
            <div className="login-container">
                <h1 className="heading">Welcome to WebChat</h1>
                <div><input className="login-input" placeholder="Name" type="text" onChange={(event) => setName(event.target.value)} /></div>
                <div><input className="login-input mt-20" placeholder="Room" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="login-button mt-20" type="submit">Join</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
