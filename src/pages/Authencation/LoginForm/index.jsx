import React, { useState, useContext } from "react";
import { Input } from "components";
import { useHistory } from "react-router";
import './index.scss';
import { AuthContext } from "contexts";

const LoginFrom = () => {
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const { doLogin, doRegister } = useContext(AuthContext);

    const login = () => {
        doLogin({ email, password }, () => {
            history.push('/');
        });
    }

    const register = () => {
        doRegister({fullName, email, password});
    }

    return (
        <div className="tr_login-page">
            <div className="tr_login-page__form">
                <Input
                    className="mbx3"
                    label="Name"
                    placeholder="Enter name"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                />
                <Input
                    className="mbx3"
                    label="Email"
                    placeholder="Enter email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    className="mbx3"
                    label="Password"
                    placeholder="Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button
                    className="mrx2"
                    onClick={login}
                >
                    login
                </button>
                <button
                    onClick={register}
                >
                    register
                </button>
            </div>
        </div>
    )
}

export default LoginFrom;