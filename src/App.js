import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Login from './containers/Login/Login'
import Dashboard from './containers/Dashboard/Dashboard'
import AddMerchant from './containers/Dashboard/AddMerchant'
import EditMerchant from './containers/Dashboard/EditMerchant'

const checkAuth = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if (!isAuthenticated) {
    return false;
  }

  return true;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
  )} />
)


function App() {
  return (
    <BrowserRouter basename="dashboard">
      <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/dashboard/addmerchant" exact component={AddMerchant} />
        <PrivateRoute path="/dashboard/editmerchant/:id" exact component={EditMerchant} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
