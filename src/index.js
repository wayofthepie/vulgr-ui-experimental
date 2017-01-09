/**
 *
 */
'use strict';

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import '../node_modules/toastr/build/toastr.min.css';
//import '../node_modules/vis/dist/vis.min.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
