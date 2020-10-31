import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { HashRouter, Route, Switch, } from 'react-router-dom';
const Login = React.lazy(() => import('./views/Login'));
const State = React.lazy(() => import('./views/State'));
const Props = React.lazy(() => import('./views/Props'));
const MainLayout = React.lazy(() => import('./containers/MainLayout'));

function App() {
  const user_login = JSON.parse(localStorage.getItem('user_login'));
  if (user_login == null) {
    return (
      <HashRouter>
        <React.Suspense fallback={null}>
          <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
            <Route exact path="/state" name="State Page" render={props => <State {...props} />} />
            <Route exact path="/props/:code" name="Props Page" render={props => <Props {...props} />} />
            <Route path="/" name="Home" render={props => <Login {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  } else {
    return (
      <HashRouter>
        <React.Suspense fallback={null}>
          <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
          <Switch>
            <Route path="/" name="Home" render={props => <MainLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}
export default App;
