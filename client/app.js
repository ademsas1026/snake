import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Users} from './components';
import 'babel-polyfill';


const App = () => (
  <div>
    <p> oh hai i'm boilerplate. is it hot in here or is it just me? </p>
    <Switch>
      <Route path="/users" component={Users} />
    </Switch>
  </div>
);


export default App;

