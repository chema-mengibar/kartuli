import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import { hot } from 'react-hot-loader';

import RegionHeader from './components/organisms/region-header'
import RegionMain from './components/organisms/region-main'
import RegionFooter from './components/organisms/region-footer'

import {Lesson} from './components/pages/lesson/lesson'
import {Intro} from './components/pages/intro/intro'
import {Menu} from './components/pages/menu/menu'

function App() {
  return (
     <Router>
        <RegionHeader />
        <RegionMain>
        <Switch>
          <Route path="/lesson">
            <Lesson />
          </Route>
          <Route path="/menu">
            <Menu />
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
