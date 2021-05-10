export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const DISPLAY_DATE = "HH:mm, DD-MM-YYYY ";

const API_BASE_URL = `/api`;
export const LOGIN = `${API_BASE_URL}/users/login`;
export const LOGOUT =  `${API_BASE_URL}/users/logout`;
export const GET_USER_INFO =  `${API_BASE_URL}/users/me`;
export const API_USERS =  `${API_BASE_URL}/users`;

export const API_MESSAGE =  `${API_BASE_URL}/messages`;
export const GET_INBOX =  `${API_BASE_URL}/messages/inbox/detail/:recipientId`;
export const GET_LIST_INBOX =  `${API_BASE_URL}/messages/inbox/list`;

