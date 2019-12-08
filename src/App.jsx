import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { hot } from 'react-hot-loader';

import Intro from './components/pages/intro'
import Academy from './components/pages/academy'
import RegionHeader from './components/organisms/region-header'
import RegionMain from './components/organisms/region-main'
import RegionFooter from './components/organisms/region-footer'

function App() {
  return (
     <Router>
        <RegionHeader />
        <RegionMain>
          <Switch>
            <Route path="/academy">
              <Academy />
            </Route>
            <Route path="/">
              <Intro />
            </Route>
          </Switch>
        </RegionMain>
        <RegionFooter />
     </Router>
  );
}

export default hot(module)(App);
