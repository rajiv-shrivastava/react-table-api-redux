import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import UserListComponent  from '../UserListComponent';
import App from '../App'
import { hot } from 'react-hot-loader/root';


function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}


function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path='/users' component={UserListComponent} />
        </Switch>
    </Router>
  );
}



export default hot(Routes)
