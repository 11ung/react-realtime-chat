import { MessengerContext } from 'contexts';
import React, { useContext } from 'react';
import { MessageUserItem } from 'components';
import './index.scss';
import { Input } from 'components';

export const MessageNav = ({ allMessages = [] }) => {
    const { conversation, setConversation } = useContext(MessengerContext);

    const handleSelectUser = (user) => {
        setConversation(user);
    }

    return (
        <div className="tr_mess-nav">
            <div className="tr_mess-nav__header mbx2">
                <h1>Chat</h1>
                <div className="tr__field mtx1">
                    <div className="tr__field--wrapper">
                        <Input className="input-search" placeholder="Search in Messenger" />
                    </div>
                </div>
            </div>
            <div className="tr_mess-nav__content">
                {allMessages.length > 0 && allMessages.map(item => {
                    return (
                        <MessageUserItem
                            className={`${item && item.conversation && conversation && conversation._id === item.conversation._id ? "selected" : ''}`}
                            userInfo={item && item.conversation}
                            message={item && item.latestMessage}
                            handleSelect={handleSelectUser}
                            key={item && item.conversation._id}
                        />
                    )
                })
                }
            </div>
        </div>
    )
}

