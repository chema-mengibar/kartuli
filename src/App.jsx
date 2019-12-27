import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { hot } from 'react-hot-loader';

import Intro from './components/pages/intro'
import Menu from './components/pages/menu'
import Academy from './components/pages/academy'
import Lesson from './components/pages/lesson'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/menu" component={Menu} />
        <Route path="/academy" component={Academy} />
        <Route path="/lesson/:lessonId" component={Lesson} />
        <Route path="/" component={Intro} />
      </Switch>
    </Router>
  );
}

export default hot(module)(App);
