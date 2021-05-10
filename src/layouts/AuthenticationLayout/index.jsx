import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { delayImport } from "utils";

const LoginForm = delayImport(import('pages/Authencation/LoginForm'));

const AuthenticationLayout = () => {
    return (
        <div>
            <Switch>
                <Route path="/authentication" exact>
                    <Redirect to="/authentication/login" />
                </Route>
                <Route path="/authentication/login" exact component={LoginForm} />
                <Route path="*">
                    <Redirect to="/not-found" />
                </Route>
            </Switch>
        </div>
    )
}

export default AuthenticationLayout;