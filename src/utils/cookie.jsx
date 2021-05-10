import { ACCESS_TOKEN } from "utils";

export const getCookie = name => {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");

    if (parts.length === 2) return decodeURIComponent(parts.pop().split(";").shift());
}

export const getToken = () => {
    const accessToken = getCookie(ACCESS_TOKEN);

    return accessToken  || null;
}


export const createCookie = (name, value) => {
	document.cookie = name + "=" + value + "; path=/";
}

export const removeCookie = name => {
    createCookie(name, "", -1);
}

export const removeAll = () => {
    removeCookie(ACCESS_TOKEN);
}