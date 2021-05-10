import { getUserInfo, login, register } from "actions/auth";
import { createContext, useState } from "react";
import { ACCESS_TOKEN, createCookie } from "utils";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});

    const doLogin = async (payload, callback) => {
        try {
            const response = await login(payload);
            const { data, status } = response;
            if(data && status === 200){
                createCookie(ACCESS_TOKEN, data.token);
                if(callback)
                    callback();
            }
        } catch (error) {

        }
    }

    const doRegister = async (payload, callback) => {
        try {
            const response = await register(payload);
            const { status } = response;
            if(status === 201){
                if(callback)
                    callback();
            }
        } catch (error) {

        }
    }

    const doGetUserInfo =  async () => {
        try {
            const response = await getUserInfo();
            const { data, status } = response;
            if(data && status === 200){
                setUserInfo(data);
            }
        } catch (error) {

        }
    }


    return (
        <AuthContext.Provider
            value={{
                userInfo,
                doLogin,
                doRegister,
                doGetUserInfo
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}