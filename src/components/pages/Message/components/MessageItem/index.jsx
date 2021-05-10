import React from 'react';
import './index.scss';
import avatar from 'assets/images/default-avatar.png';

export const MessageItem = ({
    mess = '',
    isAvatar = false,
    date,
    className = ''
}) => {
    return (
        <div className={`item flex ${className} ${isAvatar ? 'left' : 'right'} mtx1 `}>
            {isAvatar &&  <img src={avatar} alt="avatar" className="avatar-mess mrx1"></img>}
            <div className={`tr_mess `}>{mess}</div>
            <div className="time">{date}</div>
        </div>
    )
}
