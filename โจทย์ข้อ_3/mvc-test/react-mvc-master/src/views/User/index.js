import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
// Pages
const UserView = React.lazy(() => import('./view'));
const UserInsert = React.lazy(() => import('./insert'));
const UserUpdate = React.lazy(() => import('./update'));

class UserMain extends Component {

  render() {
    return (
        <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/user" name="Login Page" render={props => <UserView {...props} />} />
            <Route exact path="/user/insert" name="Login Page" render={props => <UserInsert {...props} />} />
            <Route exact path="/user/update/:user_code" name="Login Page" render={props => <UserUpdate {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}


export default (UserMain);
