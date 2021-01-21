import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="home-container">
            <div className="login-container">
                <div className="title-container">
                    <p className="title">Welcome</p>
                    <p className="title">to</p>
                    <p className="title">WebChat</p>
                </div>
                <div className="login-form">
                    <input className="login-input" placeholder="Name" type="text" onChange={(event) => setName(event.target.value)} />
                    <input className="login-input mt-20" placeholder="Room" type="text" onChange={(event) => setRoom(event.target.value)} />
                    
                    <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                        <button className="login-button mt-20" type="submit">Join</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
