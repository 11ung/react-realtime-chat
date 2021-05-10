import { getInboxDetail, getListInbox, sendMessage } from "actions";
import { createContext, useState } from "react";

export const MessengerContext = createContext();

export const MessengerProvider = ({ children }) => {
    const [allMessages, setAllMessages] = useState([]);
    const [conversation, setConversation] = useState(null);
    const [inboxeDetail, setInboxDetail] = useState([]);

    const doSendMessage = async (payload, callback) => {
        try {
            if (payload) {
                const response = await sendMessage(payload);
                const { data, status } = response;
                if (data && status === 200) {
                    if (callback)
                        callback();
                }
            }
        } catch (error) {

        }
    }

    const doGetInboxDetail = async (id, callback) => {
        setInboxDetail([]);
        const response = await getInboxDetail(id);
        const { data, status } = response;
        if (data && status === 200) {
            setInboxDetail(data)
            if (callback)
                callback();
        }
    }

    const doGetListInbox = async (callback) => {
        const response = await getListInbox();
        const { data, status } = response;
        if (data && status === 200) {
            setAllMessages(data);
            if (callback)
                callback(data);
        }
    }

    return (
        <MessengerContext.Provider
            value={{
                allMessages,
                inboxeDetail,
                conversation,
                setConversation,
                doSendMessage,
                doGetInboxDetail,
                doGetListInbox,
                setInboxDetail
            }}
        >
            {children}
        </MessengerContext.Provider>
    )
}