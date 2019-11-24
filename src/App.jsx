import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { hot } from 'react-hot-loader';

import Routes from './helpers/routes'
import Server from './helpers/server'
import AppContext from './helpers/contexts/App.context'
import {Lesson} from './components/pages/lesson/lesson'
import {Intro} from './components/pages/intro/intro'
import {Menu} from './components/pages/menu/menu'
import ButtonCircle from './components/atoms/button-circle'

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
        {
          Routes('main').map( (item, idt) => {
            return ( 
              <li key={`menu-${idt}`}>
                <Link to={item.link}>{item.label}</Link>
              </li>
            )
          })
        }
        </ul>
      </nav>

      <ButtonCircle />  

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

     </Router>
    </>
  );
}

export default hot(module)(App);
