import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Concept from './container/concept.js';
import Races from './container/races.js';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Concept} />
      <Route path="/races" component={Races} />
    </Route>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
