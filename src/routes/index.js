import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/Main'
import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/SignUp" component={SignUp}/>
      <Route path="/SignIn" component={SignIn}/>
      <Route path="/" component={Main}/>  
    </Switch>
  </BrowserRouter>
);
export default Routes;