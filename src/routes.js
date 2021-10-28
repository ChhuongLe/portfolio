import React from 'react';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage';
import { Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
          <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  )
}

export default Routes;

