import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './modules/routes';

import './index.styl'

render((
  <Router routes={routes(browserHistory)} history={browserHistory}/>
), document.getElementById('app'))
