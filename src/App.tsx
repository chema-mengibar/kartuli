import React from "react";
import { ThemeProvider, css } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route   
} from "react-router-dom";
import { hot } from 'react-hot-loader';

import CoreService from '~/services/core/CoreService/CoreService'
import { useThemeContext, ThemeProps } from '~/context/Theme.context';

import Intro from './components/pages/intro/intro.index'
import Academy from './components/pages/academy/academy.index'
// import Menu from './components/pages/menu'
// import Lesson from './components/pages/lesson'
// import Trainer from './components/pages/trainer'

// @ts-ignore
const SUBDIR =___SUBDIR___;


function App() {

  const themeContext = useThemeContext();

  // @ts-ignore // todo Issue?
  const themeProps: ThemeProps  = themeContext.themeState 

  new CoreService()
 

  return (
    <ThemeProvider theme={ themeProps}>
      <Router basename={`${SUBDIR}`} >
        <Switch>
          <Route path="/academy" component={Academy} />
          <Route path="/" component={Intro} />

          {/* <Route path="/menu" component={Menu} />
          
          <Route path="/lesson/:lessonId/:exerciseId?" component={Lesson} />
          <Route path="/trainer/:trainerId" component={Trainer} />
            */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default hot(module)(App);
