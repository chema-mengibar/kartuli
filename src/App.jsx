import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import { hot } from 'react-hot-loader';

import { NavContextProvider } from './helpers/contexts/Nav.context'

import Intro from './components/pages/intro'
import Menu from './components/pages/menu'
import Academy from './components/pages/academy'
import Lesson from './components/pages/lesson'

const SUBDIR =___SUBDIR___; // replace not work

function App() {
  return (
    <NavContextProvider>
      <Router basename={`${SUBDIR}`} >
        <Switch>
          <Route path="/menu" component={Menu} />
          <Route path="/academy" component={Academy} />
          <Route path="/lesson/:lessonId/:exerciseId?" component={Lesson} />
          <Route path="/" component={Intro} />
        </Switch>
      </Router>
    </NavContextProvider>
  );
}

export default hot(module)(App);
