import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { AllMessage } from 'components';
import { MessengerProvider } from 'contexts/MessengerContext';
import { ACCESS_TOKEN, removeCookie } from 'utils';
import { AuthContext } from 'contexts';
import { logout } from 'actions';

const Home = () => {
    const history = useHistory();
    const {userInfo} = useContext(AuthContext);
    
    const handleLogout = () => {
        logout();
        removeCookie(ACCESS_TOKEN)
        history.push("/authentication");
    }
    
    return (
        <div>
            <div className="flex" style={{height: '38px', justifyContent: 'space-between', padding: '10px', alignItems: 'center'}}>
                Wellcome {userInfo && userInfo.fullName}!
                <button style={{height: '24px' }} onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <MessengerProvider>
                <AllMessage />
            </MessengerProvider>
        </div>
    )
}
export default Home;