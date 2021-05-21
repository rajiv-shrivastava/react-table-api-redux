import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import UserListComponent  from '../UserListComponent';
import Login from "../components/LoginComponent/"
import EmployeeFormComponent from '../components/EmployeeFormComponent/'
import EmployeeListComponent from '../components/EmployeeListComponent/'
import My404Component from '../components/My404Component/'
import { hot } from 'react-hot-loader/root';
import history from '../history';


function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => String(localStorage.getItem('authed')) == String(true)
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}


function Routes() {
  return (
    <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute exact path='/employeeform/:employeeid' component={EmployeeFormComponent} />
          <PrivateRoute exact path='/employees' component={EmployeeListComponent} />
          <Route path='*' exact={true} component={My404Component} />
        </Switch>
    </Router>
  );
}



export default hot(Routes)
