import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Concept from './container/concept.js';
import Races from './container/races.js';
import HumanDetails from './container/human-details.js';
import DwarfDetails from './container/dwarf-details.js';
import ElfDetails from './container/elf-details.js';
import AerialDetails from './container/aerial-details.js';
import DemonDetails from './container/demon-details.js';
import OrkDetails from './container/ork-details.js';
import UndeadDetails from './container/undead-details.js';
import InsectoidDetails from './container/insectoid-details.js';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Concept} />
      <Route path="/races" component={Races} />
      <Route path="/units/human" component={HumanDetails} />
      <Route path="/units/dwarf" component={DwarfDetails} />
      <Route path="/units/elf" component={ElfDetails} />
      <Route path="/units/aerial" component={AerialDetails} />
      <Route path="/units/demon" component={DemonDetails} />
      <Route path="/units/ork" component={OrkDetails} />
      <Route path="/units/undead" component={UndeadDetails} />
      <Route path="/units/insectoid" component={InsectoidDetails} />
    </Route>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
