import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Router, withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ACCESS_TOKEN, delayImport, getCookie } from 'utils';
import 'assets/styles/index.scss';
import { HomeContextProvider } from 'contexts/HomeContext';

const NotFound = delayImport(import('pages/NotFound'));
const AuthenticationLayout = delayImport(import('layouts/AuthenticationLayout'));
const HomeLayout = delayImport(import('layouts/HomeLayout'));

const customHistory = createBrowserHistory();

const PrivateRouter = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(props) => {
    const auth = getCookie(ACCESS_TOKEN);
    
		return auth ?	<Component {...props} /> : <Redirect to="/authentication" />
	}} />
)

const LoginRouter = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(props) => {
    const auth = getCookie(ACCESS_TOKEN);

		return auth ?	<Redirect to="/" /> : <Component {...props} />
	}} />
)

const App = () => {
  return (
    <>
      <Switch>
        <LoginRouter path="/not-found" component={NotFound} />
        <LoginRouter path="/authentication" component={AuthenticationLayout}/>
        <PrivateRouter path="/" component={HomeLayout} />
      </Switch>
    </>
  )
}

const AppRootWithRouter = withRouter(App);

const Root = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
          <HomeContextProvider>
            <Router history={customHistory}>
              <AppRootWithRouter />
            </Router>
          </HomeContextProvider>
      </Suspense>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
