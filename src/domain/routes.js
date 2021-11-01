import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Menu } from '../presentation/components'
import { Login, Topics } from '../presentation/pages'

export default function Routes() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/topics' exact component={Topics} />
      </Switch>
    </Router>
  );
}