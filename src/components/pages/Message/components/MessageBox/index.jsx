import { AuthContext, HomeContext, MessengerContext } from 'contexts';
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { MessageItem } from 'components';
import './index.scss';
import { Input } from 'components/common';

export const MessageBox = () => {
    const [val, setVal] = useState('');
    const messRef = useRef();
    const { conversation, inboxeDetail, setInboxDetail } = useContext(MessengerContext);
    const { userInfo } = useContext(AuthContext);
    const { socket } = useContext(HomeContext);


    /*eslint-disable */
    useEffect(() => {
        socket.on('sendMessage', (response) => {
            const currentId = userInfo._id;
            const { creator, recipient } = response.data;
            const conversationId = conversation && conversation._id; 
            if (
                (currentId === creator && conversationId === recipient) ||
                (currentId === recipient && conversationId === creator)
            ) {
                setInboxDetail(old => [...old, response.data]);
            }
        });
        return () => {
            socket.off('sendMessage');
        }
    }, [conversation]);
    /*eslint-enable */

    useLayoutEffect(() => {
        if (messRef.current.scrollHeight > messRef.current.offsetHeight)
            messRef.current.scrollTop = messRef.current.scrollHeight;
    }, [inboxeDetail])

    const sendnewMessage = () => {
        if (val) {
            const payload = {
                recipient: conversation._id,
                text: val,
            }
            socket.emit('sendMessage', payload);
            setVal('');
        }
    }

    const hanldeChangeInput = e => {
        const mess = e.target.value;
        setVal(mess);
    }

    return (
        <div className={`tr_messbox`}>

            <div className="header">{conversation && conversation.fullName}</div>
            <div className="content" ref={messRef}>
                {
                    inboxeDetail.length > 0 && inboxeDetail.map((data, index) =>
                        <MessageItem
                            mess={data.text}
                            isAvatar={userInfo._id === data.recipient}
                            key={index}
                        // date={moment(data.created_date).format(DISPLAY_DATE)}
                        />
                    )
                }
            </div>
            <div className="footer flex">
                <Input
                    className="input-search"
                    placeholder="Aa"
                    onChange={hanldeChangeInput}
                    value={val}
                    onKeyPress={e => {
                        if (e.which === 13) sendnewMessage();
                    }}
                />
                <button onClick={sendnewMessage}>send</button>
            </div>
        </div>
    )
}

