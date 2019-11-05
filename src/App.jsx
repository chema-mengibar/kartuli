import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { hot } from 'react-hot-loader';

import Server from './helpers/server'
import AppContext from './helpers/contexts/App.context'

import {Lesson} from './components/pages/lesson/lesson'

function App() {

  const { stateApp, dispatchApp } = useContext( AppContext )
  const [init, setInit] = useState( false )

  useEffect(() => {

  }, [])

  return (
    <>
     <Router>
      {stateApp.name}
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/lesson">Lesson</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/lesson">
            <Lesson> Lesson </Lesson>
          </Route>
          <Route path="/users">
            <div> Users</div>
          </Route>
          <Route path="/">
            <div> Home</div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default hot(module)(App);
