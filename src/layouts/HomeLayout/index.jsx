import { AuthContext } from 'contexts';
import React, { useContext, useEffect } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { delayImport } from "utils";
const Home = delayImport(import('pages/Home'));

const HomeLayout = () => {
    const {doGetUserInfo} = useContext(AuthContext);
    
    /*eslint-disable */
    useEffect(() => {
        doGetUserInfo();
    },[])
     /*eslint-enable */

    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" exact component={Home} />
                <Route path="*">
                    <Redirect to="/not-found" />
                </Route>
            </Switch>
        </div>
    )
}

export default HomeLayout;