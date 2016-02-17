import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import About from './About';
import Repos from './Repos';
import Repo from './Repo';
import Home from './Home';

export default (browserHistory = null) => (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="repos" component={(props) => <Repos {...props} historyAdapter={browserHistory}/>}>
      <Route path=":userName/:repoName" component={Repo}/>
    </Route>
  </Route>
);
