import axios from "axios"
import { API_MESSAGE, GET_INBOX, GET_LIST_INBOX } from "utils";
import { authHeaders } from "./auth";

export const sendMessage = (data) => {
    return axios.post(API_MESSAGE, data, authHeaders());
}

export const getInboxDetail = (recipientId) => {
    return axios.get(GET_INBOX.replace(":recipientId", recipientId), authHeaders());
}

export const getListInbox = () => {
    return axios.get(GET_LIST_INBOX, authHeaders());
}
