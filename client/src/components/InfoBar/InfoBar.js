import React from 'react';

import onlineIcon from '../../assets/icons/online.png';
import exitIcon from '../../assets/icons/exit.png';

import './InfoBar.css';

const InfoBar = (props) => {
    return (
        <div className="info-bar">
            <div className="room-status">
                <img className="online-icon" src={onlineIcon} alt="online " />
                <h3>{props.room}</h3>
            </div>
            <div className="room-exit">
                <a href="/"><img className="exit-icon" src={exitIcon} alt="EXIT "/></a>
            </div>
        </div>
    )
}

export default InfoBar;
