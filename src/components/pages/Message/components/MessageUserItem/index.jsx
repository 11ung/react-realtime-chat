import React from 'react';
import './index.scss';
import avatar from 'assets/images/default-avatar.png';

export const MessageUserItem = ({
    className = "",
    userInfo = {},
    message = "",
    handleSelect = () => {}
}) => {
    return (
        <div className={`tr_user-item flex ${className}`} onClick={() => handleSelect(userInfo)}>
            <img src={avatar} alt="avatar" className="avatar mrx1"></img>
            <div className="tr_user-item__info">
                <div className="tr_user-item__info-name">{userInfo && userInfo.fullName}</div>
                <div className="tr_user-item__info-mess">{message}</div>
            </div>
        </div>
    )
}
