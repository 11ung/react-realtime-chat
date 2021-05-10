import { AuthContext, HomeContext, MessengerContext } from 'contexts';
import React, { useContext, useEffect } from 'react';
import { MessageBox, MessageNav } from 'components/';
import './index.scss';

export const AllMessage = () => {
    const {
        allMessages,
        doGetListInbox,
        conversation,
        doGetInboxDetail,
        setConversation
    } = useContext(MessengerContext);
    const { socket } = useContext(HomeContext);
    const { userInfo } = useContext(AuthContext);

    /*eslint-disable */
    useEffect(() => {
        socket.on('newMessage', (response) => {
            const currentId = userInfo._id;
            const { recipient, creator } = response.data;
            console.log(response)
            if (currentId === recipient || currentId === creator) {
                doGetListInbox();
            }
        });
        doGetListInbox(data => {
            setConversation(data[0].conversation);
        });
    }, [])

    useEffect(() => {
        if (conversation)
            doGetInboxDetail(conversation._id);
    }, [conversation])
    /*eslint-enable */

    return (
        <div className="tr_mess-content flex ">
            <MessageNav allMessages={allMessages} />
            <MessageBox />
        </div>
    )
}

