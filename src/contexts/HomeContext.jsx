import { createContext, useState } from "react";
import { AuthContextProvider } from "./AuthContext";
import io  from 'socket.io-client';
import { getToken } from 'utils';
const socket = io('/', {
    transports: ['websocket'],
    path: '/socket', // added this line of code
    auth: {token: getToken()}
});

export const HomeContext = createContext();

export const HomeContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState();

    return (
        <HomeContext.Provider 
            value={{ 
                isLoading, 
                socket,
                setIsLoading 
            }}
        >
            <AuthContextProvider>
                {children}
            </AuthContextProvider>
        </HomeContext.Provider>
    )
}